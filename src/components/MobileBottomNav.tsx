'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, BookOpen, Users, Phone, Menu } from 'lucide-react';
import { useState } from 'react';

export function MobileBottomNav() {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    {
      id: 'home',
      href: '/',
      icon: Home,
      label: t.navigation.home
    },
    {
      id: 'courses',
      href: '/courses',
      icon: BookOpen,
      label: t.navigation.courses
    },
    {
      id: 'about',
      href: '/about',
      icon: Users,
      label: t.navigation.about
    },
    {
      id: 'contact',
      href: '/contact',
      icon: Phone,
      label: t.navigation.contact
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-30">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex flex-col items-center justify-center 
                px-3 py-2 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-500 hover:text-green-600 hover:bg-gray-50'
                }
              `}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
