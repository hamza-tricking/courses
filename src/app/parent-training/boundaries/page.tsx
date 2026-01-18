'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from '@/contexts/LanguageContext';

export default function BoundariesPage() {
  const { t, isRTL, language } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const content = {
    ar: {
      title: "وضع الحدود",
      subtitle: "تعلم فن وضع الحدود الصحية في التربية",
      description: "الحدود الصحية ضرورية لنمو الأطفال ورفاهيتهم. في هذه الدورة، سوف تتعلمون كيفية وضع حدود واضحة ومناسبة تحترم احتياجات جميع أفراد الأسرة.",
      topics: [
        {
          title: "أنواع الحدود",
          description: "افهم الفرق بين الحدود المادية والعاطفية والرقمية والزمنية."
        },
        {
          title: "وضع حدود مناسبة للعمر",
          description: "تعلم كيفية تكييف الحدود مع مراحل نمو أطفالك المختلفة."
        },
        {
          title: "التواصل حول الحدود",
          description: "طور مهارات شرح الحدود بشكل واضح ومحب لأطفالك."
        },
        {
          title: "الثبات في تطبيق الحدود",
          description: "تعلم كيفية الحفاظ على الثبات في تطبيق الحدود بشكل عادل وحازم."
        }
      ],
      benefits: [
        "زيادة احترام أطفالك للقواعد الأسرية",
        "تحسين السلوك والانضباط الذاتي لدى الأطفال",
        "تقليل السلطة والنزاعات اليومية",
        "بناء علاقات أسرية أكثر توازنًا واحترامًا"
      ]
    },
    de: {
      title: "Grenzen setzen",
      subtitle: "Lernen Sie die Kunst des gesunden Grenzensetzens in der Erziehung",
      description: "Gesunde Grenzen sind entscheidend für die Entwicklung und das Wohlbefinden von Kindern. In diesem Kurs lernen Sie, klare und angemessene Grenzen zu setzen, die die Bedürfnisse aller Familienmitglieder respektieren.",
      topics: [
        {
          title: "Arten von Grenzen",
          description: "Verstehen Sie den Unterschied zwischen physischen, emotionalen, digitalen und zeitlichen Grenzen."
        },
        {
          title: "Altersgerechte Grenzen setzen",
          description: "Lernen Sie, Grenzen an die verschiedenen Entwicklungsstadien Ihrer Kinder anzupassen."
        },
        {
          title: "Kommunikation über Grenzen",
          description: "Entwickeln Sie Fähigkeiten, Grenzen klar und liebevoll zu erklären."
        },
        {
          title: "Beständigkeit bei der Grenzdurchsetzung",
          description: "Lernen Sie, bei der Grenzdurchsetzung beständig zu bleiben und Grenzen fair und konsequent durchzusetzen."
        }
      ],
      benefits: [
        "Erhöhter Respekt Ihrer Kinder für Familienregeln",
        "Verbessertes Verhalten und Selbstregulierung bei Kindern",
        "Reduzierte tägliche Machtkämpfe und Konflikte",
        "Aufbau ausgewogener und respektvoller Familienbeziehungen"
      ]
    },
    en: {
      title: "Setting Boundaries",
      subtitle: "Learn the Art of Healthy Boundary Setting in Parenting",
      description: "Healthy boundaries are essential for children's development and well-being. In this course, you'll learn to set clear, appropriate boundaries that respect all family members' needs.",
      topics: [
        {
          title: "Types of Boundaries",
          description: "Understand the difference between physical, emotional, digital, and time boundaries."
        },
        {
          title: "Age-Appropriate Boundaries",
          description: "Learn how to adapt boundaries to your children's different developmental stages."
        },
        {
          title: "Communicating Boundaries",
          description: "Develop skills to explain boundaries clearly and lovingly to your children."
        },
        {
          title: "Consistent Boundary Enforcement",
          description: "Learn to remain consistent in enforcing boundaries fairly and firmly."
        }
      ],
      benefits: [
        "Increased respect from children for family rules",
        "Improved behavior and self-regulation in children",
        "Reduced daily power struggles and conflicts",
        "Building more balanced and respectful family relationships"
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
              {language === 'ar' ? 'المواضيع الرئيسية' : language === 'de' ? 'Hauptthemen' : 'Key Topics'}
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
                {language === 'ar' ? 'جاهز لوضع حدود صحية؟' : language === 'de' ? 'Bereit, gesunde Grenzen zu setzen?' : 'Ready to Set Healthy Boundaries?'}
              </h3>
              <p className="text-lg mb-6">
                {language === 'ar' ? 'انضم إلى دورتنا اليوم وابدأ في بناء بيئة أسرية أكثر توازنًا' : language === 'de' ? 'Treten Sie noch heute unserem Kurs bei und beginnen Sie, ein ausgewogeneres Familienumfeld aufzubauen' : 'Join our course today and start building a more balanced family environment'}
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
