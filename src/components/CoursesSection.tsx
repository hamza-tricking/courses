'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { CourseCard } from './CourseCard';
import Link from 'next/link';

export function CoursesSection() {
  const { t, isRTL, language } = useLanguage();
  const pathname = usePathname();
  const isCoursesPage = pathname === '/courses';

  const courses = [
    {
      title: language === 'ar' ? 'المستوى الأول: لسان الضاد' : language === 'de' ? 'Stufe 1: Lisan Al-Dhad' : 'Level 1: Lisan Al-Dhad',
      subtitle: language === 'ar' ? 'التأسيس اللغوي الصحيح من البداية' : language === 'de' ? 'Solide sprachliche Grundlagen' : 'Solid Language Foundations',
      description: language === 'ar' 
        ? 'يتعلم الطالب أساسيات اللغة العربية من الصفر، مع التركيز على النطق الصحيح للحروف من مخارجها السليمة، والقراءة الواعية للكلمات المشكولة، من خلال أساليب تعلم نشط وتفاعلي تكسر ملل الدروس الأونلاين.'
        : language === 'de'
        ? 'Der Schüler erlernt die Grundlagen der arabischen Sprache von Anfang an, mit Fokus auf korrekte Aussprache, bewusstes Lesen vokalisierter Wörter und aktives Lernen durch interaktive Methoden im Online-Unterricht.'
        : 'The student learns the basics of Arabic from scratch, focusing on correct pronunciation of letters from their proper articulation points, conscious reading of vocalized words, through active and interactive learning methods that break the monotony of online lessons.',
      whatLearn: language === 'ar' 
        ? '❓ ماذا يتعلم الطالب في هذا المستوى؟'
        : language === 'de'
        ? '❓ Was lernt der Schüler in dieser Stufe?'
        : '❓ What does the student learn in this level?',
      willBeAble: language === 'ar'
        ? '🎯 ماذا سيكون الطالب قادرًا عليه بعد إتمام المستوى؟'
        : language === 'de'
        ? '🎯 Was kann der Schüler nach Abschluss dieser Stufe?'
        : '🎯 What will the student be able to do after completing the level?',
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
        : 'Alternatively: Progress Package for faster results.',
      level: '1',
      image: '/Courses photos/Gemini_Generated_Image_e0edtbe0edtbe0ed.png',
      href: '/courses1',
      detailed: true
    },
    {
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
        : 'And Mastery Package for serious students seeking higher proficiency.',
      level: '2',
      image: '/Courses photos/Gemini_Generated_Image_ppr7yzppr7yzppr7.png',
      href: '/courses3',
      detailed: true
    },
     {
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
        : 'For advanced students seeking mastery of Arabic language.',
      level: '3',
      image: '/Courses photos/imagess 14.png',
      href: '/courses4',
      detailed: true
    },
    {
      title: language === 'ar' ? 'كورس القاعدة النورانية' : language === 'de' ? 'Kurs der Grundbuchstaben' : 'Basic Letters Course',
      description: language === 'ar' 
        ? 'كورس اللغة العربية التمهيدي لتعلم أساسيات القراءة والكتابة.'
        : language === 'de'
        ? 'Grundkurs für arabische Spracheinsteigerung im Lesen und Schreiben.'
        : 'Basic course for learning Arabic reading and writing fundamentals.',
      level: '4',
      image: '/Courses photos/Gemini_Generated_Image_i6j71ei6j71ei6j7.png',
      href: '/courses2'
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(34, 197, 94, 0.1) 35px, rgba(34, 197, 94, 0.1) 70px)`,
          animation: 'slide 20s linear infinite'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-6 sm:mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h2 className="text-2xl p-2 sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent">
            {t.home.courses.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.courses.description}
          </p>
        </div>

        {/* Mobile: Compact Horizontal Scroll */}
        <div className="sm:hidden mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {courses.map((course, index) => (
              <div key={index} className="flex-none w-72">
                <CourseCard
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  level={course.level}
                  isRTL={isRTL}
                  compact={true}
                  href={course.href}
                  detailed={course.detailed}
                  subtitle={course.subtitle}
                  whatLearn={course.whatLearn}
                  willBeAble={course.willBeAble}
                  outcomes={course.outcomes}
                  features={course.features}
                  featuresList={course.featuresList}
                  recommendedPackage={course.recommendedPackage}
                  packageName={course.packageName}
                  packageNote={course.packageNote}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet and Desktop: Grid Layout */}
        <div className={`hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
              level={course.level}
              isRTL={isRTL}
              compact={false}
              href={course.href}
              detailed={course.detailed}
              subtitle={course.subtitle}
              whatLearn={course.whatLearn}
              willBeAble={course.willBeAble}
              outcomes={course.outcomes}
              features={course.features}
              featuresList={course.featuresList}
              recommendedPackage={course.recommendedPackage}
              packageName={course.packageName}
              packageNote={course.packageNote}
            />
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-12">
          {!isCoursesPage && (
            <Link href={'/courses'} className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 border border-green-400/30 text-sm sm:text-base">
              {language === 'ar' ? 'عرض جميع الكورسات' : language === 'de' ? 'Alle Kurse anzeigen' : 'View All Courses'}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
