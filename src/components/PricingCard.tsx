'use client';

import { useLanguage } from '@/contexts/LanguageContext';

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

interface PricingCardProps {
  plan: Plan;
  isRTL?: boolean;
  compact?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
}

export function PricingCard({ plan, isRTL = false, compact = false, isSelected = false, onSelect }: PricingCardProps) {
  const { t } = useLanguage();
  if (compact) {
    // Mobile compact version
    return (
      <div 
        onClick={onSelect}
        className={`bg-gradient-to-br from-white via-gray-50 to-green-50/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border-2 cursor-pointer ${
          isSelected 
            ? 'border-green-500 ring-2 ring-green-200' 
            : 'border-gray-100/50 hover:border-green-300/50'
        } backdrop-blur-sm ${isRTL ? 'text-right' : 'text-left'}`}
      >
        {/* Compact Header */}
        <div className={`relative h-24 bg-gradient-to-r ${plan.color} p-4`}>
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative z-10">
            <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
            <div className="flex items-baseline">
              <span className="text-white text-2xl font-bold">{plan.price}</span>
              <span className="text-white/80 text-xs ml-1">{plan.period}</span>
            </div>
          </div>
          {plan.highlighted && (
            <div className={`absolute top-2 ${isRTL ? 'left-2' : 'right-2'} bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold`}>
              {t.common.mostPopular}
            </div>
          )}
        </div>

        {/* Compact Content */}
        <div className="p-4">
          <p className="text-gray-600 text-xs mb-3 line-clamp-2">{plan.subtitle}</p>
          <ul className="space-y-2 mb-4">
            {plan.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start text-xs text-gray-700">
                <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                <span className="line-clamp-2">{feature}</span>
              </li>
            ))}
          </ul>
          <button 
            className={`w-full py-2 px-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
              isSelected
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isSelected ? 'Selected' : 'Select Plan'}
          </button>
        </div>
      </div>
    );
  }
  
  // Original version for tablet and desktop
  return (
    <div 
      onClick={onSelect}
      className={`bg-gradient-to-br from-white via-gray-50 to-green-50/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border-2 cursor-pointer ${
        isSelected 
          ? 'border-green-500 ring-2 ring-green-200 scale-105' 
          : 'border-gray-100/50 hover:border-green-300/50'
      } backdrop-blur-sm ${isRTL ? 'text-right' : 'text-left'} ${
        plan.highlighted ? 'ring-2 ring-green-100' : ''
      }`}
    >
      {/* Header */}
      <div className={`relative bg-gradient-to-r ${plan.color} p-6 pb-8`}>
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10">
          <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
          <p className="text-white/90 text-sm mb-3">{plan.subtitle}</p>
          <div className="flex items-baseline">
            <span className="text-white text-3xl font-bold">{plan.price}</span>
            <span className="text-white/80 text-sm ml-2">{plan.period}</span>
          </div>
        </div>
        {plan.highlighted && (
          <div className={`absolute top-2 ${isRTL ? 'left-4' : 'right-4'} bg-yellow-400 text-white text-xs px-3 py-1 rounded-full font-semibold`}>
            {t.common.mostPopular}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700">
              <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
            isSelected
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isSelected ? '✓ Selected' : 'Select This Plan'}
        </button>
      </div>
    </div>
  );
}
