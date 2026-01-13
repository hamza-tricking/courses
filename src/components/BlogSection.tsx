'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function BlogSection() {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Effektive Lernmethoden für Kinder',
      excerpt: 'Entdecken Sie bewährte Techniken, die Kindern helfen, besser zu lernen und Wissen zu behalten.',
      category: 'learning',
      author: 'Dr. Sarah Müller',
      date: '15. Januar 2024',
      readTime: '5',
      image: '/blog/Unlocking Student Success Through Formal Education.jpg',
      featured: true,
      tags: ['Lernen', 'Kinder', 'Bildung']
    },
    {
      id: 2,
      title: 'Die Bedeutung von Sprachförderung',
      excerpt: 'Warum frühe Sprachförderung entscheidend für die Entwicklung Ihres Kindes ist.',
      category: 'language',
      author: 'Prof. Ahmed Hassan',
      date: '12. Januar 2024',
      readTime: '7',
      image: '/blog/download (73).jpg',
      featured: true,
      tags: ['Sprache', 'Entwicklung', 'Frühe Förderung']
    },
    {
      id: 3,
      title: 'Work-Life-Balance für Eltern',
      excerpt: 'Praktische Tipps für eine bessere Balance zwischen Beruf und Familienleben.',
      category: 'family',
      author: 'Maria Schmidt',
      date: '10. Januar 2024',
      readTime: '6',
      image: '/blog/download (74).jpg',
      featured: false,
      tags: ['Familie', 'Balance', 'Elternsein']
    },
    {
      id: 4,
      title: 'Digitale Medien in der Erziehung',
      excerpt: 'Wie Sie den Umgang mit digitalen Medien für Ihre Kinder sinnvoll gestalten.',
      category: 'technology',
      author: 'Thomas Weber',
      date: '8. Januar 2024',
      readTime: '8',
      image: '/blog/download (75).jpg',
      featured: false,
      tags: ['Technologie', 'Medien', 'Erziehung']
    },
    {
      id: 5,
      title: 'Emotionale Intelligenz fördern',
      excerpt: 'Strategien zur Entwicklung emotionaler Kompetenzen bei Kindern.',
      category: 'psychology',
      author: 'Dr. Lisa Chen',
      date: '5. Januar 2024',
      readTime: '6',
      image: '/blog/Unlocking Student Success Through Formal Education.jpg',
      featured: false,
      tags: ['Emotionen', 'Psychologie', 'Kinder']
    },
    {
      id: 6,
      title: 'Bilinguale Erziehung: Vorteile und Herausforderungen',
      excerpt: 'Was Sie über die Erziehung von zweisprachigen Kindern wissen sollten.',
      category: 'language',
      author: 'Dr. Carlos Rodriguez',
      date: '3. Januar 2024',
      readTime: '9',
      image: '/blog/download (73).jpg',
      featured: false,
      tags: ['Bilingual', 'Sprache', 'Erziehung']
    }
  ];

  const categories = [
    { id: 'all', label: t.blog.categories.all, count: blogPosts.length },
    { id: 'learning', label: t.blog.categories.learning, count: 1 },
    { id: 'language', label: t.blog.categories.language, count: 2 },
    { id: 'family', label: t.blog.categories.family, count: 1 },
    { id: 'technology', label: t.blog.categories.technology, count: 1 },
    { id: 'psychology', label: t.blog.categories.psychology, count: 1 }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(34, 197, 94, 0.05) 35px, rgba(34, 197, 94, 0.05) 70px)`,
          animation: 'slide 30s linear infinite'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-6 sm:mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent py-2">
            {t.blog.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 max-w-3xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 flex flex-wrap justify-center gap-2 max-w-2xl">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-black shadow-lg transform scale-105'
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

        {/* Featured Posts */}
        {selectedCategory === 'all' && featuredPosts.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8 text-center">{t.blog.featured}</h3>
            
            {/* Mobile: Compact Horizontal Scroll */}
            <div className="sm:hidden mb-8">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="flex-none w-80">
                    <div
                      className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer border border-white/10 h-full"
                    >
                      {/* Image */}
                      <div className="h-40 bg-gradient-to-r from-emerald-400 to-teal-400 relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 backdrop-blur-sm text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                            {t.blog.featured}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <div className="flex items-center space-x-2 text-xs text-black mb-2">
                          <span className="font-medium text-green-400">{t.blog.categories[post.category as keyof typeof t.blog.categories] || post.category}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime} {t.blog.readTime}</span>
                        </div>

                        <h3 className="text-lg font-bold text-black mb-2 group-hover:text-green-400 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-black mb-3 line-clamp-2 text-sm">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                            <span className="text-xs text-black font-medium">{post.author}</span>
                          </div>

                          <button className="text-green-400 hover:text-green-100 font-semibold text-xs flex items-center space-x-1 group">
                            <span>{t.blog.readMore}</span>
                            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mt-3">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-green-100/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet and Desktop: Grid Layout */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer border border-green-200/30"
                >
                  {/* Image */}
                  <div className="h-40 sm:h-48 bg-gradient-to-r from-emerald-400 to-teal-400 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-green-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-black mb-2 sm:mb-3">
                      <span className="font-medium text-green-400">{t.blog.categories[post.category as keyof typeof t.blog.categories] || post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} {t.blog.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 group-hover:text-green-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-black mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm text-black font-medium">{post.author}</span>
                      </div>

                      <button className="text-emerald-800 hover:text-emerald-900 font-semibold text-xs sm:text-sm flex items-center space-x-1 group">
                        <span>{t.blog.readMore}</span>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-emerald-100 text-emerald-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile: Compact Horizontal Scroll */}
        <div className="sm:hidden mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {regularPosts.map((post) => (
              <div key={post.id} className="flex-none w-72">
                <div
                  className="bg-white/5 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group cursor-pointer border border-white/10 h-full"
                >
                  {/* Image */}
                  <div className="h-28 bg-gradient-to-r from-emerald-300 to-teal-300 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <div className="flex items-center space-x-2 text-xs text-black mb-1">
                      <span className="font-medium text-emerald-600">{t.blog.categories[post.category as keyof typeof t.blog.categories] || post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-black mb-1 group-hover:text-green-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-black text-xs mb-2 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-100/60">{post.readTime} {t.blog.readTime}</span>
                      <button className="text-green-400 hover:text-green-100 font-semibold text-xs flex items-center space-x-1 group">
                        <span>{t.blog.readMore}</span>
                        <svg className="w-2.5 h-2.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet and Desktop: Grid Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group cursor-pointer border border-green-200/30"
            >
              {/* Image */}
              <div className="h-28 sm:h-32 bg-gradient-to-r from-emerald-300 to-teal-300 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5">
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs text-black mb-1 sm:mb-2">
                  <span className="font-medium text-emerald-600">{t.blog.categories[post.category as keyof typeof t.blog.categories] || post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-black mb-1 sm:mb-2 group-hover:text-emerald-800 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-black text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-100/60">{post.readTime} {t.blog.readTime}</span>
                  <button className="text-green-400 hover:text-green-100 font-semibold text-xs flex items-center space-x-1 group">
                    <span>{t.blog.readMore}</span>
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base">
            {t.blog.loadMore}
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-black text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">{t.blog.newsletter.title}</h3>
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-emerald-100">
              {t.blog.newsletter.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.blog.newsletter.placeholder}
                className="flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-emerald-300 text-sm sm:text-base"
              />
              <button className="bg-white text-emerald-800 px-6 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl text-sm sm:text-base">
                {t.blog.newsletter.subscribe}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
