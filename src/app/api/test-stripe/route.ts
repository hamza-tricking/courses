import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

    return NextResponse.json({
      stripeSecretKey: stripeSecretKey ? 'configured' : 'missing',
      stripePublishableKey: stripePublishableKey ? 'configured' : 'missing',
      stripeSecretKeyLength: stripeSecretKey?.length || 0,
      stripePublishableKeyLength: stripePublishableKey?.length || 0,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Test failed' }, { status: 500 });
  }
}
