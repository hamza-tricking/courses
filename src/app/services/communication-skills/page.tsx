'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from '@/contexts/LanguageContext';

export default function CommunicationSkillsPage() {
  const { t, isRTL, language } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const content = {
    ar: {
      title: "مهارات التواصل",
      subtitle: "طور قدرتك على التواصل بفعالية في جميع جوانب الحياة",
      description: "مهارات التواصل الفعالة ضرورية للنجاح في العلاقات الشخصية والمهنية. سوف تتعلمون كيفية التعبير عن أفكارك بوضوح والاستماع بتعاطف وبناء علاقات قوية.",
      areas: [
        {
          title: "التواصل اللفظي وغير اللفظي",
          description: "تعلم كيفية مواءمة لغة جسدك مع كلماتك لزيادة تأثير رسالتك."
        },
        {
          title: "الاستماع النشط",
          description: "طور مهارة الاستماع باهتمام وفهم الرسائل الخفية والمشاعر غير المعلنة."
        },
        {
          title: "التواصل بين الثقافات",
          description: "تعلم كيفية التواصل بفعالية عبر الحواجز الثقافية المختلفة."
        },
        {
          title: "التواصل الرقمي",
          description: "سيد مهارات التواصل الكتابي والمرئي في العصر الرقمي."
        }
      ],
      applications: [
        "تحسين العلاقات الشخصية والمهنية",
        "زيادة التأثير والقوة في المفاوضات",
        "بناء شبكات علاقات قوية",
        "تطوير المهارات القيادية",
        "تحسين الأداء في المقابلات والعروض التقديمية"
      ]
    },
    de: {
      title: "Kommunikationsfähigkeit",
      subtitle: "Entwickeln Sie Ihre Fähigkeit zur effektiven Kommunikation in allen Lebensbereichen",
      description: "Effektive Kommunikationsfähigkeiten sind entscheidend für den Erfolg in persönlichen und beruflichen Beziehungen. Sie lernen, Ihre Gedanken klar auszudrücken, mitgefühlvoll zuzuhören und starke Beziehungen aufzubauen.",
      areas: [
        {
          title: "Verbale und nonverbale Kommunikation",
          description: "Lernen Sie, Ihre Körpersprache mit Ihren Worten in Einklang zu bringen, um die Wirkung Ihrer Botschaften zu verstärken."
        },
        {
          title: "Aktives Zuhören",
          description: "Entwickeln Sie die Fähigkeit, aufmerksam zuzuhören und verborgene Botschaften und unausgedrückte Gefühle zu verstehen."
        },
        {
          title: "Interkulturelle Kommunikation",
          description: "Lernen Sie, effektiv über kulturelle Grenzen hinweg zu kommunizieren."
        },
        {
          title: "Digitale Kommunikation",
          description: "Meistern Sie schriftliche und visuelle Kommunikationsfähigkeiten im digitalen Zeitalter."
        }
      ],
      applications: [
        "Verbesserung persönlicher und beruflicher Beziehungen",
        "Erhöhter Einfluss und Stärke in Verhandlungen",
        "Aufbau starker Beziehungsnetzwerke",
        "Entwicklung von Führungsfähigkeiten",
        "Verbesserte Leistung in Vorstellungsgesprächen und Präsentationen"
      ]
    },
    en: {
      title: "Communication Skills",
      subtitle: "Develop Your Ability to Communicate Effectively in All Areas of Life",
      description: "Effective communication skills are essential for success in personal and professional relationships. You'll learn to express your ideas clearly, listen empathetically, and build strong relationships.",
      areas: [
        {
          title: "Verbal and Non-Verbal Communication",
          description: "Learn to align your body language with your words to enhance your message impact."
        },
        {
          title: "Active Listening",
          description: "Develop the skill of attentive listening and understanding hidden messages and unexpressed feelings."
        },
        {
          title: "Cross-Cultural Communication",
          description: "Learn to communicate effectively across different cultural barriers."
        },
        {
          title: "Digital Communication",
          description: "Master written and visual communication skills in the digital age."
        }
      ],
      applications: [
        "Improved personal and professional relationships",
        "Increased influence and strength in negotiations",
        "Building strong relationship networks",
        "Developing leadership skills",
        "Enhanced performance in interviews and presentations"
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
              {language === 'ar' ? 'مجالات التطور' : language === 'de' ? 'Entwicklungsbereiche' : 'Areas of Development'}
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

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'ar' ? 'التطبيقات العملية' : language === 'de' ? 'Praktische Anwendungen' : 'Practical Applications'}
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.applications.map((application, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1">
                      <span className="text-white text-sm flex items-center justify-center">✓</span>
                    </div>
                    <span className="text-gray-800 text-lg">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'جاهز لتصبح متواصل بفعالية؟' : language === 'de' ? 'Bereit, ein effektiver Kommunikator zu werden?' : 'Ready to Become an Effective Communicator?'}
              </h3>
              <p className="text-lg mb-6">
                {language === 'ar' ? 'انضم إلى دورتنا اليوم وابدأ في بناء علاقات أقوى' : language === 'de' ? 'Treten Sie noch heute unserem Kurs bei und beginnen Sie, stärkere Beziehungen aufzubauen' : 'Join our course today and start building stronger relationships'}
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
