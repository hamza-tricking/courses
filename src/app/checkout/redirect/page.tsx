'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CheckoutRedirect() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const redirectToCheckout = async () => {
      const sessionId = searchParams.get('session_id');
      
      if (!sessionId) {
        console.error('No session ID provided');
        return;
      }

      try {
        // Try direct URL approach first
        window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
      } catch (err) {
        console.error('Checkout error:', err);
      }
    };

    redirectToCheckout();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to secure checkout...</p>
      </div>
    </div>
  );
}
