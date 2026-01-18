'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { OnlineLessonsSection } from './OnlineLessonsSection';
import { HomeVisitSection } from './HomeVisitSection';

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CourseModal({ isOpen, onClose }: CourseModalProps) {
  const { isRTL } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${isRTL ? 'left-4 right-auto' : ''}`}
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[90vh]">
          <div className="p-6 sm:p-8">
            {/* Online Lessons Section */}
            <div className="mb-12">
              <OnlineLessonsSection />
            </div>
            
            {/* Home Visit Section */}
            <div>
              <HomeVisitSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
