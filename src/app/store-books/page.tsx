'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

interface WordPressProduct {
  id: number;
  name: string;
  price: string;
  description: string;
  short_description: string;
  images: Array<{ 
    id: number;
    src: string; 
    alt: string;
    name: string;
  }>;
  categories: Array<{ 
    id: number;
    name: string;
    slug: string;
  }>;
  permalink: string;
  status: string;
  price_html: string;
}

export default function StoreBooksPage() {
  const { t, isRTL } = useLanguage();
  const [products, setProducts] = useState<WordPressProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration
  const mockProducts: WordPressProduct[] = [
    {
      id: 1,
      name: "Advanced Arabic Grammar",
      price: "29.99",
      description: "Comprehensive guide to Arabic grammar for advanced learners",
      short_description: "Learn advanced Arabic grammar concepts",
      images: [{ 
        id: 1,
        src: "/books/تصميم غلاف كتاب رحلة في بلاد الغرب - arabic book cover.jpg", 
        alt: "Arabic Grammar Book",
        name: "Arabic Grammar Book"
      }],
      categories: [{ 
        id: 1,
        name: "Language", 
        slug: "language"
      }, { 
        id: 2,
        name: "Education", 
        slug: "education"
      }],
      permalink: "/advanced-arabic-grammar",
      status: "publish",
      price_html: "<span class='price'>29.99€</span>"
    },
    {
      id: 2,
      name: "Mathematics for Beginners",
      price: "24.99",
      description: "Step-by-step introduction to fundamental mathematical concepts",
      short_description: "Basic mathematics for beginners",
      images: [{ 
        id: 2,
        src: "/books/Book Cover Design - كتب in 2022 _ Ebook cover design, Book cover design, Book cover artwork.jpg", 
        alt: "Mathematics Book",
        name: "Mathematics Book"
      }],
      categories: [{ 
        id: 3,
        name: "Mathematics", 
        slug: "mathematics"
      }, { 
        id: 4,
        name: "Education", 
        slug: "education"
      }],
      permalink: "/mathematics-for-beginners",
      status: "publish",
      price_html: "<span class='price'>24.99€</span>"
    },
    {
      id: 3,
      name: "Science Explorations",
      price: "34.99",
      description: "Interactive science experiments and explanations for young learners",
      short_description: "Science experiments for kids",
      images: [{ 
        id: 3,
        src: "/books/Design a professional and beautiful book cover _ Book cover contest.jpg", 
        alt: "Science Book",
        name: "Science Book"
      }],
      categories: [{ 
        id: 5,
        name: "Science", 
        slug: "science"
      }, { 
        id: 6,
        name: "Education", 
        slug: "education"
      }],
      permalink: "/science-explorations",
      status: "publish",
      price_html: "<span class='price'>34.99€</span>"
    },
    {
      id: 4,
      name: "History of Civilizations",
      price: "39.99",
      description: "Journey through the great civilizations of human history",
      short_description: "History of world civilizations",
      images: [{ 
        id: 4,
        src: "/books/Design the cover of my new book on bankruptcy! _ Book cover contest.jpg", 
        alt: "History Book",
        name: "History Book"
      }],
      categories: [{ 
        id: 7,
        name: "History", 
        slug: "history"
      }, { 
        id: 8,
        name: "Education", 
        slug: "education"
      }],
      permalink: "/history-of-civilizations",
      status: "publish",
      price_html: "<span class='price'>39.99€</span>"
    }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;
      const wooCommerceUrl = process.env.NEXT_PUBLIC_WC_API_URL;

      console.log('Environment variables:', {
        consumerKey: consumerKey ? 'exists' : 'missing',
        consumerSecret: consumerSecret ? 'exists' : 'missing',
        wooCommerceUrl
      });

      // Check if environment variables are set
      if (!consumerKey || !consumerSecret) {
        console.log('Using mock data - WordPress API credentials not configured');
        setProducts(mockProducts);
        setLoading(false);
        return;
      }

      try {
        // Try multiple endpoints to find products
        const endpoints = [
          `${wooCommerceUrl}/wp-json/wc/v3/products?per_page=20`,
          `${wooCommerceUrl}/wp-json/wc/v3/products?status=publish&per_page=20`,
          `${wooCommerceUrl}/wp-json/wc/v3/products?category=23&per_page=20`, // Try category ID 23 (كتب التأسيس)
          `${wooCommerceUrl}/wp-json/wc/v3/products?category=%D9%83%D8%AA%D8%A8-%D8%A7%D9%84%D8%AA%D8%A3%D8%B3%D9%8A%D8%B3&per_page=20` // URL encoded category slug
        ];

        let data = null;
        let lastError = null;

        // First, let's fetch categories to see what's available
        try {
          const categoriesResponse = await fetch(`${wooCommerceUrl}/wp-json/wc/v3/products/categories`, {
            headers: {
              'Authorization': `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
              'Content-Type': 'application/json'
            }
          });
          
          if (categoriesResponse.ok) {
            const categories = await categoriesResponse.json();
            console.log('Available categories:', categories);
          }
        } catch (catError) {
          console.log('Could not fetch categories:', catError);
        }

        for (const endpoint of endpoints) {
          console.log(`Trying endpoint: ${endpoint}`);
          try {
            const response = await fetch(endpoint, {
              headers: {
                'Authorization': `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
                'Content-Type': 'application/json'
              }
            });

            console.log(`Response status: ${response.status}`);

            if (response.ok) {
              data = await response.json();
              console.log(`Success! Found ${data.length} products`);
              break;
            } else {
              const errorText = await response.text();
              console.log(`Error response: ${errorText}`);
              lastError = new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
            }
          } catch (err) {
            console.log(`Request failed for ${endpoint}:`, err);
            lastError = err;
          }
        }

        if (data) {
          setProducts(data);
        } else {
          throw lastError || new Error('All endpoints failed');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        console.log('Falling back to mock data');
        setProducts(mockProducts);
        setError(null); // Clear error since we're using mock data
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading books...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link href="/" className="text-green-600 hover:text-green-700 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(34, 197, 94, 0.05) 35px, rgba(34, 197, 94, 0.05) 70px)`,
          animation: 'slide 30s linear infinite'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 ${isRTL ? 'rtl' : ''}`}>
          <Link 
            href="/" 
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.store?.backToHome || 'Back to Home'}
          </Link>
          <h1 className="text-3xl sm:text-4xl py-4 md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
            {t.store?.bookCollection || 'Book Collection'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
            {t.store?.bookCollectionSubtitle || 'Discover our curated selection of educational books and learning resources'}
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <>
            {/* Mobile: Horizontal Scroll */}
            <div className="flex overflow-x-auto pb-4 lg:hidden gap-4 snap-x snap-mandatory">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-none w-80 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10 snap-start"
                >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0].src}
                      alt={product.images[0].alt || product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 line-clamp-2">{product.name}</h3>
                  <p 
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></p>
                  
                  {/* Categories */}
                  {product.categories && product.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.categories.map((category, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {product.price ? `${product.price}€` : 'Price on request'}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Link 
                    href={`/product/${product.id}`}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
                  >
                    {t.store?.viewDetails || 'View Details'}
                  </Link>
                </div>
              </div>
            ))}
              </div>

              {/* Desktop: Grid */}
              <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10"
                  >
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden">
                      {product.images && product.images.length > 0 ? (
                        <img
                          src={product.images[0].src}
                          alt={product.images[0].alt || product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Product Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-2 line-clamp-2">{product.name}</h3>
                      <p 
                        className="text-gray-600 mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                      ></p>
                      
                      {/* Categories */}
                      {product.categories && product.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.categories.map((category, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                            >
                              {category.name}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-green-600">
                          {product.price ? `${product.price}€` : 'Price on request'}
                        </span>
                      </div>

                      {/* Action Button */}
                      <Link 
                        href={`/product/${product.id}`}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
                      >
                        {t.store?.viewDetails || 'View Details'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
          <div className="text-center py-12">
            <div className="mb-6">
              <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No books available</h3>
            <p className="text-gray-600 mb-6">Check back later for new book arrivals</p>
            <Link 
              href="/" 
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
