'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesPage() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      title: t.services.online.title,
      description: t.services.online.description,
      features: [
        'Interactive live classes',
        'Flexible scheduling',
        'Experienced native teachers',
        'Small group sizes',
        'Modern learning materials'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t.services.offline.title,
      description: t.services.offline.description,
      features: [
        'Face-to-face interaction',
        'Modern classroom facilities',
        'Group activities and discussions',
        'Direct teacher feedback',
        'Networking opportunities'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t.services.vip.title,
      description: t.services.vip.description,
      features: [
        'One-on-one instruction',
        'Teacher visits your location',
        'Personalized curriculum',
        'Flexible timing',
        'Intensive learning progress'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            {t.services.title}
          </h1>
        </div>

        <div className={`space-y-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${isRTL ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                {/* Icon and Title Section */}
                <div className={`p-8 lg:p-12 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 ${isRTL ? 'ml-auto' : ''}`}>
                    <div className="text-green-600">
                      {service.icon}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-green-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>

                {/* Features Section */}
                <div className="bg-green-50 p-8 lg:p-12">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
