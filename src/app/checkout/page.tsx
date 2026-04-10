'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const redirectToCheckout = async () => {
      const sessionId = searchParams.get('session_id');
      
      if (!sessionId) {
        setError('No session ID provided');
        setLoading(false);
        return;
      }

      try {
        // Redirect to our redirect page that handles the Stripe checkout properly
        window.location.href = `/checkout/redirect?session_id=${sessionId}`;
      } catch (err) {
        console.error('Checkout redirect error:', err);
        setError(err instanceof Error ? err.message : 'Failed to redirect to checkout');
      } finally {
        setLoading(false);
      }
    };

    redirectToCheckout();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to checkout...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Checkout Error
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-y-3">
            <button
              onClick={() => window.history.back()}
              className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
            >
              Go Back
            </button>
            <a
              href="/store-books"
              className="block w-full text-green-600 hover:text-green-700 py-3 rounded-lg border border-green-600 hover:bg-green-50 transition-colors font-semibold text-center"
            >
              Back to Store
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
