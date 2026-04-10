'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function HeroCarousel() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateContent, setAnimateContent] = useState(false);
  const images = ['/heropart/WhatsApp Image 2026-02-11 at 1.06.16 PM.jpeg',
    '/heropart/hero0.jpg',
    '/heropart/hero1.jpg',
    
  ];

  useEffect(() => {
    // Only trigger content animation on home page
    if (pathname === '/') {
      const animationTimer = setTimeout(() => {
        setAnimateContent(true);
      }, 500);
      return () => clearTimeout(animationTimer);
    } else {
      // For other pages, show content immediately
      setAnimateContent(true);
    }
  }, [pathname]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen -mt-[6rem] overflow-hidden">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-in-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          
          
          {/* Slogan Section */}
          <div className={`mt-6 mb-6 transition-all duration-1000 delay-500 ${
            animateContent ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-4 space-y-2 md:space-y-0">
              <p className="text-2xl md:text-5xl font-bold">
                {t.home.hero.slogan?.line1}
              </p>
              <p className="text-2xl md:text-5xl font-bold">
                {t.home.hero.slogan?.line2}
              </p>
              <p className="text-2xl md:text-5xl font-bold">
                {t.home.hero.slogan?.line3}
              </p>
            </div>
          </div>

          {/* Trial Button */}
          <div className={`transition-all duration-1000 delay-700 ${
            animateContent ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
         
          </div>
        </div>
      </div>

      {/* Trial Button - Moved to better position */}
      <div className="absolute bottom-44 left-1/2 transform -translate-x-1/2 z-[100]">
        <Link 
          href="/blog"
          className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 relative pointer-events-auto"
        >
          {t.home.hero.slogan?.trialButton}
        </Link>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-40">
        <span className="text-white text-sm font-medium">
          {currentSlide + 1}/{images.length}
        </span>
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ease-in-out cursor-pointer z-40 ${
                index === currentSlide
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/75'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-40 cursor-pointer"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-40 cursor-pointer"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      </div>
  );
}
