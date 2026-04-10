'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { OnlineLessonsSection } from '@/components/OnlineLessonsSection';

export default function Courses3Page() {
  const { t, language } = useLanguage();

  const courseContent = {
    title: language === 'ar' ? 'لسان العرب' : language === 'de' ? 'Lisan Al-Arab' : 'Lisan Al-Arab',
    subtitle: language === 'ar' ? 'التواصل وبناء الجمل بثقة' : language === 'de' ? 'Kommunikation und sichere Satzbildung' : 'Communication and Confident Sentence Building',
    description: language === 'ar' 
      ? 'ينتقل الطالب إلى استخدام اللغة في الحوار والتواصل اليومي، وبناء الجمل الصحيحة، والتعبير عن أفكاره، من خلال مواقف حياتية وتمثيل أدوار وأساليب تعلم نشط تشجّع المشاركة.'
      : language === 'de'
      ? 'Der Fokus liegt auf aktiver Kommunikation, Satzbildung und Anwendung der Sprache in Alltagssituationen durch dialogorientierten und interaktiven Unterricht.'
      : 'The student progresses to using the language in daily dialogue and communication, building correct sentences, and expressing ideas through life situations and role-playing with active learning methods that encourage participation.',
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
      'التحدث باللغة العربية دون تردد.',
      'تكوين جمل سليمة ومفهومة.',
      'فهم نصوص بسيطة ومتوسطة.',
      'استخدام العربية في مواقف الحياة اليومية.'
    ] : language === 'de' ? [
      'Flüssiges Sprechen ohne Hemmungen.',
      'Bildung korrekter Sätze.',
      'Verständnis einfacher bis mittlerer Texte.',
      'Aktive Anwendung der Sprache im Alltag.'
    ] : [
      'Speaking Arabic fluently without hesitation.',
      'Forming correct and understandable sentences.',
      'Understanding simple and intermediate texts.',
      'Using Arabic in daily life situations.'
    ],
    features: language === 'ar' ? '⭐ ميزات المستوى:' : language === 'de' ? '⭐ Vorteile:' : '⭐ Features:',
    featuresList: language === 'ar' ? [
      'تعلم قائم على الحوار والتفاعل.',
      'تمثيل أدوار ومواقف واقعية.',
      'كتاب ورقي اختياري شامل.',
      'واجبات منزلية موجهة.',
      'مجموعات صغيرة بحد أقصى 6 طلاب.',
      'تقارير متابعة دورية للأهل.'
    ] : language === 'de' ? [
      'Dialogbasierter Unterricht.',
      'Rollenspiele und reale Alltagssituationen.',
      'Optionales umfassendes Lehrbuch.',
      'Gezielte Hausaufgaben.',
      'Kleine Gruppen mit maximal 6 Teilnehmern.',
      'Regelmäßige Fortschrittsberichte.'
    ] : [
      'Dialogue-based learning.',
      'Role-playing and real-life situations.',
      'Optional comprehensive workbook.',
      'Targeted homework assignments.',
      'Small groups with maximum 6 students.',
      'Regular progress reports for parents.'
    ],
    recommendedPackage: language === 'ar' ? '📦 الباقة الأنسب لهذا المستوى:' : language === 'de' ? '📦 Empfohlenes Paket:' : '📦 Recommended Package:',
    packageName: language === 'ar' ? 'باقة التقدّم (Progress-Paket)' : language === 'de' ? 'Progress-Paket' : 'Progress Package',
    packageNote: language === 'ar' 
      ? 'وباقة الإتقان للطلاب الجادين الباحثين عن طلاقة أعلى.'
      : language === 'de'
      ? 'Optional: Mastery-Paket für intensive Förderung.'
      : 'And Mastery Package for serious students seeking higher proficiency.'
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
                src="/Courses photos/Gemini_Generated_Image_ppr7yzppr7yzppr7.png"
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
              <p className={`text-gray-600 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{courseContent.packageNote}</p>
            </div>

            {/* German Reference Section - Only show when language is Arabic */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span>🇩🇪</span>
                  <span>German Version / النسخة الألمانية</span>
                </h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <p><strong>🇩🇪 Stufe 2: Lisan Al-Arab</strong></p>
                  <p><strong>Kommunikation und sichere Satzbildung</strong></p>
                  <p><strong>❓ Was lernt der Schüler in dieser Stufe?</strong></p>
                  <p>Der Fokus liegt auf aktiver Kommunikation, Satzbildung und Anwendung der Sprache in Alltagssituationen durch dialogorientierten und interaktiven Unterricht.</p>
                  <p><strong>🎯 Was kann der Schüler nach Abschluss dieser Stufe?</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Flüssiges Sprechen ohne Hemmungen.</li>
                    <li>• Bildung korrekter Sätze.</li>
                    <li>• Verständnis einfacher bis mittlerer Texte.</li>
                    <li>• Aktive Anwendung der Sprache im Alltag.</li>
                  </ul>
                  <p><strong>⭐ Vorteile:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Dialogbasierter Unterricht.</li>
                    <li>• Rollenspiele und reale Alltagssituationen.</li>
                    <li>• Optionales umfassendes Lehrbuch.</li>
                    <li>• Gezielte Hausaufgaben.</li>
                    <li>• Kleine Gruppen mit maximal 6 Teilnehmern.</li>
                    <li>• Regelmäßige Fortschrittsberichte.</li>
                  </ul>
                  <p><strong>📦 Empfohlenes Paket:</strong></p>
                  <p>Progress-Paket</p>
                  <p>Optional: Mastery-Paket für intensive Förderung.</p>
                </div>
              </div>
          </div>

          {/* Course Level Badge */}
          <div className="text-center mb-12">
            <span className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
              Level 3
            </span>
          </div>
        </div>
      </div>

      {/* Online Lessons Section */}
      <OnlineLessonsSection />
    </div>
  );
}
