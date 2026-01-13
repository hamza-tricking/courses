'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PricingCard } from './PricingCard';

export function OnlineLessonsSection() {
  const { t, isRTL } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const plans = [
    {
      id: 'basic',
      name: t.onlineLessons.plans.basic.name,
      subtitle: t.onlineLessons.plans.basic.subtitle,
      price: '29,95 €',
      period: t.onlineLessons.plans.basic.period,
      features: [
        t.onlineLessons.plans.basic.features.sessions,
        t.onlineLessons.plans.basic.features.duration,
        t.onlineLessons.plans.basic.features.format,
        t.onlineLessons.plans.basic.features.level
      ],
      highlighted: false,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'standard',
      name: t.onlineLessons.plans.standard.name,
      subtitle: t.onlineLessons.plans.standard.subtitle,
      price: '59,90 €',
      period: t.onlineLessons.plans.standard.period,
      features: [
        t.onlineLessons.plans.standard.features.sessions,
        t.onlineLessons.plans.standard.features.duration,
        t.onlineLessons.plans.standard.features.format,
        t.onlineLessons.plans.standard.features.homework
      ],
      highlighted: true,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'premium',
      name: t.onlineLessons.plans.premium.name,
      subtitle: t.onlineLessons.plans.premium.subtitle,
      price: '89,85 €',
      period: t.onlineLessons.plans.premium.period,
      features: [
        t.onlineLessons.plans.premium.features.sessions,
        t.onlineLessons.plans.premium.features.duration,
        t.onlineLessons.plans.premium.features.format,
        t.onlineLessons.plans.premium.features.vip
      ],
      highlighted: false,
      color: 'from-teal-500 to-green-600'
    }
  ];

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
            {t.onlineLessons.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.onlineLessons.description}
          </p>
        </div>

        {/* Mobile: Compact Horizontal Scroll */}
        <div className="sm:hidden mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {plans.map((plan, index) => (
              <div 
                key={plan.id} 
                className="flex-none w-72 transition-all duration-700 delay-100"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
                }}
              >
                <PricingCard
                  plan={plan}
                  isRTL={isRTL}
                  compact={true}
                  isSelected={selectedPlan === plan.id}
                  onSelect={() => setSelectedPlan(plan.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet and Desktop: Grid Layout */}
        <div className={`hidden sm:grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className="transition-all duration-700 delay-100"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <PricingCard
                plan={plan}
                isRTL={isRTL}
                compact={false}
                isSelected={selectedPlan === plan.id}
                onSelect={() => {
                  setSelectedPlan(plan.id);
                  setShowReservationModal(true);
                }}
              />
            </div>
          ))}
        </div>

        {/* Selected Plan Details */}
        {selectedPlan && (
          <div className={`mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {t.onlineLessons.selectedPlan.title}: {plans.find(p => p.id === selectedPlan)?.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">{t.onlineLessons.selectedPlan.whatIncluded}</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {plans.find(p => p.id === selectedPlan)?.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">{t.onlineLessons.selectedPlan.nextSteps}</h4>
                <p className="text-sm text-gray-600 mb-4">
                  {t.onlineLessons.selectedPlan.nextStepsText}
                </p>
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm">
                  {t.onlineLessons.selectedPlan.enrollNow}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reservation Modal */}
        {showReservationModal && selectedPlan && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-t-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.onlineLessons.selectedPlan.reservationRules}</h3>
                    <p className="text-green-100 text-sm">{plans.find(p => p.id === selectedPlan)?.name}</p>
                  </div>
                  <button
                    onClick={() => setShowReservationModal(false)}
                    className="text-white hover:text-green-100 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                
                {/* Plan Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">{t.onlineLessons.selectedPlan.planDetails}</h4>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>{t.onlineLessons.selectedPlan.type}:</strong> {plans.find(p => p.id === selectedPlan)?.name}</p>
                      <p><strong>{t.onlineLessons.selectedPlan.price}:</strong> <span className="text-green-600 font-bold text-lg">{plans.find(p => p.id === selectedPlan)?.price}</span></p>
                      <p><strong>{t.onlineLessons.selectedPlan.period}:</strong> {plans.find(p => p.id === selectedPlan)?.period}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">{t.onlineLessons.selectedPlan.whatIncluded}</h4>
                    <ul className="space-y-2 text-gray-600">
                      {plans.find(p => p.id === selectedPlan)?.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => setShowReservationModal(false)}
                    className="px-6 py-2.5 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {t.onlineLessons.selectedPlan.cancel}
                  </button>
                  <a
                    href="/reservation"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-center"
                  >
                    {t.onlineLessons.selectedPlan.goToReservation}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
