'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from '@/contexts/LanguageContext';

export default function PersonalDevelopmentPage() {
  const { t, isRTL, language } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const content = {
    ar: {
      title: "التطور الشخصي",
      subtitle: "اكتشف إمكاناتك الكاملة وحقق أهدافك",
      description: "التطور الشخصي هو رحلة مستمرة من اكتشاف الذات وتحسين المهارات. سوف تتعلمون كيفية تحديد نقاط القوة والضعف لديك ووضع خطة تطوير شخصية فعالة.",
      aspects: [
        {
          title: "الوعي الذاتي",
          description: "تعلم كيفية فهم شخصيتك وقيمك ودوافعك العميقة."
        },
        {
          title: "وضع الأهداف",
          description: "طور مهارة وضع أهداف ذكية وقابلة للتحقيق ومتوافقة مع قيمك."
        },
        {
          title: "إدارة الوقت",
          description: "تعلم تقنيات إدارة الوقت الفعالة لزيادة الإنتاجية وتحقيق التوازن."
        },
        {
          title: "الذكاء العاطفي",
          description: "طور فهم مشاعرك وقدرتك على إدارتها والتعامل معها بذكاء."
        }
      ],
      benefits: [
        "زيادة الثقة بالنفس والوعي الذاتي",
        "تحسين القدرة على اتخاذ القرارات",
        "العلاقات الشخصية والمهنية الأقوى",
        "تحقيق التوازن بين الحياة والعمل",
        "زيادة المرونة والقدرة على التكيف"
      ]
    },
    de: {
      title: "Persönlichkeitsentwicklung",
      subtitle: "Entdecken Sie Ihr volles Potenzial und erreichen Sie Ihre Ziele",
      description: "Persönlichkeitsentwicklung ist eine fortgesetzte Reise der Selbsterkundung und Fähigkeitsverbesserung. Sie lernen, Ihre Stärken und Schwächen zu identifizieren und einen effektiven persönlichen Entwicklungsplan zu erstellen.",
      aspects: [
        {
          title: "Selbstbewusstsein",
          description: "Lernen Sie, Ihre Persönlichkeit, Werte und tiefen Motive zu verstehen."
        },
        {
          title: "Zielsetzung",
          description: "Entwickeln Sie die Fähigkeit, klare, erreichbare Ziele zu setzen, die mit Ihren Werten übereinstimmen."
        },
        {
          title: "Zeitmanagement",
          description: "Lernen Sie effektive Zeitmanagementtechniken zur Produktivitätssteigerung und Work-Life-Balance."
        },
        {
          title: "Emotionale Intelligenz",
          description: "Entwickeln Sie das Verständnis Ihrer Gefühle und die Fähigkeit, sie intelligent zu managen und auszudrücken."
        }
      ],
      benefits: [
        "Erhöhtes Selbstvertrauen und Selbstbewusstsein",
        "Verbesserte Entscheidungsfähigkeit",
        "Stärkere persönliche und berufliche Beziehungen",
        "Erreichte Work-Life-Balance",
        "Erhöhte Flexibilität und Anpassungsfähigkeit"
      ]
    },
    en: {
      title: "Personal Development",
      subtitle: "Discover Your Full Potential and Achieve Your Goals",
      description: "Personal development is a continuous journey of self-discovery and skill improvement. You'll learn to identify your strengths and weaknesses and create an effective personal development plan.",
      aspects: [
        {
          title: "Self-Awareness",
          description: "Learn to understand your personality, values, and deep motivations."
        },
        {
          title: "Goal Setting",
          description: "Develop the skill of setting smart, achievable goals aligned with your values."
        },
        {
          title: "Time Management",
          description: "Learn effective time management techniques to increase productivity and achieve balance."
        },
        {
          title: "Emotional Intelligence",
          description: "Develop understanding of your emotions and ability to manage them intelligently."
        }
      ],
      benefits: [
        "Increased self-confidence and self-awareness",
        "Improved decision-making abilities",
        "Stronger personal and professional relationships",
        "Achieved work-life balance",
        "Enhanced flexibility and adaptability"
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

          {/* Aspects Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'ar' ? 'جوانب التطور' : language === 'de' ? 'Entwicklungsaspekte' : 'Aspects of Development'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentContent.aspects.map((aspect, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    {aspect.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {aspect.description}
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
                {language === 'ar' ? 'جاهز لبدء رحلة التطور الشخصي؟' : language === 'de' ? 'Bereit, Ihre persönliche Entwicklungsreise zu beginnen?' : 'Ready to Start Your Personal Development Journey?'}
              </h3>
              <p className="text-lg mb-6">
                {language === 'ar' ? 'انضم إلى دورتنا اليوم وابدأ في اكتشاف إمكاناتك الكاملة' : language === 'de' ? 'Treten Sie noch heute unserem Kurs bei und beginnen Sie, Ihr volles Potenzial zu entdecken' : 'Join our course today and start discovering your full potential'}
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
