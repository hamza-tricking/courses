'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { PricingCard } from '@/components/PricingCard';

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  color: string;
}

export default function PricingPage() {
  const { t, isRTL } = useLanguage();

  const plans: Plan[] = [
    {
      id: 'basic',
      name: t.onlineLessons.plans.basic.name,
      subtitle: t.onlineLessons.plans.basic.subtitle,
      price: '€29.99',
      period: t.onlineLessons.plans.basic.period,
      features: [
        t.onlineLessons.plans.basic.features.sessions,
        t.onlineLessons.plans.basic.features.duration,
        t.onlineLessons.plans.basic.features.format,
        t.onlineLessons.plans.basic.features.level
      ],
      highlighted: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: 'standard',
      name: t.onlineLessons.plans.standard.name,
      subtitle: t.onlineLessons.plans.standard.subtitle,
      price: '€49.99',
      period: t.onlineLessons.plans.standard.period,
      features: [
        t.onlineLessons.plans.standard.features.sessions,
        t.onlineLessons.plans.standard.features.duration,
        t.onlineLessons.plans.standard.features.format,
        t.onlineLessons.plans.standard.features.homework
      ],
      highlighted: true,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'premium',
      name: t.onlineLessons.plans.premium.name,
      subtitle: t.onlineLessons.plans.premium.subtitle,
      price: '€79.99',
      period: t.onlineLessons.plans.premium.period,
      features: [
        t.onlineLessons.plans.premium.features.sessions,
        t.onlineLessons.plans.premium.features.duration,
        t.onlineLessons.plans.premium.features.format,
        t.onlineLessons.plans.premium.features.vip
      ],
      highlighted: false,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.onlineLessons.title}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              {t.onlineLessons.description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-50 to-transparent"></div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isRTL={isRTL}
            />
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {t.onlineLessons.selectedPlan.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">
                {t.onlineLessons.selectedPlan.planDetails}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>{t.onlineLessons.selectedPlan.type}:</strong> {t.onlineLessons.plans.basic.name}</li>
                <li><strong>{t.onlineLessons.selectedPlan.price}:</strong> {t.onlineLessons.selectedPlan.basePrice}</li>
                <li><strong>{t.onlineLessons.selectedPlan.period}:</strong> {t.onlineLessons.plans.basic.period}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">
                {t.onlineLessons.selectedPlan.nextSteps}
              </h3>
              <p className="text-gray-600 mb-4">
                {t.onlineLessons.selectedPlan.nextStepsText}
              </p>
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg">
                {t.onlineLessons.selectedPlan.goToReservation}
              </button>
            </div>
          </div>
        </div>

        {/* Home Visit Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {t.homeVisit.title}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {t.homeVisit.description}
          </p>
          <div className="text-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg text-lg">
              {t.homeVisit.cta.button}
            </button>
            <p className="text-sm text-gray-500 mt-3">
              {t.homeVisit.cta.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
