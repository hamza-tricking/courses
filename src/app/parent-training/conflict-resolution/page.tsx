'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from '@/contexts/LanguageContext';

export default function ConflictResolutionPage() {
  const { t, isRTL, language } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const content = {
    ar: {
      title: "حل النزاعات",
      subtitle: "تعلم استراتيجيات فعالة لحل النزاعات الأسرية",
      description: "النزاعات جزء طبيعي من الحياة الأسرية، ولكن الطريقة التي نتعامل معها تحدد العلاقات. سوف تتعلمون كيفية تحويل النزاعات إلى فرص للنمو والتفاهم.",
      strategies: [
        {
          title: "تحديد مصدر النزاع",
          description: "تعلم كيفية الوصول إلى جذر المشكلة بدلاً من التعامل مع الأعراض السطحية."
        },
        {
          title: "الهدوء والحفاظ على السيطرة",
          description: "طور تقنيات للحفاظ على هدوئك أثناء النزاعات والاستجابة بشكل بناء."
        },
        {
          title: "البحث عن حلول وسط",
          description: "تعلم كيفية إيجاد حلول ترضي جميع الأطراف وتعزز التعاون."
        },
        {
          title: "الإصلاح والمصالحة",
          description: "طور مهارات إصلاح العلاقات بعد النزاعات وتعزيز الروابط الأسرية."
        }
      ],
      benefits: [
        "تقليل شدة النزاعات ومدتها",
        "تحسين مهارات حل المشاكل لدى الأطفال",
        "بناء علاقات أسرية أكثر مرونة",
        "خلق بيئة منزلية هادئة وداعمة"
      ]
    },
    de: {
      title: "Konfliktlösung",
      subtitle: "Lernen Sie effektive Strategien zur Lösung von Familienkonflikten",
      description: "Konflikte sind ein natürlicher Teil des Familienlebens, aber die Art, wie wir mit ihnen umgehen, bestimmt die Beziehungen. Sie lernen, Konflikte in Wachstums- und Verständnismöglichkeiten umzuwandeln.",
      strategies: [
        {
          title: "Konfliktquelle identifizieren",
          description: "Lernen Sie, zur Wurzel des Problems vorzustoßen, anstatt nur mit oberflächlichen Symptomen umzugehen."
        },
        {
          title: "Ruhe bewahren und die Kontrolle behalten",
          description: "Entwickeln Sie Techniken, um während Konflikten ruhig zu bleiben und konstruktiv zu reagieren."
        },
        {
          title: "Win-Win-Lösungen finden",
          description: "Lernen Sie, Lösungen zu finden, die alle Parteien zufriedenstellen und die Zusammenarbeit fördern."
        },
        {
          title: "Wiedergutmachung und Versöhnung",
          description: "Entwickeln Sie Fähigkeiten zur Beziehungswiederherstellung nach Konflikten und zur Stärkung familiärer Bindungen."
        }
      ],
      benefits: [
        "Reduzierte Konfliktintensität und -dauer",
        "Verbesserte Problemlösungsfähigkeiten bei Kindern",
        "Aufbau flexiblerer Familienbeziehungen",
        "Schaffung eines ruhigen und unterstützenden Familienumfelds"
      ]
    },
    en: {
      title: "Conflict Resolution",
      subtitle: "Learn Effective Strategies for Resolving Family Conflicts",
      description: "Conflicts are a natural part of family life, but how we handle them determines our relationships. You'll learn to transform conflicts into opportunities for growth and understanding.",
      strategies: [
        {
          title: "Identify Conflict Source",
          description: "Learn to get to the root of the problem instead of dealing with surface symptoms."
        },
        {
          title: "Stay Calm and Maintain Control",
          description: "Develop techniques to remain calm during conflicts and respond constructively."
        },
        {
          title: "Find Win-Win Solutions",
          description: "Learn to find solutions that satisfy all parties and promote cooperation."
        },
        {
          title: "Repair and Reconcile",
          description: "Develop skills to repair relationships after conflicts and strengthen family bonds."
        }
      ],
      benefits: [
        "Reduced conflict intensity and duration",
        "Improved problem-solving skills in children",
        "Building more resilient family relationships",
        "Creating a peaceful and supportive home environment"
      ]
    }
  };

  const currentContent = content[language] || content.en;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 ${isRTL ? 'rtl' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {currentContent.subtitle}
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* Strategies Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'ar' ? 'استراتيجيات سنتعلمها' : language === 'de' ? 'Strategien, die Sie lernen werden' : 'Strategies You Will Learn'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentContent.strategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'ar' ? 'الفوائد التي ستحصل عليها' : language === 'de' ? 'Vorteile, die Sie erhalten' : 'Benefits You Will Gain'}
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <ul className="space-y-4">
                {currentContent.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1">
                      <span className="text-white text-sm flex items-center justify-center">✓</span>
                    </div>
                    <span className="text-gray-800 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'جاهز لتحويل النزاعات إلى فرص؟' : language === 'de' ? 'Bereit, Konflikte in Chancen umzuwandeln?' : 'Ready to Transform Conflicts into Opportunities?'}
              </h3>
              <p className="text-lg mb-6">
                {language === 'ar' ? 'انضم إلى دورتنا اليوم وابدأ في بناء علاقات أكثر سلامًا' : language === 'de' ? 'Treten Sie noch heute unserem Kurs bei und beginnen Sie, friedlichere Beziehungen aufzubauen' : 'Join our course today and start building more peaceful relationships'}
              </p>
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {language === 'ar' ? 'تواصل معنا الآن' : language === 'de' ? 'Kontaktieren Sie uns jetzt' : 'Contact Us Now'}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </div>
  );
}
