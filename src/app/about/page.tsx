'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t, isRTL, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            {t.about.title}
          </h1>
        </div>

        {/* Arabic Mission & Vision Section */}
        {language === 'ar' && (
          <div className={`mb-16 ${isRTL ? 'rtl' : ''}`}>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-100">
              <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
                مهمتنا ورؤيتنا
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Arabic Mission */}
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    مهمتنا
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.about.missionText}
                  </p>
                </div>

                {/* Arabic Vision */}
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🔭</span>
                    رؤيتنا
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.about.visionText}
                  </p>
                </div>
              </div>

              {/* Founder Section */}
              <div className="border-t border-green-200 pt-8">
                <h3 className="text-2xl font-bold text-green-900 mb-8 text-center">
                  عن المؤسسين
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-green-900 mb-2">
                      المؤسس  
                    </h4>
                    <p className="text-green-700 font-medium">
                      الأستاذ فيصل لوري
                    </p>
                  </div>

                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h4 className="text-xl font-bold text-green-900 mb-4">
                      تعرّف على مؤسسنا
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t.about.founderText1}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t.about.founderText2}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t.about.founderText3}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      اليوم، تجسّد أكاديمية لسان العربي هذه القصة، وتسعى إلى تقديم نموذج تعليمي يجمع بين الخبرة التربوية، الفهم العملي، والتقنيات الحديثة، لمساعدة المتعلمين على التواصل بالعربية بثقة ووعي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* German Mission & Vision Section */}
        {language === 'de' && (
          <div className={`mb-16 ${isRTL ? 'rtl' : ''}`}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Unsere Mission und Vision
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* German Mission */}
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    Unsere Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.about.missionText}
                  </p>
                </div>

                {/* German Vision */}
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🔭</span>
                    Unsere Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.about.visionText}
                  </p>
                </div>
              </div>

              {/* German Founder Section */}
              <div className="border-t border-blue-200 pt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
                  Lernen Sie unseren Gründer kennen
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">
                      Gründer 
                    </h4>
                    <p className="text-blue-700 font-medium">
                      Fayssal Louri
                    </p>
                  </div>

                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h4 className="text-xl font-bold text-blue-900 mb-4">
                      Über unseren Gründer
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t.about.founderText1}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t.about.founderText2}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t.about.founderText3}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Heute steht die Lisan Al Arabi Akademie für diese Entwicklung und verfolgt das Ziel, Arabischunterricht modern, strukturiert und praxisorientiert zu gestalten – speziell für Nicht-Muttersprachler.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* English Mission & Vision Section */}
        {language === 'en' && (
          <div className={`mb-16 ${isRTL ? 'rtl' : ''}`}>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 border border-purple-100">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
                Our Mission and Vision
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* English Mission */}
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.about.missionText}
                  </p>
                </div>

                {/* English Vision */}
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🔭</span>
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.about.visionText}
                  </p>
                </div>
              </div>

              {/* English Founder Section */}
              <div className="border-t border-purple-200 pt-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-8 text-center">
                  Meet Our Founder
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-purple-900 mb-2">
                      Founder 
                    </h4>
                    <p className="text-purple-700 font-medium">
                      Fayssal Louri
                    </p>
                  </div>

                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h4 className="text-xl font-bold text-purple-900 mb-4">
                      About Our Founder
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t.about.founderText1}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t.about.founderText2}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t.about.founderText3}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Today, Lisan Al Arabi Academy represents this evolution and pursues the goal of providing Arabic instruction that is modern, structured, and practice-oriented - especially for non-native speakers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Our Commitment Section */}
        <div className={`mb-16 ${isRTL ? 'rtl' : ''}`}>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {language === 'ar' ? 'مهمتنا' : language === 'de' ? 'Unser Auftrag' : 'Our Commitment'}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-xl font-semibold mb-3">Deutsch</h4>
                <p className="leading-relaxed">
                  Hochwertigen Arabischunterricht anzubieten, der auf Interaktion, didaktischem Aufbau und praktischem Verständnis basiert und die individuellen Bedürfnisse der Lernenden aller Altersgruppen und Hintergründe berücksichtigt.
                </p>
                <p className="mt-3 italic">
                  Wir sind überzeugt: Die arabische Sprache ist mehr als nur Worte – sie ist Identität, Bedeutung und ein globales Kommunikationsmittel.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">English</h4>
                <p className="leading-relaxed">
                  To offer high-quality Arabic instruction based on interaction, didactic structure, and practical understanding, considering individual needs of learners of all ages and backgrounds.
                </p>
                <p className="mt-3 italic">
                  We are convinced: The Arabic language is more than just words - it is identity, meaning, and a global means of communication.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">العربية</h4>
                <p className="leading-relaxed">
                  تقديم تعليم عربي عالي الجودة يعتمد على التفاعل والبناء الديداكتي والفهم العملي، مع مراعاة الاحتياجات الفردية للمتعلمين من جميع الأعمار والخلفيات.
                </p>
                <p className="mt-3 italic">
                  نحن مقتنعون: اللغة العربية هي أكثر من مجرد كلمات - إنها هوية ومعنى ووسيلة اتصال عالمية.
                </p>
              </div>
            </div>
          </div>
        </div>

 

  
      </div>
    </div>
  );
}
