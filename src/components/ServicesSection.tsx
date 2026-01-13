'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function ServicesSection() {
  const { t, isRTL } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: t.home.services.online,
      description: t.services.online.description,
      icon: "/icons/download (72) (1) 1.png"
    },
    {
      title: t.home.services.offline,
      description: t.services.offline.description,
      icon: "/icons/download (72) (2) 1.png"
    },
    {
      title: t.home.services.vip,
      description: t.services.vip.description,
      icon: "/icons/download (72) (3) 1.png"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
        {/* Section Title */}
        <div className={`text-center mb-8 sm:mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {t.home.services.title}
          </h2>
          <div className={`w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full transition-all duration-1000 delay-300 transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white via-gray-50 to-emerald-50/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-gray-100/50 hover:border-emerald-300/50 cursor-pointer transform backdrop-blur-sm ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${isRTL ? 'rtl' : ''}`}
              style={{ transitionDelay: `${index * 150 + 500}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glass morphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl pointer-events-none"></div>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-xl sm:rounded-2xl transition-opacity duration-700 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
              
              <div className="relative z-10">
                {/* Enhanced Icon Container */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 lg:mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-xl sm:rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110 group-hover:rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-emerald-200/50 group-hover:border-emerald-300/70 transition-all duration-500"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className={`object-contain transition-all duration-700 filter drop-shadow-sm group-hover:drop-shadow-md ${hoveredCard === index ? 'scale-125 rotate-12' : ''}`}
                    />
                  </div>
                </div>
                
                {/* Enhanced Typography */}
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-2 sm:mb-3 lg:mb-4 text-center bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:via-teal-600 group-hover:to-emerald-600 transition-all duration-500 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600/80 leading-relaxed mb-3 sm:mb-4 lg:mb-6 text-center group-hover:text-gray-700 transition-colors duration-500 line-clamp-3 sm:line-clamp-4">
                  {service.description}
                </p>
                
                {/* Enhanced Button */}
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 border border-emerald-400/30 backdrop-blur-sm text-xs sm:text-sm">
                  {t.home.services.learnMore}
                </button>
                
                {/* Decorative elements */}
                <div className="mt-2 sm:mt-3 lg:mt-4 flex justify-center">
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent w-3/4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 border-t border-r border-emerald-400/30 group-hover:border-emerald-500/60 transition-colors duration-500"></div>
                <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 border-b border-l border-emerald-400/30 group-hover:border-emerald-500/60 transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
