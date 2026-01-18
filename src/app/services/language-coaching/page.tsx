'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageCoachingPage() {
  const { t, isRTL, language } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const content = {
    ar: {
      title: "الكفاءة اللغوية",
      subtitle: "طور مهاراتك اللغوية للوصول إلى إتقان كامل",
      description: "الكفاءة اللغوية هي أكثر من مجرد التحدث بطلاقة - إنها تتعلق بالفهم الدقيق والقدرة على التعبير بوضوح وثقة. سوف تتعلمون تقنيات متقدمة لرفع مستوى إتقانك اللغوي.",
      skills: [
        {
          title: "النطق الصحيح",
          description: "تعلم تقنيات النطق الدقيقة لإخراج الأصوات بشكل صحيح وواضح."
        },
        {
          title: "الاستماع المتقدم",
          description: "طور مهارة الاستماع النشط لفهم المحادثات المعقدة والفروق الدقيقة."
        },
        {
          title: "المفردات والتعبير",
          description: "وسع مفرداتك وقدرتك على التعبير عن الأفكار المعقدة بدقة."
        },
        {
          title: "القواعد النحوية",
          description: "احتر القواعد النحوية والتراكيب اللغوية المعقدة."
        }
      ],
      benefits: [
        "زيادة الثقة في التواصل اللغوي",
        "تحسين الفرص المهنية والتعليمية",
        "تقليل التأثير اللغوي في المواقف الاجتماعية",
        "تحسين القدرة على التفكير النقدي باللغة الثانية"
      ]
    },
    de: {
      title: "Sprachkompetenz",
      subtitle: "Entwickeln Sie Ihre Sprachfähigkeiten zur vollen Meisterschaft",
      description: "Sprachkompetenz geht über reines Sprechen hinaus - es geht um präzises Verständnis und die Fähigkeit, sich klar und selbstbewusst auszudrücken. Sie lernen fortgeschrittene Techniken zur Verbesserung Ihrer Sprachbeherrschung.",
      skills: [
        {
          title: "Korrekte Aussprache",
          description: "Lernen Sie präzise Aussprachetechniken für korrekte und klare Artikulation."
        },
        {
          title: "Fortgeschrittenes Zuhören",
          description: "Entwickeln Sie aktives Zuhören zum Verständnis komplexer Gespräche und feiner Nuancen."
        },
        {
          title: "Wortschatz und Ausdruck",
          description: "Erweitern Sie Ihren Wortschatz und Ihre Fähigkeit, komplexe Ideen präzise auszudrücken."
        },
        {
          title: "Grammatik und Struktur",
          description: "Meistern Sie komplexe grammatikalische Strukturen und Sprachmuster."
        }
      ],
      benefits: [
        "Erhöhtes Selbstvertrauen in sprachlicher Kommunikation",
        "Verbesserte berufliche und bildungsmöglichkeiten",
        "Reduzierter sprachlicher Einfluss in sozialen Situationen",
        "Verbesserte Fähigkeit zum kritischen Denken in der Zweitsprache"
      ]
    },
    en: {
      title: "Language Competence",
      subtitle: "Develop Your Language Skills to Achieve Full Mastery",
      description: "Language competence is more than just speaking fluently - it's about precise understanding and the ability to express yourself clearly and confidently. You'll learn advanced techniques to elevate your language mastery.",
      skills: [
        {
          title: "Correct Pronunciation",
          description: "Learn precise pronunciation techniques to produce sounds correctly and clearly."
        },
        {
          title: "Advanced Listening",
          description: "Develop active listening skills to understand complex conversations and subtle nuances."
        },
        {
          title: "Vocabulary and Expression",
          description: "Expand your vocabulary and ability to express complex ideas with precision."
        },
        {
          title: "Grammar and Structure",
          description: "Master complex grammatical structures and language patterns."
        }
      ],
      benefits: [
        "Increased confidence in language communication",
        "Improved professional and educational opportunities",
        "Reduced language anxiety in social situations",
        "Enhanced ability to think critically in the second language"
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

          {/* Skills Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'ar' ? 'المهارات التي ستطورها' : language === 'de' ? 'Fähigkeiten, die Sie entwickeln werden' : 'Skills You Will Develop'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentContent.skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    {skill.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {skill.description}
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
                {language === 'ar' ? 'جاهز للوصول إلى إتقان لغوي كامل؟' : language === 'de' ? 'Bereit für volle Sprachbeherrschung?' : 'Ready to Achieve Full Language Mastery?'}
              </h3>
              <p className="text-lg mb-6">
                {language === 'ar' ? 'انضم إلى دورتنا اليوم وابدأ رحلتك نحو الإتقان اللغوي' : language === 'de' ? 'Treten Sie noch heute unserem Kurs bei und beginnen Sie Ihre Reise zur Sprachbeherrschung' : 'Join our course today and start your journey to language mastery'}
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
