'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { OnlineLessonsSection } from '@/components/OnlineLessonsSection';

export default function Courses4Page() {
  const { t, language } = useLanguage();

  const courseContent = {
    title: language === 'ar' ? 'لسان مبين' : language === 'de' ? 'Lisan Mubin' : 'Lisan Mubin',
    subtitle: language === 'ar' ? 'الطلاقة والفهم المتقدم' : language === 'de' ? 'Sprachliche Flüssigkeit und fortgeschrittenes Verständnis' : 'Advanced Language Proficiency and Understanding',
    description: language === 'ar' 
      ? 'يعمل الطالب على الوصول إلى الطلاقة اللغوية من خلال قراءة نصوص متقدمة، والنقاش والتحليل، وتطوير مهارات التعبير الشفهي والكتابي، ضمن بيئة تعليمية مكثفة ومخصصة.'
      : language === 'de'
      ? 'Der Schüler erreicht sprachliche Flüssigkeit durch das Lesen anspruchsvoller Texte, Diskussionen, Analyse und gezielte Förderung in einer intensiven Lernumgebung.'
      : 'The student works on achieving language proficiency through reading advanced texts, discussions, analysis, and developing expressive and writing skills in an intensive and specialized learning environment.',
    whatLearn: language === 'ar' 
      ? '❓ ماذا يتعلم الطالب في هذا المستوى؟'
      : language === 'de'
      ? '❓ Was lernt der Schüler in dieser Stufe?'
      : '❓ What does student learn in this level?',
    willBeAble: language === 'ar'
      ? '🎯 ماذا سيكون الطالب قادرًا عليه بعد إتمام المستوى؟'
      : language === 'de'
      ? '🎯 Was kann der Schüler nach Abschluss dieser Stufe?'
      : '🎯 What will student be able to do after completing the level?',
    outcomes: language === 'ar' ? [
      'قراءة النصوص المتقدمة وفهمها بعمق.',
      'التحدث بطلاقة وثقة عالية.',
      'التعبير الشفهي والكتابي بأسلوب لغوي سليم.',
      'ترسيخ ارتباطه باللغة العربية وهويته.'
    ] : language === 'de' ? [
      'Sicheres Verstehen komplexer Texte.',
      'Flüssiger und selbstbewusster sprachlicher Ausdruck.',
      'Strukturierte mündliche und schriftliche Kommunikation.',
      'Stärkung der sprachlichen Identität.'
    ] : [
      'Deep understanding of advanced texts.',
      'Fluent and confident speaking.',
      'Proper expressive and writing skills.',
      'Strengthening connection to Arabic language and identity.'
    ],
    features: language === 'ar' ? '⭐ ميزات المستوى:' : language === 'de' ? '⭐ Vorteile:' : '⭐ Features:',
    featuresList: language === 'ar' ? [
      'مجموعات مصغّرة جدًا بحد أقصى 3 طلاب.',
      'مرافقة تعليمية خاصة (Coaching) لكل طالب.',
      'تشخيص فردي لنقاط القوة والتحديات.',
      'خطة تطوير شخصية.',
      'متابعة فردية مستمرة.',
      'كتاب ورقي متقدم اختياري.'
    ] : language === 'de' ? [
      'Sehr kleine Gruppen mit maximal 3 Teilnehmern.',
      'Individuelles Coaching für jeden Schüler.',
      'Persönliche Lernstandsanalyse.',
      'Individueller Entwicklungsplan.',
      'Kontinuierliche persönliche Betreuung.',
      'Optionales fortgeschrittenes Lehrbuch.'
    ] : [
      'Very small groups with maximum 3 students.',
      'Individual coaching for each student.',
      'Personal learning progress analysis.',
      'Individual development plan.',
      'Continuous personal mentoring.',
      'Optional advanced workbook.'
    ],
    recommendedPackage: language === 'ar' ? '📦 الباقة الأنسب لهذا المستوى:' : language === 'de' ? '📦 Empfohlenes Paket:' : '📦 Recommended Package:',
    packageName: language === 'ar' ? 'باقة الإتقان (Mastery-Paket)' : language === 'de' ? 'Mastery-Paket' : 'Mastery Package',
    packageNote: language === 'ar' 
      ? ''
      : language === 'de'
      ? ''
      : 'For advanced students seeking mastery of Arabic language.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Course Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {courseContent.title}
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              {courseContent.subtitle}
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          {/* Course Image */}
          <div className="mb-12">
            <div className="w-full h-64 md:h-96 rounded-lg shadow-lg overflow-hidden bg-gray-100">
              <img
                src="/Courses photos/imagess 14.png"
                alt={courseContent.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Course Description */}
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-12 ${language === 'ar' ? 'rtl' : ''}`}>
            <p className={`text-lg text-gray-700 leading-relaxed mb-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {courseContent.description}
            </p>
            
            <div className="mb-6">
              <h3 className={`text-xl font-semibold text-gray-800 mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.whatLearn}</h3>
            </div>
            
            <div className="mb-6">
              <h3 className={`text-xl font-semibold text-gray-800 mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.willBeAble}</h3>
              <ul className={`space-y-2 text-gray-700 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {courseContent.outcomes.map((outcome, index) => (
                  <li key={index} className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className={`${language === 'ar' ? 'ml-3' : 'mr-3'} text-green-600`}>•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className={`text-xl font-semibold text-gray-800 mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.features}</h3>
              <ul className={`space-y-2 text-gray-700 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {courseContent.featuresList.map((feature, index) => (
                  <li key={index} className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className={`${language === 'ar' ? 'ml-3' : 'mr-3'} text-green-600`}>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className={`text-xl font-semibold text-gray-800 mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.recommendedPackage}</h3>
              <p className={`text-lg text-green-700 font-medium mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.packageName}</p>
              {courseContent.packageNote && (
                <p className={`text-gray-600 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.packageNote}</p>
              )}
            </div>

            {/* German Reference Section - Only show when language is Arabic */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span>🇩🇪</span>
                  <span>German Version / النسخة الألمانية</span>
                </h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <p><strong>🇩🇪 Stufe 3: Lisan Mubin</strong></p>
                  <p><strong>Sprachliche Flüssigkeit und fortgeschrittenes Verständnis</strong></p>
                  <p><strong>❓ Was lernt der Schüler in dieser Stufe?</strong></p>
                  <p>Der Schüler erreicht sprachliche Flüssigkeit durch das Lesen anspruchsvoller Texte, Diskussionen, Analyse und gezielte Förderung in einer intensiven Lernumgebung.</p>
                  <p><strong>🎯 Was kann der Schüler nach Abschluss dieser Stufe?</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Sicheres Verstehen komplexer Texte.</li>
                    <li>• Flüssiger und selbstbewusster sprachlicher Ausdruck.</li>
                    <li>• Strukturierte mündliche und schriftliche Kommunikation.</li>
                    <li>• Stärkung der sprachlichen Identität.</li>
                  </ul>
                  <p><strong>⭐ Vorteile:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Sehr kleine Gruppen mit maximal 3 Teilnehmern.</li>
                    <li>• Individuelles Coaching für jeden Schüler.</li>
                    <li>• Persönliche Lernstandsanalyse.</li>
                    <li>• Individueller Entwicklungsplan.</li>
                    <li>• Kontinuierliche persönliche Betreuung.</li>
                    <li>• Optionales fortgeschrittenes Lehrbuch.</li>
                  </ul>
                  <p><strong>📦 Empfohlenes Paket:</strong></p>
                  <p>Mastery-Paket</p>
                </div>
              </div>
          </div>

          {/* Course Level Badge */}
          <div className="text-center mb-12">
            <span className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
              Level 4
            </span>
          </div>
        </div>
      </div>

      {/* Online Lessons Section */}
      <OnlineLessonsSection />
    </div>
  );
}
