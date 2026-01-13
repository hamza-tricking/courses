'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export function StoreSection() {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const storeItems = [
    {
      id: 1,
      title: "حقائب التعلم (Offline-Lernsets)",
      description: "مجموعات متكاملة تشمل كتباً، ألعاباً، وبطاقات تعليمية.",
      price: "149.99€",
      category: 'learningSets',
      image: '/books/تصميم غلاف كتاب رحلة في بلاد الغرب - arabic book cover.jpg',
      featured: true,
      type: 'learningSet'
    },
    {
      id: 2,
      title: "موارد رقمية",
      description: "ملفات فيديو وصوت لضبط النطق الصحيح.",
      price: "49.99€",
      category: 'digitalResources',
      image: '/books/Book Cover Design - كتب in 2022 _ Ebook cover design, Book cover design, Book cover artwork.jpg',
      featured: true,
      type: 'digitalResource'
    }
  ];

  const categories = [
    { id: 'all', label: t.store.categories.all, count: storeItems.length },
    { id: 'learningSets', label: t.store.categories.learningSets, count: storeItems.filter(item => item.category === 'learningSets').length },
    { id: 'digitalResources', label: t.store.categories.digitalResources, count: storeItems.filter(item => item.category === 'digitalResources').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? storeItems 
    : storeItems.filter(item => item.category === selectedCategory);

  const featuredItems = storeItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

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
          <h2 className="text-2xl py-2 sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
            {t.store.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 max-w-3xl mx-auto">
            {t.store.subtitle}
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

        {/* Featured Items */}
        {selectedCategory === 'all' && featuredItems.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8 text-center">{t.store.featured}</h3>
            
            {/* Mobile: Horizontal Scroll */}
            <div className="flex overflow-x-auto pb-4 lg:hidden">
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-80 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10 mr-4"
                >
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold">
                      {t.store.featured}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-green-600">{item.price}</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {item.type === 'learningSet' ? t.store.learningSet : t.store.digitalResource}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      {t.store.viewDetails}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10"
                >
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold">
                      {t.store.featured}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-600">{item.price}</span>
                      <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {item.type === 'learningSet' ? t.store.learningSet : t.store.digitalResource}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      {t.store.viewDetails}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Items */}
        <div>
          {/* Mobile: Horizontal Scroll */}
          <div className="flex overflow-x-auto pb-4 lg:hidden">
            {regularItems.map((item) => (
              <div
                key={item.id}
                className="flex-none w-80 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10 mr-4"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Product Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-green-600">{item.price}</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {item.type === 'learningSet' ? t.store.learningSet : t.store.digitalResource}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {t.store.viewDetails}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{item.price}</span>
                    <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {item.type === 'learningSet' ? t.store.learningSet : t.store.digitalResource}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {t.store.viewDetails}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {filteredItems.length > 6 && (
          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-white text-green-700 px-6 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base">
              {t.store.loadMore}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
