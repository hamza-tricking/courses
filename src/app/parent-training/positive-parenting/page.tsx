'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from '@/contexts/LanguageContext';

export default function PositiveParentingPage() {
  const { t, isRTL, language } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const content = {
    ar: {
      title: "التربية الإيجابية",
      subtitle: "تعلم أساليب التربية الإيجابية لبناء ثقة أطفالك",
      description: "التربية الإيجابية تركز على تعزيز السلوكيات الجيدة بدلاً من العقاب. سوف تتعلمون كيفية خلق بيئة منزلية إيجابية تشجع على النمو والتعلم.",
      principles: [
        {
          title: "التشجيع بدلاً من النقد",
          description: "تعلم كيفية التركيز على السلوكيات الجيدة وتشجيعها بدلاً من انتقاد الأخطاء."
        },
        {
          title: "النتائج الطبيعية",
          description: "افهم كيفية تطبيق نتائج طبيعية ومنطقية تساعد أطفالك على التعلم من أخطائهم."
        },
        {
          title: "بناء العلاقات القوية",
          description: "طور علاقات مبنية على الثقة والاحترام المتبادل بدلاً من الخوف."
        },
        {
          title: "النمو العاطفي",
          description: "تعلم كيفية دعم التطور العاطفي لأطفالك ومساعدتهم على فهم مشاعرهم."
        }
      ],
      techniques: [
        "استخدام لغة إيجابية مع أطفالك",
        "التركيز على الحلول بدلاً من المشاكل",
        "خلق روتين يومي متنبأ",
        "الاحتفال بالنجاحات الصغيرة",
        "الاستماع بتعاطف وتفهم",
        "توفير خيارات محدودة ومناسبة",
        "النمذجة بالسلوك الإيجابي"
      ]
    },
    de: {
      title: "Positive Erziehung",
      subtitle: "Lernen Sie positive Erziehungsmethoden zum Aufbau von Selbstvertrauen Ihrer Kinder",
      description: "Positive Erziehung konzentriert sich auf die Verstärkung guten Verhaltens anstatt Bestrafung. Sie lernen, wie Sie ein positives Familienumfeld schaffen, das Wachstum und Lernen fördert.",
      principles: [
        {
          title: "Ermutigen statt kritisieren",
          description: "Lernen Sie, sich auf gutes Verhalten zu konzentrieren und es zu verstärken, anstatt Fehler zu kritisieren."
        },
        {
          title: "Logische Konsequenzen",
          description: "Verstehen Sie, wie man logische und angemessene Konsequenzen anwendet, die Kindern helfen, aus ihren Fehlern zu lernen."
        },
        {
          title: "Starke Beziehungen aufbauen",
          description: "Entwickeln Sie Beziehungen, die auf gegenseitigem Vertrauen und Respekt basieren, anstatt auf Angst."
        },
        {
          title: "Emotionale Entwicklung",
          description: "Lernen Sie, die emotionale Entwicklung Ihrer Kinder zu unterstützen und ihnen zu helfen, ihre Gefühle zu verstehen."
        }
      ],
      techniques: [
        "Positive Sprache mit Ihren Kindern verwenden",
        "Auf Lösungen statt Probleme konzentrieren",
        "Vorhersehbare tägliche Routinen schaffen",
        "Kleine Erfolge feiern",
        "Mitgefühlvoll zuhören und verstehen",
        "Angemessene begrenzte Wahlmöglichkeiten bieten",
        "Positives Verhalten vorleben"
      ]
    },
    en: {
      title: "Positive Parenting",
      subtitle: "Learn Positive Parenting Approaches to Build Your Children's Confidence",
      description: "Positive parenting focuses on reinforcing good behaviors rather than punishment. You'll learn to create a positive family environment that encourages growth and learning.",
      principles: [
        {
          title: "Encourage Instead of Criticize",
          description: "Learn to focus on and reinforce good behaviors instead of criticizing mistakes."
        },
        {
          title: "Natural Consequences",
          description: "Understand how to apply natural and logical consequences that help children learn from their mistakes."
        },
        {
          title: "Build Strong Relationships",
          description: "Develop relationships based on mutual trust and respect rather than fear."
        },
        {
          title: "Emotional Growth",
          description: "Learn to support your children's emotional development and help them understand their feelings."
        }
      ],
      techniques: [
        "Use positive language with your children",
        "Focus on solutions instead of problems",
        "Create predictable daily routines",
        "Celebrate small successes",
        "Listen with empathy and understanding",
        "Provide appropriate limited choices",
        "Model positive behavior"
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

          {/* Principles Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'ar' ? 'المبادئ الأساسية' : language === 'de' ? 'Grundprinzipien' : 'Core Principles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentContent.principles.map((principle, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    {principle.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Techniques List */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'ar' ? 'تقنيات عملية سنتعلمها' : language === 'de' ? 'Praktische Techniken, die Sie lernen' : 'Practical Techniques You Will Learn'}
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.techniques.map((technique, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1">
                      <span className="text-white text-sm flex items-center justify-center">✓</span>
                    </div>
                    <span className="text-gray-800 text-lg">{technique}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'جاهز لبدء رحلة التربية الإيجابية؟' : language === 'de' ? 'Bereit, die Reise der positiven Erziehung zu beginnen?' : 'Ready to Start Your Positive Parenting Journey?'}
              </h3>
              <p className="text-lg mb-6">
                {language === 'ar' ? 'انضم إلى دورتنا اليوم وابدأ في بناء ثقة أطفالك' : language === 'de' ? 'Treten Sie noch heute unserem Kurs bei und beginnen Sie, das Selbstvertrauen Ihrer Kinder aufzubauen' : 'Join our course today and start building your children\'s confidence'}
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
