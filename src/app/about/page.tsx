'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            {t.about.title}
          </h1>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Mission */}
          <div className={`bg-white rounded-xl shadow-lg p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              {t.about.mission}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t.about.missionText}
            </p>
          </div>

          {/* Vision */}
          <div className={`bg-white rounded-xl shadow-lg p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              {t.about.vision}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t.about.visionText}
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {t.about.founder}
                </h3>
                <p className="text-green-700">
                  {t.about.founderTitle}
                </p>
              </div>
            </div>
            <div className={`p-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                {t.about.meetFounder}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t.about.founderText1}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t.about.founderText2}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.about.founderText3}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {[
              { number: '500+', label: t.about.students },
              { number: '15+', label: t.about.yearsExperience },
              { number: '4.8', label: t.about.averageRating },
              { number: '98%', label: t.about.successRate }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
