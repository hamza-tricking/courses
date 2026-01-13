'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  level: string;
  isRTL?: boolean;
  compact?: boolean;
}

export function CourseCard({ title, description, image, level, isRTL = false, compact = false }: CourseCardProps) {
  const { t } = useLanguage();
  
  if (compact) {
    // Mobile compact version
    return (
      <Link href="/courses" className="block group">
        <div className={`bg-gradient-to-br from-white via-gray-50 to-green-50/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100/50 hover:border-green-300/50 backdrop-blur-sm ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Compact Image */}
          <div className="relative h-32 bg-gradient-to-br from-green-100 to-green-200 border-b border-green-200/40">
            <Image
              src={image}
              alt={`${title} course`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-12 h-12 bg-green-600/70 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-sm">{level}</span>
              </div>
            </div>
          </div>

          {/* Compact Content */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-green-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-1">
              {title}
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
              {description}
            </p>
            <div className="flex items-center text-green-600 font-medium text-xs group-hover:text-green-700">
              <span>{t.common.learnMore}</span>
              <svg className={`w-3 h-3 ml-1 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  // Original version for tablet and desktop
  return (
    <Link href="/courses" className="block group">
      <div className={`bg-gradient-to-br from-white via-gray-50 to-green-50/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100/50 hover:border-green-300/50 backdrop-blur-sm ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 border-b border-green-200/40">
          <Image
            src={image}
            alt={`${title} course`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-16 h-16 bg-green-600/70 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold text-lg">{level}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3 group-hover:text-green-700 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex items-center text-green-600 font-medium text-sm group-hover:text-green-700">
            <span>{t.common.learnMore}</span>
            <svg className={`w-4 h-4 ml-1 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
