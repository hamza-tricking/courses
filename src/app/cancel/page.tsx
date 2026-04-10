'use client';

import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/10">
          <div className="text-center">
            {/* Cancel Icon */}
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Payment Cancelled
            </h1>
            
            <p className="text-gray-600 mb-6">
              Your payment has been cancelled. You can try again whenever you're ready.
            </p>
            
            <div className="space-y-3">
              <Link
                href="/store-books"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                Try Again
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
