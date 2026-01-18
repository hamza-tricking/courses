'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { CourseCard } from './CourseCard';

export function CoursesSection() {
  const { t, isRTL } = useLanguage();

  const courses = [
    {
      title: t.home.courses.a1,
      description: t.courses.levels.a1.description,
      level: 'A1',
      image: '/Courses photos/Gemini_Generated_Image_e0edtbe0edtbe0ed.png',
      href: '/courses'
    },
    {
      title: t.home.courses.a2,
      description: t.courses.levels.a2.description,
      level: 'A2',
      image: '/Courses photos/Gemini_Generated_Image_i6j71ei6j71ei6j7.png',
      href: '/courses2'
    },
    {
      title: t.home.courses.b1,
      description: t.courses.levels.b1.description,
      level: 'B1',
      image: '/Courses photos/Gemini_Generated_Image_ppr7yzppr7yzppr7.png',
      href: '/courses3'
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
            />
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-12">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 border border-green-400/30 text-sm sm:text-base">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
