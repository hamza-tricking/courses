'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PricingCard } from './PricingCard';

export function HomeVisitSection() {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const homeVisitPlan = {
    id: 'home-visit',
    name: t.homeVisit.name,
    subtitle: t.homeVisit.subtitle,
    price: '15,00 €',
    period: t.homeVisit.period,
    features: [
      t.homeVisit.features.duration,
      t.homeVisit.features.environment,
      t.homeVisit.features.focus,
      t.homeVisit.features.travel
    ],
    highlighted: true,
    color: 'from-emerald-500 to-teal-600'
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 text-gray-800 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(16, 185, 129, 0.1) 35px, rgba(16, 185, 129, 0.1) 70px)`,
          animation: 'slide 25s linear infinite reverse'
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-teal-300 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-green-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-6 sm:mb-12 ${isRTL ? 'rtl' : ''} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-2xl p-2 sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent">
            {t.homeVisit.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.homeVisit.description}
          </p>
        </div>

        {/* Pricing Card */}
        <div className={`flex justify-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          <div 
            className="w-full max-w-md transition-all duration-700 delay-100"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <PricingCard
              plan={homeVisitPlan}
              isRTL={isRTL}
              compact={false}
              isSelected={true}
              onSelect={() => {}}
            />
          </div>
        </div>

        

        {/* CTA Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href="/home-visit-reservation"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            {t.homeVisit.cta.button}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        
        </div>
      </div>
    </section>
  );
}
