'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useParams, useRouter } from 'next/navigation';
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

export default function ProductDetailPage() {
  const { t, isRTL } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<WordPressProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const productId = params.id as string;

  // Mock data for demonstration
  const mockProducts: { [key: string]: WordPressProduct } = {
    '1': {
      id: 1,
      name: "Advanced Arabic Grammar",
      price: "29.99",
      description: "Comprehensive guide to Arabic grammar for advanced learners. This book covers all essential grammar concepts with detailed explanations and practical examples.",
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
    '2': {
      id: 2,
      name: "Mathematics for Beginners",
      price: "24.99",
      description: "Step-by-step introduction to fundamental mathematical concepts. Perfect for students starting their mathematical journey.",
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
    '3': {
      id: 3,
      name: "Science Explorations",
      price: "34.99",
      description: "Interactive science experiments and explanations for young learners. Discover the wonders of science through hands-on activities.",
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
    '4': {
      id: 4,
      name: "History of Civilizations",
      price: "39.99",
      description: "Journey through the great civilizations of human history. Explore ancient cultures and their contributions to modern society.",
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
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;
      const wooCommerceUrl = process.env.NEXT_PUBLIC_WC_API_URL;

      console.log('Product detail - Environment variables:', {
        consumerKey: consumerKey ? 'exists' : 'missing',
        consumerSecret: consumerSecret ? 'exists' : 'missing',
        wooCommerceUrl: wooCommerceUrl || 'missing',
        productId: productId
      });

      // Check if environment variables are set
      if (!consumerKey || !consumerSecret || !wooCommerceUrl) {
        console.log('Using mock data for product detail - WordPress API credentials not configured');
        const mockProduct = mockProducts[productId];
        if (mockProduct) {
          setProduct(mockProduct);
          setError(null);
        } else {
          setError('Product not found');
        }
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${wooCommerceUrl}/wp-json/wc/v3/products/${productId}`,
          {
            headers: {
              'Authorization': `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
              'Content-Type': 'application/json'
            }
          }
        );

        console.log(`Product detail response status: ${response.status}`);

        if (!response.ok) {
          const errorText = await response.text();
          console.log(`Product detail error response: ${errorText}`);
          throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
        }

        const productData = await response.json();
        console.log('Product detail loaded successfully:', productData.name);
        setProduct(productData);
      } catch (err) {
        console.error('Error fetching product:', err);
        console.log('Falling back to mock data for product detail');
        const mockProduct = mockProducts[productId];
        if (mockProduct) {
          setProduct(mockProduct);
          setError(null);
        } else {
          setError('Product not found');
        }
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleAddToCart = async () => {
    if (!product) {
      console.error('Product not loaded');
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              id: product.id,
              name: product.name,
              price: product.price,
              description: product.short_description,
              images: product.images,
              quantity: quantity,
            },
          ],
        }),
      });

      const { url, error: checkoutError } = await response.json();

      if (checkoutError) {
        throw new Error(checkoutError);
      }

      // Direct redirect to Stripe checkout URL
      window.location.href = url;
    } catch (err) {
      console.error('Checkout error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Payment failed. Please try again.';
      alert(`Payment failed: ${errorMessage}`);
    } finally {
      setIsProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Product not found'}</p>
          <Link href="/store-books" className="text-green-600 hover:text-green-700 underline">
            Back to Books
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
        <div className={`mb-8 ${isRTL ? 'rtl' : ''}`}>
          <Link 
            href="/store-books" 
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Books
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images Section */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/10">
              {/* Main Image */}
              <div className="relative h-96 overflow-hidden">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[selectedImage].src}
                    alt={product.images[selectedImage].alt || product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Image Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 p-4">
                  {product.images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-20 overflow-hidden rounded-lg border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-green-500 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt || product.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
               {/* Full Description */}
            {product.description && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 border border-white/10 mt-6">
                <div 
                  className="text-gray-700 prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            )}
                         {/* Short Description */}
              {product.short_description && (
                <div className="mb-6">
                  <div 
                    className="text-gray-600 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.short_description }}
                  />
                </div>
              )}

            </div>
          </div>

          {/* Product Details Section */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 border border-white/10">
              {/* Price */}
              <div className="mb-6">

                <div className="text-3xl font-bold text-green-600 mb-2">
                  {product.price ? `${product.price}€` : 'Price on request'}
                </div>
                {product.price_html && (
                  <div 
                    className="text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: product.price_html }}
                  />
                )}
                <p className="text-sm text-gray-600 mb-2">
                  {t.common?.taxNotice || 'The invoice amount does not include VAT according to § 19 UStG.'}
                </p>
              </div>

              {/* Categories */}
              {product.categories && product.categories.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.categories.map((category) => (
                      <span 
                        key={category.id}
                        className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

 

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-10 text-center border border-gray-300 rounded-lg px-3"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg mb-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.store.products.processing}
                  </span>
                ) : (
                  t.store.products.buyNow
                )}
              </button>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}
