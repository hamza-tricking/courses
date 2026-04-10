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

export default function AGBPage() {
  const [page, setPage] = useState<WordPressPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch('https://wp.lisanakademie.de/wp-json/wp/v2/pages/4451');
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
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              <p className="mt-4 text-gray-600">Lade AGB...</p>
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
                className="text-4xl font-bold text-gray-900 mb-8 text-center"
                dangerouslySetInnerHTML={{ __html: page.title.rendered }}
              />
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
              />
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
