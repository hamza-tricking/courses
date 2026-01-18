'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';

export function ParentTrainingSection() {
  const { t, isRTL, language } = useLanguage();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('family');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const trainingCards = [
    {
      title: t.parentTraining?.cards?.family?.title || 'Parent Counseling',
      subtitle: t.parentTraining?.cards?.family?.subtitle || 'Professional support for family issues and parenting questions',
      description: t.parentTraining?.cards?.family?.description || 'Learn proven methods for a harmonious family atmosphere and effective communication with your children.',
      image: '/parents/Communicating Effectively with Your Child.jpg',
      features: t.parentTraining?.cards?.family?.features || ['Communication techniques', 'Conflict resolution', 'Setting boundaries', 'Positive parenting']
    },
    {
      title: t.parentTraining?.cards?.life?.title || 'Language Coaching',
      subtitle: t.parentTraining?.cards?.life?.subtitle || 'Individual language support and personal development',
      description: t.parentTraining?.cards?.life?.description || 'Unlock your full potential through targeted language coaching and personal development strategies.',
      image: '/parents/Setting Realistic Expectations.jpg',
      features: t.parentTraining?.cards?.life?.features || ['Language competence', 'Communication skills', 'Personal development', 'Professional development']
    }
  ];

  const tabs = [
    { id: 'family', label: t.parentTraining?.tabs?.family || 'Parent Counseling', icon: '🏠' },
    { id: 'life', label: t.parentTraining?.tabs?.life || 'Language Coaching', icon: '🌟' }
  ];

  const toggleFeature = (feature: string, cardIndex: number) => {
    setSelectedFeatures(prev => {
      // Remove any existing selection from this card
      const filtered = prev.filter(f => !f.startsWith(`card-${cardIndex}-`));
      
      // If clicking same feature, deselect it
      const featureKey = `card-${cardIndex}-${feature}`;
      if (prev.includes(featureKey)) {
        return filtered;
      }
      
      // Otherwise, select new feature
      return [...filtered, featureKey];
    });
  };

  const handleLearnMore = (cardIndex: number) => {
    const selectedFeature = selectedFeatures.find(f => f.startsWith(`card-${cardIndex}-`));
    
    if (selectedFeature) {
      const feature = selectedFeature.replace(`card-${cardIndex}-`, '');
      
      // Map features to their respective pages
      const featureRoutes: { [key: string]: string } = {
        // Parent Counseling features (card 0) - Arabic
        'تقنيات التواصل': '/parent-training/communication',
        'حل النزاعات': '/parent-training/conflict-resolution',
        'وضع الحدود': '/parent-training/boundaries',
        'التربية الإيجابية': '/parent-training/positive-parenting',
        
        // Language Coaching features (card 1) - Arabic
        'الكفاءة اللغوية': '/services/language-coaching',
        'مهارات التواصل': '/services/communication-skills',
        'التطور الشخصي': '/services/personal-development',
        'التطوير المهني': '/services/professional-development',
        
        // Parent Counseling features (card 0) - German
        'Kommunikationstechniken': '/parent-training/communication',
        'Konfliktlösung': '/parent-training/conflict-resolution',
        'Grenzen setzen': '/parent-training/boundaries',
        'Positive Erziehung': '/parent-training/positive-parenting',
        
        // Language Coaching features (card 1) - German
        'Sprachkompetenz': '/services/language-coaching',
        'Kommunikationsfähigkeit': '/services/communication-skills',
        'Persönlichkeitsentwicklung': '/services/personal-development',
        'Berufliche Weiterbildung': '/services/professional-development',
        
        // Fallback English names
        'Communication techniques': '/parent-training/communication',
        'Conflict resolution': '/parent-training/conflict-resolution',
        'Setting boundaries': '/parent-training/boundaries',
        'Positive parenting': '/parent-training/positive-parenting',
        'Language competence': '/services/language-coaching',
        'Communication skills': '/services/communication-skills',
        'Personal development': '/services/personal-development',
        'Professional development': '/services/professional-development'
      };
      
      const route = featureRoutes[feature];
      if (route) {
        router.push(route);
      } else {
        // For German language, navigate to /parent-training page
        if (language === 'de') {
          router.push('/parent-training');
        } else {
          // Fallback to general page if specific route not found
          router.push(cardIndex === 0 ? '/parent-training' : '/services');
        }
      }
    } else {
      // No feature selected, navigate to /parent-training for German, general page for others
      if (language === 'de') {
        router.push('/parent-training');
      } else {
        router.push(cardIndex === 0 ? '/parent-training' : '/services');
      }
    }
  };

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
          <h2 className="text-2xl p-2 sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent">
            {t.parentTraining?.title || 'Parent Counseling & Language Coaching'}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 max-w-3xl mx-auto">
            {t.parentTraining?.subtitle || 'Professional support for parents on family issues, life challenges, and child development'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center space-x-2 text-sm sm:text-base text-gray-800"
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Compact Horizontal Scroll */}
        <div className="sm:hidden mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {trainingCards.map((card, index) => (
              <div key={index} className="flex-none w-72">
                <div
                  className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-white/10 h-full"
                >
                  {/* Card Header */}
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-emerald-600/40 p-4 text-white text-center flex flex-col justify-center">
                      <div className="text-4xl mb-2">{index === 0 ? '👨‍👩‍👧‍👦' : '🌟'}</div>
                      <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                      <p className="text-white text-sm">{card.subtitle}</p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h4 className="font-semibold text-black mb-3 text-xs">Features:</h4>
                    <div className="space-y-2">
                      {card.features.map((feature: string, itemIndex: number) => (
                        <button
                          key={itemIndex}
                          onClick={() => toggleFeature(feature, index)}
                          className={`w-full text-left px-3 py-2 rounded-lg border transition-all duration-300 text-xs ${
                            selectedFeatures.includes(`card-${index}-${feature}`)
                              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-500 shadow-md'
                              : 'bg-white/80 text-gray-700 border-gray-300 hover:border-green-400 hover:bg-green-50'
                          }`}
                          disabled={false}
                        >
                          <span className="flex items-center justify-between">
                            <span>{feature}</span>
                            {selectedFeatures.includes(`card-${index}-${feature}`) && (
                              <span className="text-white">✓</span>
                            )}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={() => handleLearnMore(index)}
                      className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs"
                    >
                      {t.parentTraining?.cta?.learnMore || 'Learn More'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet and Desktop: Grid Layout */}
        <div className={`hidden sm:grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {trainingCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-green-200/30"
            >
              {/* Card Header */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-emerald-600/40 p-4 sm:p-6 text-black">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{index === 0 ? '👨‍👩‍👧‍👦' : '🌟'}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-black text-sm sm:text-base">{card.subtitle}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <h4 className="font-semibold text-black mb-3 sm:mb-4 text-sm sm:text-base">Features:</h4>
                <div className="space-y-2 sm:space-y-3">
                  {card.features.map((feature: string, itemIndex: number) => (
                    <button
                      key={itemIndex}
                      onClick={() => toggleFeature(feature, index)}
                      className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-all duration-300 text-sm sm:text-base ${
                        selectedFeatures.includes(`card-${index}-${feature}`)
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-500 shadow-md transform scale-105'
                          : 'bg-white/80 text-gray-700 border-gray-300 hover:border-green-400 hover:bg-green-50 hover:shadow-sm'
                      }`}
                      disabled={false}
                    >
                      <span className="flex items-center justify-between">
                        <span>{feature}</span>
                        {selectedFeatures.includes(`card-${index}-${feature}`) && (
                          <span className="text-white font-bold">✓</span>
                        )}
                      </span>
                    </button>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => handleLearnMore(index)}
                  className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-black py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base"
                >
                  {t.parentTraining?.cta?.learnMore || 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}