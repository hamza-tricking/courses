'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PricingCard } from './PricingCard';
import Link from 'next/link';

export function OnlineLessonsSection() {
  const { t, isRTL, language } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showReservationModal) {
      document.body.style.overflow = 'hidden';
      setScrollTop(window.pageYOffset || document.documentElement.scrollTop);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showReservationModal]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY - (scrollTop || 0));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - startY;
    const newScrollTop = scrollTop - deltaY;
    window.scrollTo(0, newScrollTop);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const plans = [
    {
      id: 'start',
      name: language === 'ar' ? '🟢 باقة الانطلاق' : language === 'de' ? '🇩🇪 Start-Paket' : '🟢 Start Package',
      subtitle: language === 'ar' ? 'لبناء أساس لغوي متين' : language === 'de' ? 'Für einen soliden Einstieg' : 'For Building Solid Language Foundation',
      price: language === 'ar' ? '49,95 €' : language === 'de' ? '49,95 €' : '49,95 €',
      period: language === 'ar' ? 'حصتان أونلاين مباشر أسبوعيًا' : language === 'de' ? '2 Live-Online-Unterrichtseinheiten pro Woche' : '2 live online sessions weekly',
      image: '/Courses photos/Gemini_Generated_Image_e0edtbe0edtbe0ed.png',
      stripeUrl: 'https://buy.stripe.com/9B68wPgtX0I6c3xfLacEw02',
      features: [
        language === 'ar' ? 'حصتان أونلاين مباشر أسبوعيًا' : language === 'de' ? '2 Live-Online-Unterrichtseinheiten pro Woche' : '2 live online sessions weekly',
        language === 'ar' ? 'تعلم تفاعلي لكسر ملل الأونلاين' : language === 'de' ? 'Interaktiver Unterricht' : 'Interactive learning',
        language === 'ar' ? 'مجموعات صغيرة (حتى 6 طلاب)' : language === 'de' ? 'Kleine Gruppen (max. 6 Teilnehmer)' : 'Small groups (max 6 students)',
        language === 'ar' ? 'تطبيق ذكي للمراجعة' : language === 'de' ? 'Lern-App zur Wiederholung' : 'Smart app for review',
        language === 'ar' ? 'تقييم دوري للتقدم' : language === 'de' ? 'Regelmäßige Lernstandskontrolle' : 'Regular progress assessment'
      ],
      highlighted: false,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'progress',
      name: language === 'ar' ? '🟡 باقة التقدّم' : language === 'de' ? '🇩🇪 Progress-Paket' : '🟡 Progress Package',
      subtitle: language === 'ar' ? 'لتطوير المهارات بشكل أسرع' : language === 'de' ? 'Für schnellen und nachhaltigen Lernfortschritt' : 'For Fast and Sustainable Progress',
      price: language === 'ar' ? '69,90 €' : language === 'de' ? '69,90 €' : '69,90 €',
      period: language === 'ar' ? '3 حصص أونلاين أسبوعيًا' : language === 'de' ? '3 Unterrichtseinheiten pro Woche' : '3 online sessions weekly',
      image: '/Courses photos/Gemini_Generated_Image_ppr7yzppr7yzppr7.png',
      stripeUrl: 'https://buy.stripe.com/fZu3cvcdHduSebF1UkcEw03',
      features: [
        language === 'ar' ? '3 حصص أونلاين أسبوعيًا' : language === 'de' ? '3 Unterrichtseinheiten pro Woche' : '3 online sessions weekly',
        language === 'ar' ? 'تعلم نشط قائم على الحوار' : language === 'de' ? 'Kommunikativer, aktiver Unterricht' : 'Communication-based active learning',
        language === 'ar' ? 'مجموعات حتى 6 طلاب' : language === 'de' ? 'Gruppen mit max. 6 Teilnehmern' : 'Groups with max 6 students',
        language === 'ar' ? 'واجبات موجهة' : language === 'de' ? 'Gezielte Hausaufgaben' : 'Targeted homework',
        language === 'ar' ? 'تقارير متابعة دورية' : language === 'de' ? 'Regelmäßige Fortschrittsberichte' : 'Regular progress reports',
        language === 'ar' ? 'الكتب الورقية اختيارية' : language === 'de' ? 'Gedruckte Bücher optional erhältlich' : 'Printed books optionally available'
      ],
      highlighted: true,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'mastery',
      name: language === 'ar' ? '🔵 باقة الإتقان' : language === 'de' ? '🇩🇪 Mastery-Paket' : '🔵 Mastery Package',
      subtitle: language === 'ar' ? 'للوصول إلى الطلاقة والاحتراف' : language === 'de' ? 'Für Sprachsicherheit und höchste Lernziele' : 'For Language Proficiency and Highest Goals',
      price: language === 'ar' ? '89,95 €' : language === 'de' ? '89,95 €' : '89,95 €',
      period: language === 'ar' ? '4 حصص أونلاين أسبوعيًا' : language === 'de' ? '4 Unterrichtseinheiten pro Woche' : '4 online sessions weekly',
      image: '/Courses photos/imagess 14.png',
      stripeUrl: 'https://buy.stripe.com/5kQ3cv91v8ayffJ42scEw04',
      features: [
        language === 'ar' ? '4 حصص أونلاين أسبوعيًا' : language === 'de' ? '4 Unterrichtseinheiten pro Woche' : '4 online sessions weekly',
        language === 'ar' ? 'مجموعات مصغّرة (حتى 3 طلاب فقط)' : language === 'de' ? 'Sehr kleine Gruppen (max. 3 Teilnehmer)' : 'Very small groups (max 3 students only)',
        language === 'ar' ? 'Coaching فردي لكل طالب' : language === 'de' ? 'Individuelles Coaching pro Schüler' : 'Individual coaching for each student',
        language === 'ar' ? 'تشخيص ومتابعة شخصية مستمرة' : language === 'de' ? 'Persönliche Lernstandsanalyse' : 'Personal learning progress analysis',
        language === 'ar' ? 'خطة تطوير لغوية خاصة' : language === 'de' ? 'Individueller Lernentwicklungsplan' : 'Individual language development plan',
        language === 'ar' ? 'الكتب الورقية متوفرة اختياريًا' : language === 'de' ? 'Gedruckte Bücher optional erhältlich' : 'Printed books optionally available'
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
                  onSelect={() => {
                    setSelectedPlan(plan.id);
                    setShowReservationModal(true);
                  }}
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
                <Link href={'/reservation'} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm">
                  {t.onlineLessons.selectedPlan.enrollNow}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Reservation Modal */}
        {showReservationModal && selectedPlan && (
          <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-[99999] p-4 mt-4  pt-20 pb-20">
            <div 
              ref={modalRef}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[70vh] overflow-y-auto relative z-[100000] lg:overflow-y-visible lg:max-h-none lg:overflow-visible lg:cursor-move lg:touch-none lg:user-select-none"
              onMouseDown={(e) => {
                if (window.innerWidth >= 1024) {
                  handleMouseDown(e);
                }
              }}
              onMouseMove={(e) => {
                if (window.innerWidth >= 1024) {
                  handleMouseMove(e);
                }
              }}
              onMouseUp={() => {
                if (window.innerWidth >= 1024) {
                  handleMouseUp();
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) {
                  handleMouseUp();
                }
              }}
              style={{ 
                touchAction: window.innerWidth >= 1024 ? 'none' : 'auto',
                userSelect: window.innerWidth >= 1024 ? 'none' : 'auto'
              }}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-t-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.onlineLessons.selectedPlan.reservationRules}</h3>
                    <p className="text-green-100 text-sm">{plans.find(p => p.id === selectedPlan)?.name}</p>
                  </div>
                  <button onClick={() => setShowReservationModal(false)} className="text-white hover:text-green-100 transition-colors">
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
                  <button onClick={() => setShowReservationModal(false)} className="px-6 py-2.5 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                    {t.onlineLessons.selectedPlan.cancel}
                  </button>
                  <a href="/reservation" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-center">
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
