'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { CourseCard } from '@/components/CourseCard';

export default function CoursesPage() {
  const { t, isRTL } = useLanguage();

  const courses = [
    {
      title: t.courses.levels.a1.title,
      description: t.courses.levels.a1.description,
      level: 'A1',
      image: '/course-a1.jpg'
    },
    {
      title: t.courses.levels.a2.title,
      description: t.courses.levels.a2.description,
      level: 'A2',
      image: '/course-a2.jpg'
    },
    {
      title: t.courses.levels.b1.title,
      description: t.courses.levels.b1.description,
      level: 'B1',
      image: '/course-b1.jpg'
    },
    {
      title: t.courses.levels.b2.title,
      description: t.courses.levels.b2.description,
      level: 'B2',
      image: '/course-b2.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            {t.courses.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.courses.description}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
              level={course.level}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
