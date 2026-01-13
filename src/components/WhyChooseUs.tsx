'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function WhyChooseUs() {
  const { t, isRTL } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ students: 0, experience: 0, satisfaction: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({
      x: (x - 0.5) * 20,
      y: (y - 0.5) * -20
    });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      
      const studentsTarget = 1500;
      const experienceTarget = 15;
      const satisfactionTarget = 98;
      
      let currentStep = 0;
      const counter = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCounters({
          students: Math.floor(studentsTarget * easeOutQuart),
          experience: Math.floor(experienceTarget * easeOutQuart),
          satisfaction: Math.floor(satisfactionTarget * easeOutQuart)
        });
        
        if (currentStep >= steps) {
          clearInterval(counter);
        }
      }, increment);
      
      return () => clearInterval(counter);
    }
  }, [isVisible]);

  const points = [
    {
      title: t.home.whyChooseUs.point1,
      image: '/icons/download (72) (1) 1.png',
      description: t.home.whyChooseUs.point1Desc
    },
    {
      title: t.home.whyChooseUs.point2,
      image: '/icons/download (72) (2) 1.png',
      description: t.home.whyChooseUs.point2Desc
    },
    {
      title: t.home.whyChooseUs.point3,
      image: '/icons/download (72) (3) 1.png',
      description: t.home.whyChooseUs.point3Desc
    },
    {
      title: t.home.whyChooseUs.point4,
      image: '/icons/download (72) 2.png',
      description: t.home.whyChooseUs.point4Desc
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 via-white to-green-50 text-gray-800 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(34, 197, 94, 0.1) 35px, rgba(34, 197, 94, 0.1) 70px)`,
          animation: 'slide 20s linear infinite'
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-100 rounded-full opacity-20 animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-8 sm:mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {t.home.whyChooseUs.title}
          </h2>
          <div className={`w-16 sm:w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full transition-all duration-1000 delay-300 transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>

        {/* Points Grid */}
        <div className={`mb-12 sm:mb-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white via-gray-50 to-green-50/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-gray-100/50 hover:border-green-300/50 cursor-pointer transform backdrop-blur-sm ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
              >
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl pointer-events-none"></div>
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-xl sm:rounded-2xl transition-opacity duration-700 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <div className="relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-2 sm:mb-3 lg:mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110 group-hover:rotate-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-emerald-100/50 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-green-200/50 group-hover:border-green-300/70 transition-all duration-500"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={point.image}
                        alt={point.title}
                        width={32}
                        height={32}
                        className={`object-contain transition-all duration-700 filter drop-shadow-sm group-hover:drop-shadow-md ${hoveredCard === index ? 'scale-125 rotate-12' : ''}`}
                      />
                    </div>
                  </div>
                  
                  {/* Enhanced Typography */}
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-1 sm:mb-2 lg:mb-3 text-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent group-hover:from-green-600 group-hover:via-emerald-600 group-hover:to-green-600 transition-all duration-500 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600/80 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-500 line-clamp-2 sm:line-clamp-3">
                    {point.description}
                  </p>
                  
                  {/* Enhanced decorative elements */}
                  <div className="mt-2 sm:mt-3 lg:mt-4 flex justify-center">
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-green-400/50 to-transparent w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                  </div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 border-t border-r border-green-400/30 group-hover:border-green-500/60 transition-colors duration-500"></div>
                  <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 border-b border-l border-green-400/30 group-hover:border-green-500/60 transition-colors duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section - Enhanced Mobile Design */}
        <div className={`mb-12 sm:mb-16 ${isRTL ? 'rtl' : ''}`}>
          {/* Mobile: Compact Horizontal Layout */}
          <div className="sm:hidden">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50/30 rounded-2xl p-4 backdrop-blur-sm border border-green-200/50">
              <div className="grid grid-cols-3 gap-2">
                <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '900ms' }}>
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-green-200/30">
                    <div className="text-lg font-bold text-green-600 mb-1">
                      {counters.students}+
                    </div>
                    <p className="text-xs text-gray-600 font-medium">{t.about?.students || 'Students'}</p>
                  </div>
                </div>
                <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1100ms' }}>
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-green-200/30">
                    <div className="text-lg font-bold text-green-600 mb-1">
                      {counters.experience}+
                    </div>
                    <p className="text-xs text-gray-600 font-medium">{t.about?.yearsExperience || 'Years'}</p>
                  </div>
                </div>
                <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1300ms' }}>
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-green-200/30">
                    <div className="text-lg font-bold text-green-600 mb-1">
                      {counters.satisfaction}%
                    </div>
                    <p className="text-xs text-gray-600 font-medium">{t.about?.successRate || 'Success'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet and Desktop: Original Layout */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '900ms' }}>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50/30 rounded-2xl p-6 backdrop-blur-sm border border-green-200/50">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2">
                    {counters.students}+
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{t.about?.students || 'Students'}</p>
                </div>
              </div>
              <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1100ms' }}>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50/30 rounded-2xl p-6 backdrop-blur-sm border border-green-200/50">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2">
                    {counters.experience}+
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{t.about?.yearsExperience || 'Years Experience'}</p>
                </div>
              </div>
              <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1300ms' }}>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50/30 rounded-2xl p-6 backdrop-blur-sm border border-green-200/50">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2">
                    {counters.satisfaction}%
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{t.about?.successRate || 'Success Rate'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lisan Academy Story - Enhanced Mobile Design */}
        <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1500ms' }}>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className={`order-2 md:order-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
                {t.home.whyChooseUs.storyTitle}
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700">
                {t.home.whyChooseUs.storyText1}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-gray-700">
                {t.home.whyChooseUs.storyText2}
              </p>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base hover:scale-105 active:scale-95">
                {t.home.whyChooseUs.readMore}
              </button>
            </div>
            
            <div className="relative order-1 md:order-2">
              {/* Enhanced Card Stack Design with Animation */}
              <div className="relative w-full max-w-xs sm:max-w-sm mx-auto transform transition-all duration-1000 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl sm:rounded-2xl transform rotate-2 sm:rotate-3 opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-xl sm:rounded-2xl transform -rotate-2 sm:-rotate-3 opacity-20 animate-pulse delay-1000"></div>
                <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-12">🎓</div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">أكاديمية لسان</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Excellence in Education</p>
                    <div className="mt-4 sm:mt-6 flex justify-center space-x-1.5 sm:space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
