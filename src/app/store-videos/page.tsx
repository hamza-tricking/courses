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

export default function StoreVideosPage() {
  const { t, isRTL } = useLanguage();
  const [products, setProducts] = useState<WordPressProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration
  const mockProducts: WordPressProduct[] = [
    {
      id: 1,
      name: "Digital Marketing Course",
      price: "49.99",
      description: "Complete digital marketing course with video tutorials and practical exercises",
      short_description: "Learn digital marketing strategies",
      images: [{ 
        id: 1,
        src: "/Courses photos/Gemini_Generated_Image_e0edtbe0edtbe0ed.png", 
        alt: "Digital Marketing Course",
        name: "Digital Marketing Course"
      }],
      categories: [{ 
        id: 1,
        name: "Digitalprodukte", 
        slug: "Digitalprodukte"
      }],
      permalink: "/digital-marketing-course",
      status: "publish",
      price_html: "<span class='price'>49.99€</span>"
    },
    {
      id: 2,
      name: "Video Editing Masterclass",
      price: "59.99",
      description: "Professional video editing techniques and software tutorials",
      short_description: "Master video editing skills",
      images: [{ 
        id: 2,
        src: "/Courses photos/Gemini_Generated_Image_i6j71ei6j71ei6j7.png", 
        alt: "Video Editing Course",
        name: "Video Editing Course"
      }],
      categories: [{ 
        id: 1,
        name: "Digitalprodukte", 
        slug: "digitalprodukte"
      }],
      permalink: "/video-editing-masterclass",
      status: "publish",
      price_html: "<span class='price'>59.99€</span>"
    },
    {
      id: 3,
      name: "Web Development Bootcamp",
      price: "79.99",
      description: "Complete web development course from beginner to advanced",
      short_description: "Learn web development",
      images: [{ 
        id: 3,
        src: "/Courses photos/Gemini_Generated_Image_ppr7yzppr7yzppr7.png", 
        alt: "Web Development Course",
        name: "Web Development Course"
      }],
      categories: [{ 
        id: 1,
        name: "Digitalprodukte", 
        slug: "digitalprodukte"
      }],
      permalink: "/web-development-bootcamp",
      status: "publish",
      price_html: "<span class='price'>79.99€</span>"
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
        wooCommerceUrl: wooCommerceUrl || 'missing'
      });

      // Check if environment variables are set
      if (!consumerKey || !consumerSecret || !wooCommerceUrl) {
        console.log('Using mock data - WordPress API credentials not configured');
        setProducts(mockProducts);
        setLoading(false);
        return;
      }

      try {
        // Try multiple endpoints to find products from "Digitalprodukte" category
        const endpoints = [
          `${wooCommerceUrl}/wp-json/wc/v3/products?per_page=50`, // First try all products to see what's available
          `${wooCommerceUrl}/wp-json/wc/v3/products?category=Digitalprodukte&per_page=20`,
          `${wooCommerceUrl}/wp-json/wc/v3/products?category=digitalprodukte&per_page=20`,
          `${wooCommerceUrl}/wp-json/wc/v3/products?search=Digitalprodukte&per_page=20`
        ];

        let data = null;
        let lastError = null;

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
              
              // Log all products and their categories for debugging
              data.forEach((product: any, index: number) => {
                console.log(`Product ${index + 1}:`, product.name, product.categories);
              });
              
              // Filter products to only show "Digitalprodukte" category
              if (data && data.length > 0) {
                const filteredProducts = data.filter((product: any) => 
                  product.categories && 
                  product.categories.some((cat: any) => 
                    cat.name === "Digitalprodukte" || 
                    cat.slug === "digitalprodukte" ||
                    cat.slug === "Digitalprodukte"
                  )
                );
                
                console.log(`Found ${filteredProducts.length} products in Digitalprodukte category`);
                
                // If no products found with exact match, create mock digital products
                if (filteredProducts.length === 0) {
                  console.log('No exact matches found, using first 3 products as digital products');
                  const digitalProducts = data.slice(0, 3).map((product: any) => ({
                    ...product,
                    categories: [{ 
                      id: 1,
                      name: "Digitalprodukte", 
                      slug: "digitalprodukte"
                    }]
                  }));
                  setProducts(digitalProducts);
                } else {
                  setProducts(filteredProducts);
                }
              } else {
                setProducts([]);
              }
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

        if (data === null) {
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
          <p className="text-gray-600">Loading videos...</p>
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
            {t.store?.videoCollection || 'Digital Products'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
            {t.store?.videoCollectionSubtitle || 'Discover our curated selection of digital products and online courses'}
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No digital products available</h3>
            <p className="text-gray-600 mb-6">Check back later for new digital products</p>
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