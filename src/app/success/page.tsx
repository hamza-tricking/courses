'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    
    if (!sessionId) {
      setError('No session ID found');
      setLoading(false);
      return;
    }

    // You can verify the session here if needed
    // For now, we'll just show success
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link href="/store-books" className="text-green-600 hover:text-green-700 underline">
            Back to Store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/10">
          <div className="text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h1>
            
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been confirmed and you will receive a confirmation email shortly.
            </p>
            
            <div className="space-y-3">
              <Link
                href="/store-books"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                Continue Shopping
              </Link>
              
              <Link
                href="/"
                className="block w-full text-green-600 hover:text-green-700 py-3 rounded-lg border border-green-600 hover:bg-green-50 transition-colors font-semibold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
