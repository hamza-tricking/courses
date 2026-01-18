'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from '@/contexts/LanguageContext';

export default function CommunicationPage() {
  const { t, isRTL, language } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const content = {
    ar: {
      title: "تقنيات التواصل",
      subtitle: "تعلم فن التواصل الفعال مع أطفالك",
      description: "التواصل هو أساس العلاقات الأسرية الصحية. في هذه الدورة، ستتعلمون تقنيات provenة لتحسين التواصل مع أطفالك وبناء علاقات أقوى.",
      topics: [
        {
          title: "الاستماع الفعال",
          description: "تعلّم كيفية الاستماع باهتمام وفهم ما يقوله أطفالك حقًا، وليس فقط كلماتهم."
        },
        {
          title: "التواصل غير اللفظي",
          description: "افهم لغة جسد أطفالك والإشارات التي لا ينطقونها."
        },
        {
          title: "طرح الأسئلة المناسبة",
          description: "طور مهارة طرح الأسئلة المفتوحة التي تشجع على الحوار والتفكير النقدي."
        },
        {
          title: "التعبير عن المشاعر",
          description: "ساعد أطفالك على التعبير عن مشاعرهم بشكل صحي وبناء."
        }
      ],
      benefits: [
        "تحسين فهم متبادل بين الوالدين والأطفال",
        "تقليل سوء الفهم والنزاعات",
        "بناء ثقة أطفالك في التعبير عن أنفسهم",
        "خلق بيئة منزلية أكثر تناغمًا"
      ]
    },
    de: {
      title: "Kommunikationstechniken",
      subtitle: "Lernen Sie die Kunst der effektiven Kommunikation mit Ihren Kindern",
      description: "Kommunikation ist die Grundlage für gesunde Familienbeziehungen. In diesem Kurs lernen Sie bewährte Techniken zur Verbesserung der Kommunikation mit Ihren Kindern und zum Aufbau stärkerer Beziehungen.",
      topics: [
        {
          title: "Aktives Zuhören",
          description: "Lernen Sie, aufmerksam zuzuhören und wirklich zu verstehen, was Ihre Kinder sagen, nicht nur ihre Worte."
        },
        {
          title: "Nonverbale Kommunikation",
          description: "Verstehen Sie die Körpersprache Ihrer Kinder und die Signale, die sie nicht aussprechen."
        },
        {
          title: "Geeignete Fragen stellen",
          description: "Entwickeln Sie die Fähigkeit, offene Fragen zu stellen, die Dialog und kritisches Denken fördern."
        },
        {
          title: "Gefühle ausdrücken",
          description: "Helfen Sie Ihren Kindern, ihre Gefühle auf gesunde Weise auszudrücken."
        }
      ],
      benefits: [
        "Verbessertes gegenseitiges Verständnis zwischen Eltern und Kindern",
        "Reduzierte Missverständnisse und Konflikte",
        "Aufbau des Selbstvertrauens Ihrer Kinder im Selbstausdruck",
        "Schaffung eines harmonischeren Familienumfelds"
      ]
    },
    en: {
      title: "Communication Techniques",
      subtitle: "Learn the Art of Effective Communication with Your Children",
      description: "Communication is the foundation of healthy family relationships. In this course, you'll learn proven techniques to improve communication with your children and build stronger relationships.",
      topics: [
        {
          title: "Active Listening",
          description: "Learn how to listen attentively and truly understand what your children are saying, not just their words."
        },
        {
          title: "Non-verbal Communication",
          description: "Understand your children's body language and the signals they don't verbalize."
        },
        {
          title: "Asking Appropriate Questions",
          description: "Develop the skill of asking open-ended questions that encourage dialogue and critical thinking."
        },
        {
          title: "Expressing Feelings",
          description: "Help your children express their emotions in healthy, constructive ways."
        }
      ],
      benefits: [
        "Improved mutual understanding between parents and children",
        "Reduced misunderstandings and conflicts",
        "Building your children's confidence in self-expression",
        "Creating a more harmonious home environment"
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

          {/* Topics Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'ar' ? 'المواضيع التي سيتم تناولها' : language === 'de' ? 'Themen, die behandelt werden' : 'Topics Covered'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentContent.topics.map((topic, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    {topic.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {topic.description}
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
                {language === 'ar' ? 'جاهز لبدء رحلة التواصل الفعال؟' : language === 'de' ? 'Bereit, die Reise der effektiven Kommunikation zu beginnen?' : 'Ready to Start Your Effective Communication Journey?'}
              </h3>
              <p className="text-lg mb-6">
                {language === 'ar' ? 'انضم إلى دورتنا اليوم وابدأ في بناء علاقات أقوى مع أطفالك' : language === 'de' ? 'Treten Sie noch heute unserem Kurs bei und beginnen Sie, stärkere Beziehungen zu Ihren Kindern aufzubauen' : 'Join our course today and start building stronger relationships with your children'}
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
