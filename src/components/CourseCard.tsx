'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  level: string;
  isRTL?: boolean;
  compact?: boolean;
  href?: string;
  detailed?: boolean;
  subtitle?: string;
  whatLearn?: string;
  willBeAble?: string;
  outcomes?: string[];
  features?: string;
  featuresList?: string[];
  recommendedPackage?: string;
  packageName?: string;
  packageNote?: string;
}

export function CourseCard({ 
  title, 
  description, 
  image, 
  level, 
  isRTL = false, 
  compact = false, 
  href = "/courses",
  detailed = false,
  subtitle,
  whatLearn,
  willBeAble,
  outcomes,
  features,
  featuresList,
  recommendedPackage,
  packageName,
  packageNote
}: CourseCardProps) {
  const { t, language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (detailed && !compact) {
    // Detailed version for the first course
    return (
      <Link href={href} className="block group">
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

          {/* Detailed Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-2 group-hover:text-green-700 transition-colors">
              {title}
            </h3>
            {subtitle && (
              <p className="text-gray-700 font-medium mb-4">{subtitle}</p>
            )}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {description}
            </p>
            
            {/* Collapsible Content */}
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
              {whatLearn && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{whatLearn}</h4>
                </div>
              )}
              
              {willBeAble && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{willBeAble}</h4>
                  {outcomes && (
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              
              {features && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{features}</h4>
                  {featuresList && (
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {featuresList.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              
              {recommendedPackage && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{recommendedPackage}</h4>
                  <p className="text-green-700 font-medium text-sm">{packageName}</p>
                  {packageNote && (
                    <p className="text-gray-600 text-xs mt-1">{packageNote}</p>
                  )}
                </div>
              )}
            </div>
            
            {/* Show More/Less Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="w-full mt-4 py-2 px-4 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <span>{isExpanded ? (language === 'ar' ? 'عرض أقل' : language === 'de' ? 'Weniger anzeigen' : 'Show Less') : (language === 'ar' ? 'عرض المزيد' : language === 'de' ? 'Mehr anzeigen' : 'Show More')}</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
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
  
  if (compact) {
    // Mobile compact version
    return (
      <Link href={href} className="block group">
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
    <Link href={href} className="block group">
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
