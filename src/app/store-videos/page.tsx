'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

interface VideoContent {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  price: string;
  featured: boolean;
}

export default function StoreVideosPage() {
  const { t, isRTL } = useLanguage();
  const [videos, setVideos] = useState<VideoContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock video content data
  const mockVideos: VideoContent[] = [
    {
      id: 1,
      title: "Arabic Alphabet Basics",
      description: "Learn the fundamentals of Arabic alphabet with proper pronunciation and writing techniques",
      duration: "45 min",
      level: "Beginner",
      thumbnail: "/books/تصميم غلاف كتاب رحلة في بلاد الغرب - arabic book cover.jpg",
      videoUrl: "#",
      category: "alphabet",
      price: "9.99€",
      featured: true
    },
    {
      id: 2,
      title: "Arabic Pronunciation Guide",
      description: "Master Arabic pronunciation with native speaker examples and practice exercises",
      duration: "60 min",
      level: "Beginner",
      thumbnail: "/books/Book Cover Design - كتب in 2022 _ Ebook cover design, Book cover design, Book cover artwork.jpg",
      videoUrl: "#",
      category: "pronunciation",
      price: "12.99€",
      featured: true
    },
    {
      id: 3,
      title: "Basic Arabic Grammar",
      description: "Understanding essential Arabic grammar rules and sentence structure",
      duration: "90 min",
      level: "Intermediate",
      thumbnail: "/books/Design a professional and beautiful book cover _ Book cover contest.jpg",
      videoUrl: "#",
      category: "grammar",
      price: "19.99€",
      featured: false
    },
    {
      id: 4,
      title: "Conversational Arabic",
      description: "Everyday Arabic conversations for practical communication skills",
      duration: "75 min",
      level: "Intermediate",
      thumbnail: "/books/Design the cover of my new book on bankruptcy! _ Book cover contest.jpg",
      videoUrl: "#",
      category: "conversation",
      price: "24.99€",
      featured: false
    },
    {
      id: 5,
      title: "Advanced Arabic Vocabulary",
      description: "Expand your Arabic vocabulary with advanced words and expressions",
      duration: "120 min",
      level: "Advanced",
      thumbnail: "/books/تصميم غلاف كتاب رحلة في بلاد الغرب - arabic book cover.jpg",
      videoUrl: "#",
      category: "vocabulary",
      price: "29.99€",
      featured: false
    },
    {
      id: 6,
      title: "Arabic Writing Skills",
      description: "Develop professional Arabic writing skills for various contexts",
      duration: "100 min",
      level: "Advanced",
      thumbnail: "/books/Book Cover Design - كتب in 2022 _ Ebook cover design, Book cover design, Book cover artwork.jpg",
      videoUrl: "#",
      category: "writing",
      price: "34.99€",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: t.store?.categories?.all || 'All', count: mockVideos.length },
    { id: 'alphabet', label: t.store?.videoCategories?.alphabet || 'Alphabet', count: mockVideos.filter(v => v.category === 'alphabet').length },
    { id: 'pronunciation', label: t.store?.videoCategories?.pronunciation || 'Pronunciation', count: mockVideos.filter(v => v.category === 'pronunciation').length },
    { id: 'grammar', label: t.store?.videoCategories?.grammar || 'Grammar', count: mockVideos.filter(v => v.category === 'grammar').length },
    { id: 'conversation', label: t.store?.videoCategories?.conversation || 'Conversation', count: mockVideos.filter(v => v.category === 'conversation').length },
    { id: 'vocabulary', label: t.store?.videoCategories?.vocabulary || 'Vocabulary', count: mockVideos.filter(v => v.category === 'vocabulary').length },
    { id: 'writing', label: t.store?.videoCategories?.writing || 'Writing', count: mockVideos.filter(v => v.category === 'writing').length }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setVideos(mockVideos);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const featuredVideos = videos.filter(video => video.featured);
  const regularVideos = filteredVideos.filter(video => !video.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading educational videos...</p>
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
          <h1 className="text-3xl py-2 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
            {t.store?.videoCollection || 'Educational Videos Collection'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
            {t.store?.videoCollectionSubtitle || 'Discover our comprehensive collection of educational videos designed to enhance your Arabic learning experience'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 flex flex-wrap justify-center gap-2 max-w-4xl">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-800 hover:text-black hover:bg-green-50'
                }`}
              >
                <span>{category.label}</span>
                <span className={`text-xs ${
                  selectedCategory === category.id ? 'text-emerald-100' : 'text-gray-400'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Videos */}
        {selectedCategory === 'all' && featuredVideos.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8 text-center">{t.store?.featured || 'Featured'}</h3>
            
            {/* Mobile: Horizontal Scroll */}
            <div className="flex overflow-x-auto pb-4 lg:hidden gap-4 snap-x snap-mandatory">
              {featuredVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex-none w-80 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10 snap-start"
                >
                  {/* Video Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold">
                      Featured
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {video.level}
                      </span>
                      <span className="text-lg font-bold text-green-600">{video.price}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                    
                    <button 
                      onClick={() => {
                        // In a real implementation, this would open the video player or purchase flow
                        console.log('Play video:', video.title);
                      }}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {t.store?.watchNow || 'Watch Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10"
                >
                  {/* Video Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold">
                      Featured
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {video.level}
                      </span>
                      <span className="text-lg font-bold text-green-600">{video.price}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                    
                    <button 
                      onClick={() => {
                        // In a real implementation, this would open the video player or purchase flow
                        console.log('Play video:', video.title);
                      }}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {t.store?.watchNow || 'Watch Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Videos */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8 text-center">
            {selectedCategory === 'all' ? t.store?.categories?.all || 'All Videos' : categories.find(c => c.id === selectedCategory)?.label}
          </h3>
          
          {regularVideos.length > 0 ? (
            <>
              {/* Mobile: Horizontal Scroll */}
              <div className="flex overflow-x-auto pb-4 lg:hidden gap-4 snap-x snap-mandatory">
                {regularVideos.map((video) => (
                  <div
                    key={video.id}
                    className="flex-none w-80 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10 snap-start"
                  >
                  {/* Video Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {video.level}
                      </span>
                      <span className="text-lg font-bold text-green-600">{video.price}</span>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                    
                    <button 
                      onClick={() => {
                        // In a real implementation, this would open the video player or purchase flow
                        console.log('Play video:', video.title);
                      }}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {t.store?.watchNow || 'Watch Now'}
                    </button>
                  </div>
                </div>
              ))}
              </div>

              {/* Desktop: Grid */}
              <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {regularVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10"
                  >
                    {/* Video Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-3">
                          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Video Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {video.level}
                        </span>
                        <span className="text-lg font-bold text-green-600">{video.price}</span>
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2">{video.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                      
                      <button 
                        onClick={() => {
                          // In a real implementation, this would open the video player or purchase flow
                          console.log('Play video:', video.title);
                        }}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        {t.store?.watchNow || 'Watch Now'}
                      </button>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.store?.noVideosFound || 'No videos found'}</h3>
              <p className="text-gray-600 mb-6">{t.store?.tryDifferentCategory || 'Try selecting a different category'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
