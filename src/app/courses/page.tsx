'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';
import { CourseModal } from '@/components/CourseModal';
import { HomeVisitSection } from '@/components/HomeVisitSection';
import { CoursesSection } from '@/components/CoursesSection';

export default function CoursesPage() {
  const { t, isRTL } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      title: t.home.courses.a1,
      description: t.courses.levels.a1.description,
      level: 'A1',
      image: '/Courses photos/Gemini_Generated_Image_e0edtbe0edtbe0ed.png'
    },
    {
      title: t.home.courses.a1,
      description: t.courses.levels.a2.description,
      level: 'A2',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop'
    },
    {
      title: t.home.courses.a1,
      description: t.courses.levels.b1.description,
      level: 'B1',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop'
    },
    {
      title: t.home.courses.a1,
      description: t.courses.levels.b2.description,
      level: 'B2',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
        <CoursesSection />
      
      <HomeVisitSection />
      
      <CourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
