'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { OnlineLessonsSection } from '@/components/OnlineLessonsSection';

export default function Courses2Page() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Course Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.home.courses.a2}
            </h1>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          {/* Course Image */}
          <div className="mb-12">
            <img
              src="/Courses photos/Gemini_Generated_Image_i6j71ei6j71ei6j7.png"
              alt={t.home.courses.a2}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Course Description */}
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-12 ${language === 'ar' ? 'rtl' : ''}`}>
            <p className={`text-lg text-gray-700 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t.courses.levels.a2.description}
            </p>
          </div>

          {/* Course Level Badge */}
          <div className="text-center">
            <span className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold">
              Level 2
            </span>
          </div>
        </div>
      </div>

      {/* Online Lessons Section */}
      <OnlineLessonsSection />
    </div>
  );
}
