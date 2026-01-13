'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className={`relative bg-gradient-to-br from-green-50 to-green-100 py-20 ${isRTL ? 'rtl' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 to-green-50/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
              {t.home.hero.title}
            </h1>
            <p className="text-xl text-green-700 mb-8 leading-relaxed">
              {t.home.hero.subtitle}
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border border-green-500/30">
              {t.home.hero.cta}
            </button>
          </div>

          {/* Image/Video placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl h-96 flex items-center justify-center shadow-xl border border-green-300/40">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/50">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-green-800 font-medium">Video Introduction</p>
                <p className="text-green-600 text-sm">Learn more about our academy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
