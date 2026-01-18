'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';
import { CourseModal } from '@/components/CourseModal';

export default function Courses2Page() {
  const { t, isRTL } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      title: t.home.courses.a2,
      description: t.courses.levels.a1.description,
      level: 'A1',
      image: '/Courses photos/Gemini_Generated_Image_e0edtbe0edtbe0ed.png'
    },
    {
      title: t.home.courses.a2,
      description: t.courses.levels.a2.description,
      level: 'A2',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop'
    },
    {
      title: t.home.courses.a2,
      description: t.courses.levels.b1.description,
      level: 'B1',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop'
    },
    {
      title: t.home.courses.a2,
      description: t.courses.levels.b2.description,
      level: 'B2',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            {t.home.courses.a2}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.courses.description}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => setIsModalOpen(true)}
              className={`bg-gradient-to-br from-white via-gray-50 to-green-50/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100/50 hover:border-green-300/50 backdrop-blur-sm cursor-pointer ${isRTL ? 'text-right' : 'text-left'}`}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 border-b border-green-200/40">
                <Image
                  src={course.image}
                  alt={`${course.title} course`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-600/70 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-lg">{course.level}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <CourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
