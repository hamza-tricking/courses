'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface WordPressPage {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export default function DatenschutzerklarungPage() {
  const [page, setPage] = useState<WordPressPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch('https://wp.lisanakademie.de/wp-json/wp/v2/pages/4492');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: WordPressPage = await response.json();
        setPage(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch page');
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
          <style jsx>{`
            /* Override WordPress styles for mobile */
            .prose * {
              max-width: 100% !important;
              box-sizing: border-box !important;
            }
            .prose img {
              max-width: 100% !important;
              height: auto !important;
            }
            .prose table {
              max-width: 100% !important;
              overflow-x: auto !important;
              display: block !important;
            }
            .prose td, .prose th {
              min-width: 100px !important;
              word-wrap: break-word !important;
            }
            .prose [style*="width"] {
              width: 100% !important;
              max-width: 100% !important;
            }
          `}</style>
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              <p className="mt-4 text-gray-600">Lade Datenschutzerklärung...</p>
            </div>
          )}
          
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h2 className="text-red-800 text-lg font-semibold mb-2">Fehler beim Laden</h2>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          )}
          
          {page && (
            <div className="prose prose-lg max-w-none">
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
                dangerouslySetInnerHTML={{ __html: page.title.rendered }}
              />
              <div 
                className="text-gray-700 leading-relaxed text-sm sm:text-base overflow-x-hidden"
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                style={{
                  maxWidth: '100%',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}
              />
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
