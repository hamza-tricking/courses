'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProfessionalDevelopmentPage() {
  const { t, isRTL, language } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const content = {
    ar: {
      title: "التطوير المهني",
      subtitle: "تسارع بمسيرتك المهنية وحقق النجاح",
      description: "التطوير المهني المستمر ضروري للبقاء المنافس وتحقيق النجاح في مسيرتك. سوف تتعلمون كيفية تحديد أهدافك المهنية وبناء المهارات المطلوبة للوصول إلى المناصب القيادية.",
      areas: [
        {
          title: "تخطيط المسار المهني",
          description: "تعلم كيفية وضع خطة مهنية طويلة الأمد وتحديد الخطوات اللازمة لتحقيقها."
        },
        {
          title: "بناء المهارات الرئيسية",
          description: "حدد المهارات الأكثر قيمة في مجالك وطور استراتيجيات لتحسينها."
        },
        {
          title: "التواصل المهني",
          description: "طور مهارات التواصل الكتابي والشفهي وبناء شبكة مهنية قوية."
        },
        {
          title: "القيادة والتأثير",
          description: "تعلم كيفية إظهار qualities القيادية وزيادة تأثيرك في مكان العمل."
        }
      ],
      strategies: [
        "تحديد أهداف ذكية وقابلة للقياس",
        "البحث عن مرشد مهني",
        "الحصول على شهادات مهنية متخصصة",
        "بناء علامة شخصية قوية",
        "المشاركة في مؤتمرات وفعاليات الصناعة",
        "التعلم المستمر والتكيف مع التغيرات"
      ]
    },
    de: {
      title: "Berufliche Weiterbildung",
      subtitle: "Beschleunigen Sie Ihre berufliche Laufbahn und erreichen Sie Erfolg",
      description: "Kontinuierliche berufliche Weiterbildung ist entscheidend, um wettbewerbsfähig zu bleiben und beruflichen Erfolg zu erzielen. Sie lernen, berufliche Ziele zu setzen und die erforderlichen Fähigkeiten für Führungspositionen zu entwickeln.",
      areas: [
        {
          title: "Karriereplanung",
          description: "Lernen Sie, einen langfristigen Karriereplan zu erstellen und die notwendigen Schritte zur Zielerreichung zu identifizieren."
        },
        {
          title: "Schlüsselfähigkeiten entwickeln",
          description: "Identifizieren Sie die wertvollsten Fähigkeiten in Ihrer Branche und entwickeln Sie Strategien zu deren Verbesserung."
        },
        {
          title: "Berufliche Kommunikation",
          description: "Entwickeln Sie schriftliche und mündliche Kommunikationsfähigkeiten und bauen Sie ein starkes berufliches Netzwerk auf."
        },
        {
          title: "Führung und Einflussnahme",
          description: "Lernen Sie, Führungseigenschaften zu demonstrieren und Ihren Einfluss am Arbeitsplatz zu erhöhen."
        }
      ],
      strategies: [
        "Klare, messbare Ziele setzen",
        "Berufliche Mentorenschaft suchen",
        "Spezialisierte berufliche Zertifikate erwerben",
        "Starke persönliche Marke aufbauen",
        "An Konferenzen und Branchenveranstaltungen teilnehmen",
        "Kontinuierliches Lernen und Anpassung an Veränderungen"
      ]
    },
    en: {
      title: "Professional Development",
      subtitle: "Accelerate Your Career Path and Achieve Success",
      description: "Continuous professional development is essential to stay competitive and achieve career success. You'll learn to set professional goals and build the skills needed to reach leadership positions.",
      areas: [
        {
          title: "Career Planning",
          description: "Learn to create a long-term career plan and identify the necessary steps to achieve it."
        },
        {
          title: "Building Key Skills",
          description: "Identify the most valuable skills in your field and develop strategies to improve them."
        },
        {
          title: "Professional Communication",
          description: "Develop written and verbal communication skills and build a strong professional network."
        },
        {
          title: "Leadership and Influence",
          description: "Learn to demonstrate leadership qualities and increase your influence in the workplace."
        }
      ],
      strategies: [
        "Set smart, measurable goals",
        "Seek professional mentorship",
        "Obtain specialized professional certifications",
        "Build strong personal brand",
        "Attend industry conferences and events",
        "Continuous learning and adaptation to changes"
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

          {/* Areas Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'ar' ? 'مجالات التطوير' : language === 'de' ? 'Entwicklungsbereiche' : 'Areas of Development'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentContent.areas.map((area, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    {area.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'ar' ? 'استراتيجيات فعالة' : language === 'de' ? 'Effektive Strategien' : 'Effective Strategies'}
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.strategies.map((strategy, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1">
                      <span className="text-white text-sm flex items-center justify-center">✓</span>
                    </div>
                    <span className="text-gray-800 text-lg">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'جاهز لتسارع مسيرتك المهنية؟' : language === 'de' ? 'Bereit, Ihre berufliche Laufbahn zu beschleunigen?' : 'Ready to Accelerate Your Career?'}
              </h3>
              <p className="text-lg mb-6">
                {language === 'ar' ? 'انضم إلى دورتنا اليوم وابدأ في بناء مستقبل مهني ناجح' : language === 'de' ? 'Treten Sie noch heute unserem Kurs bei und beginnen Sie, eine erfolgreiche berufliche Zukunft aufzubauen' : 'Join our course today and start building a successful career future'}
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
