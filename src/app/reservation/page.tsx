'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ReservationPage() {
  const { t, isRTL, language } = useLanguage();
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const courses = [
    {
      id: 'a1',
      title: language === 'ar' ? 'لسان الضاد' : language === 'de' ? 'Lisan Al-Dhad' : 'Lisan Al-Dhad',
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
      id: 'a2',
      title: t.home.courses.a2,
      description: t.courses.levels.a2.description,
      level: '2',
      image: '/Courses photos/Gemini_Generated_Image_i6j71ei6j71ei6j7.png',
      href: '/courses2'
    },
    {
      id: 'b1',
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
        : '❓ What does the student learn in this level?',
      willBeAble: language === 'ar'
        ? '🎯 ماذا سيكون الطالب قادرًا عليه بعد إتمام المستوى؟'
        : language === 'de'
        ? '🎯 Was kann der Schüler nach Abschluss dieser Stufe?'
        : '🎯 What will the student be able to do after completing the level?',
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
      level: '3',
      image: '/Courses photos/Gemini_Generated_Image_ppr7yzppr7yzppr7.png',
      href: '/courses3',
      detailed: true
    },
    {
      id: 'b2',
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
        : '❓ What does the student learn in this level?',
      willBeAble: language === 'ar'
        ? '🎯 ماذا سيكون الطالب قادرًا عليه بعد إتمام المستوى؟'
        : language === 'de'
        ? '🎯 Was kann der Schüler nach Abschluss dieser Stufe?'
        : '🎯 What will the student be able to do after completing the level?',
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
      level: '4',
      image: '/Courses photos/imagess 14.png',
      href: '/courses4',
      detailed: true
    }
  ];

  const packages = [
    {
      id: 'start',
      name: language === 'ar' ? '🟢 باقة الانطلاق' : language === 'de' ? '🇩🇪 Start-Paket' : '🟢 Start Package',
      subtitle: language === 'ar' ? 'لبناء أساس لغوي متين' : language === 'de' ? 'Für einen soliden Einstieg' : 'For Building Solid Language Foundation',
      price: language === 'ar' ? '49,95 €' : language === 'de' ? '49,95 €' : '49,95 €',
      period: language === 'ar' ? 'حصتان أونلاين مباشر أسبوعيًا' : language === 'de' ? '2 Live-Online-Unterrichtseinheiten pro Woche' : '2 live online sessions weekly',
      stripeUrl: 'https://buy.stripe.com/9B68wPgtX0I6c3xfLacEw02',
      features: [
        language === 'ar' ? 'حصتان أونلاين مباشر أسبوعيًا' : language === 'de' ? '2 Live-Online-Unterrichtseinheiten pro Woche' : '2 live online sessions weekly',
        language === 'ar' ? 'تعلم تفاعلي لكسر ملل الأونلاين' : language === 'de' ? 'Interaktiver Unterricht' : 'Interactive learning',
        language === 'ar' ? 'مجموعات صغيرة (حتى 6 طلاب)' : language === 'de' ? 'Kleine Gruppen (max. 6 Teilnehmer)' : 'Small groups (max 6 students)',
        language === 'ar' ? 'تطبيق ذكي للمراجعة' : language === 'de' ? 'Lern-App zur Wiederholung' : 'Smart app for review',
        language === 'ar' ? 'تقييم دوري للتقدم' : language === 'de' ? 'Regelmäßige Lernstandskontrolle' : 'Regular progress assessment'
      ],
      highlighted: false,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'progress',
      name: language === 'ar' ? '🟡 باقة التقدّم' : language === 'de' ? '🇩🇪 Progress-Paket' : '🟡 Progress Package',
      subtitle: language === 'ar' ? 'لتطوير المهارات بشكل أسرع' : language === 'de' ? 'Für schnellen und nachhaltigen Lernfortschritt' : 'For Fast and Sustainable Progress',
      price: language === 'ar' ? '69,90 €' : language === 'de' ? '69,90 €' : '69,90 €',
      period: language === 'ar' ? '3 حصص أونلاين أسبوعيًا' : language === 'de' ? '3 Unterrichtseinheiten pro Woche' : '3 online sessions weekly',
      stripeUrl: 'https://buy.stripe.com/fZu3cvcdHduSebF1UkcEw03',
      features: [
        language === 'ar' ? '3 حصص أونلاين أسبوعيًا' : language === 'de' ? '3 Unterrichtseinheiten pro Woche' : '3 online sessions weekly',
        language === 'ar' ? 'تعلم نشط قائم على الحوار' : language === 'de' ? 'Kommunikativer, aktiver Unterricht' : 'Communication-based active learning',
        language === 'ar' ? 'مجموعات حتى 6 طلاب' : language === 'de' ? 'Gruppen mit max. 6 Teilnehmern' : 'Groups with max 6 students',
        language === 'ar' ? 'واجبات موجهة' : language === 'de' ? 'Gezielte Hausaufgaben' : 'Targeted homework',
        language === 'ar' ? 'تقارير متابعة دورية' : language === 'de' ? 'Regelmäßige Fortschrittsberichte' : 'Regular progress reports',
        language === 'ar' ? 'الكتب الورقية اختيارية' : language === 'de' ? 'Gedruckte Bücher optional erhältlich' : 'Printed books optionally available'
      ],
      highlighted: true,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'mastery',
      name: language === 'ar' ? '🔵 باقة الإتقان' : language === 'de' ? '🇩🇪 Mastery-Paket' : '🔵 Mastery Package',
      subtitle: language === 'ar' ? 'للوصول إلى الطلاقة والاحتراف' : language === 'de' ? 'Für Sprachsicherheit und höchste Lernziele' : 'For Language Proficiency and Highest Goals',
      price: language === 'ar' ? '89,95 €' : language === 'de' ? '89,95 €' : '89,95 €',
      period: language === 'ar' ? '4 حصص أونلاين أسبوعيًا' : language === 'de' ? '4 Unterrichtseinheiten pro Woche' : '4 online sessions weekly',
      stripeUrl: 'https://buy.stripe.com/5kQ3cv91v8ayffJ42scEw04',
      features: [
        language === 'ar' ? '4 حصص أونلاين أسبوعيًا' : language === 'de' ? '4 Unterrichtseinheiten pro Woche' : '4 online sessions weekly',
        language === 'ar' ? 'مجموعات مصغّرة (حتى 3 طلاب فقط)' : language === 'de' ? 'Sehr kleine Gruppen (max. 3 Teilnehmer)' : 'Very small groups (max 3 students only)',
        language === 'ar' ? 'Coaching فردي لكل طالب' : language === 'de' ? 'Individuelles Coaching pro Schüler' : 'Individual coaching for each student',
        language === 'ar' ? 'تشخيص ومتابعة شخصية مستمرة' : language === 'de' ? 'Persönliche Lernstandsanalyse' : 'Personal learning progress analysis',
        language === 'ar' ? 'خطة تطوير لغوية خاصة' : language === 'de' ? 'Individueller Lernentwicklungsplan' : 'Individual language development plan',
        language === 'ar' ? 'الكتب الورقية متوفرة اختياريًا' : language === 'de' ? 'Gedruckte Bücher optional erhältlich' : 'Printed books optionally available'
      ],
      highlighted: false,
      color: 'from-teal-500 to-green-600'
    }
  ];

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
  };

  const handleStripePayment = (packageId: string) => {
    const selectedPkg = packages.find(p => p.id === packageId);
    if (selectedPkg?.stripeUrl) {
      window.open(selectedPkg.stripeUrl, '_blank');
    }
  };

  interface Package {
    id: string;
    name: string;
    subtitle: string;
    price: string;
    period: string;
    features: string[];
    highlighted: boolean;
    color: string;
    stripeUrl: string;
    sessions?: string;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl py-2 sm:text-4xl font-bold bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent mb-4">
            {t.reservation?.title || 'الكورسات'}
          </h1>
          <p className="text-gray-600 text-lg">
            {t.reservation?.subtitle || 'اختر الباقة المناسبة لك واحجز وقتك المفضل'}
          </p>
        </div>

        {/* Package Selection */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">{t.reservation?.selectPackage || 'اختر الباقة:'}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-xl border-2 transition-all duration-300 ${
                  selectedPackage === pkg.id
                    ? 'border-green-500 bg-green-50 shadow-xl scale-105'
                    : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-lg'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {language === 'ar' ? 'الأكثر شيوعًا' : language === 'de' ? 'Beliebteste Wahl' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${pkg.color} text-white p-4 rounded-t-xl`}>
                  <h3 className="font-bold text-lg mb-1">{pkg.name}</h3>
                  <p className="text-green-100 text-sm">{pkg.subtitle}</p>
                </div>
                
                <div className="p-4">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">{pkg.price}</div>
                    <div className="text-sm text-gray-600">{pkg.period}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2">
                    <button
                      onClick={() => handlePackageSelect(pkg.id)}
                      className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        selectedPackage === pkg.id
                          ? 'bg-green-100 text-green-700 border-2 border-green-500'
                          : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      {selectedPackage === pkg.id
                        ? (language === 'ar' ? 'تم الاختيار' : language === 'de' ? 'Ausgewählt' : 'Selected')
                        : (language === 'ar' ? 'اختر هذه الباقة' : language === 'de' ? 'Dieses Paket wählen' : 'Select this package')
                      }
                    </button>
                    
                    {selectedPackage === pkg.id && (
                      <button
                        onClick={() => handleStripePayment(pkg.id)}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                      >
                        {language === 'ar' ? 'الدفع عبر سترايب' : language === 'de' ? 'Mit Stripe bezahlen' : 'Pay with Stripe'}
                      </button>
                    )}
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    {t.common?.taxNotice || 'The invoice amount does not include VAT according to § 19 UStG.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
