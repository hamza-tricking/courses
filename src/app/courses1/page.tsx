'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { OnlineLessonsSection } from '@/components/OnlineLessonsSection';

export default function Courses1Page() {
  const { t, language } = useLanguage();

  const courseContent = {
    title: language === 'ar' ? 'المستوى الأول: لسان الضاد' : language === 'de' ? 'Stufe 1: Lisan Al-Dhad' : 'Level 1: Lisan Al-Dhad',
    subtitle: language === 'ar' ? 'التأسيس اللغوي الصحيح من البداية' : language === 'de' ? 'Solide sprachliche Grundlagen' : 'Solid Language Foundations',
    description: language === 'ar' 
      ? 'يتعلم الطالب أساسيات اللغة العربية من الصفر، مع التركيز على النطق الصحيح للحروف من مخارجها السليمة، والقراءة الواعية للكلمات المشكولة، من خلال أساليب تعلم نشط وتفاعلي تكسر ملل الدروس الأونلاين.'
      : language === 'de'
      ? 'Der Schüler erlernt die Grundlagen der arabischen Sprache von Anfang an, mit Fokus auf korrekte Aussprache, bewusstes Lesen vokalisierter Wörter und aktives Lernen durch interaktive Methoden im Online-Unterricht.'
      : 'The student learns basics of Arabic from scratch, focusing on correct pronunciation of letters from their proper articulation points, conscious reading of vocalized words, through active and interactive learning methods that break the monotony of online lessons.',
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
      'نطق الحروف العربية نطقًا صحيحًا.',
      'قراءة الكلمات المشكولة بثقة.',
      'الربط بين الصوت والشكل الكتابي.',
      'التعامل مع العربية دون خوف أو تردد.'
    ] : language === 'de' ? [
      'Korrekte Aussprache der arabischen Buchstaben.',
      'Sicheres Lesen vokalisierter Wörter.',
      'Verbindung von Laut und Schrift.',
      'Selbstbewusster Umgang mit der Sprache.'
    ] : [
      'Correct pronunciation of Arabic letters.',
      'Confident reading of vocalized words.',
      'Connection between sound and written form.',
      'Confident handling of Arabic without fear or hesitation.'
    ],
    features: language === 'ar' ? '⭐ ميزات المستوى:' : language === 'de' ? '⭐ Vorteile:' : '⭐ Features:',
    featuresList: language === 'ar' ? [
      'تعلم تفاعلي قائم على اللعب والمشاركة.',
      'أنشطة بصرية وصوتية مناسبة للأطفال.',
      'تطبيق ذكي للمراجعة المنزلية.',
      'كتاب ورقي اختياري لدعم التعلم.',
      'مجموعات صغيرة بحد أقصى 6 طلاب لضمان التفاعل.',
      'تقييم دوري لتقدم كل طالب.'
    ] : language === 'de' ? [
      'Interaktiver, spielerischer Unterricht.',
      'Visuelle und auditive Lernmethoden.',
      'Lern-App zur Wiederholung.',
      'Optionales gedrucktes Lehrbuch.',
      'Kleine Gruppen mit maximal 6 Teilnehmern.',
      'Regelmäßige Lernstandsanalyse.'
    ] : [
      'Interactive, play-based learning.',
      'Visual and auditory learning activities.',
      'Smart app for home review.',
      'Optional printed workbook.',
      'Small groups with maximum 6 students.',
      'Regular progress assessment.'
    ],
    recommendedPackage: language === 'ar' ? '📦 الباقة الأنسب لهذا المستوى:' : language === 'de' ? '📦 Empfohlenes Paket:' : '📦 Recommended Package:',
    packageName: language === 'ar' ? 'باقة الانطلاق (Start-Paket)' : language === 'de' ? 'Start-Paket' : 'Start Package',
    packageNote: language === 'ar' 
      ? 'ويمكن اختيار باقة التقدّم لتحقيق نتائج أسرع.'
      : language === 'de'
      ? 'Alternativ: Progress-Paket für schnelleren Fortschritt.'
      : 'Alternatively: Progress Package for faster results.'
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
                src="/Courses photos/Gemini_Generated_Image_e0edtbe0edtbe0ed.png"
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
                  <li key={index} className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <span className={`${language === 'ar' ? 'ml-3' : 'mr-3'} text-green-600 inline-block`}>•</span>
                    <span className="inline-block">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className={`text-xl font-semibold text-gray-800 mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.features}</h3>
              <ul className={`space-y-2 text-gray-700 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {courseContent.featuresList.map((feature, index) => (
                  <li key={index} className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <span className={`${language === 'ar' ? 'ml-3' : 'mr-3'} text-green-600 inline-block`}>•</span>
                    <span className="inline-block">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className={`text-xl font-semibold text-gray-800 mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.recommendedPackage}</h3>
              <p className={`text-lg text-green-700 font-medium mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.packageName}</p>
              <p className={`text-gray-600 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.packageNote}</p>
            </div>

            {/* German Reference Section - Only show when language is Arabic */}

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span>🇩🇪</span>
                  <span>German Version / النسخة الألمانية</span>
                </h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <p><strong>🇩🇪 Stufe 1: Lisan Al-Dhad</strong></p>
                  <p><strong>Solide sprachliche Grundlagen</strong></p>
                  <p><strong>❓ Was lernt der Schüler in dieser Stufe?</strong></p>
                  <p>Der Schüler erlernt die Grundlagen der arabischen Sprache von Anfang an, mit Fokus auf korrekte Aussprache, bewusstes Lesen vokalisierter Wörter und aktives Lernen durch interaktive Methoden im Online-Unterricht.</p>
                  <p><strong>🎯 Was kann der Schüler nach Abschluss dieser Stufe?</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Korrekte Aussprache der arabischen Buchstaben.</li>
                    <li>• Sicheres Lesen vokalisierter Wörter.</li>
                    <li>• Verbindung von Laut und Schrift.</li>
                    <li>• Selbstbewusster Umgang mit der Sprache.</li>
                  </ul>
                  <p><strong>⭐ Vorteile:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Interaktiver, spielerischer Unterricht.</li>
                    <li>• Visuelle und auditive Lernmethoden.</li>
                    <li>• Lern-App zur Wiederholung.</li>
                    <li>• Optionales gedrucktes Lehrbuch.</li>
                    <li>• Kleine Gruppen mit maximal 6 Teilnehmern.</li>
                    <li>• Regelmäßige Lernstandsanalyse.</li>
                  </ul>
                  <p><strong>📦 Empfohlenes Paket:</strong></p>
                  <p>Start-Paket</p>
                  <p>Alternativ: Progress-Paket für schnelleren Fortschritt.</p>
                </div>
              </div>

          </div>

          {/* Course Level Badge */}
          <div className="text-center mb-12">
            <span className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
              Level 1
            </span>
          </div>
        </div>
      </div>

      {/* Online Lessons Section */}
      <OnlineLessonsSection />
    </div>
  );
}
