import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function POST(request: NextRequest) {
  try {
    console.log('Checkout API called');
    
    // Check if Stripe secret key is available and valid
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      console.error('STRIPE_SECRET_KEY is not set');
      return NextResponse.json(
        { error: 'Stripe configuration error: Secret key not found' },
        { status: 500 }
      );
    }

    // Check if it's a live key
    const isLiveMode = stripeSecretKey.startsWith('sk_live_');
    console.log(`Stripe mode: ${isLiveMode ? 'LIVE' : 'TEST'}`);
    
    if (!stripeSecretKey.startsWith('sk_live_') && !stripeSecretKey.startsWith('sk_test_')) {
      console.error('Invalid STRIPE_SECRET_KEY format');
      return NextResponse.json(
        { error: 'Stripe configuration error: Invalid secret key format' },
        { status: 500 }
      );
    }

    const { items } = await request.json();
    console.log('Received items:', items);

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid items provided' },
        { status: 400 }
      );
    }

    // Create line items for Stripe
    const line_items = items.map((item) => {
      console.log('Processing item:', item);
      
      // Validate required fields
      if (!item.name) {
        throw new Error('Product name is required');
      }
      
      if (!item.price || isNaN(parseFloat(item.price))) {
        throw new Error('Valid product price is required');
      }
      
      const unitAmount = Math.round(parseFloat(item.price) * 100);
      if (unitAmount <= 0) {
        throw new Error('Product price must be greater than 0');
      }
      
      return {
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
            description: item.description || `Purchase of ${item.name}`,
            images: item.images?.map((img: any) => img.src).filter(Boolean).filter((url: string) => {
              // Filter out URLs with non-ASCII characters that Stripe doesn't accept
              return !/[^\x00-\x7F]/.test(url);
            }).map((url: string) => {
              // Encode the URL to handle any special characters
              try {
                return encodeURI(url);
              } catch {
                return null;
              }
            }).filter(Boolean) || [],
          },
          unit_amount: unitAmount,
        },
        quantity: Math.max(1, parseInt(item.quantity) || 1),
      };
    });

    console.log('Creating Stripe session with line items:', line_items);

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/cancel`,
      metadata: {
        product_id: items[0].id?.toString() || '',
        product_name: items[0].name || '',
      },
    });

    console.log('Stripe session created successfully:', session.id);
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Internal server error', details: errorMessage },
      { status: 500 }
    );
  }
}
