'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname } from 'next/navigation';
import { Language } from '@/lib/languages';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [lessonsDropdownOpen, setLessonsDropdownOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    // Always apply the delay, but only animate on home page
    const timer = setTimeout(() => {
      if (pathname === '/') {
        setIsLoaded(true);
      } else {
        // For other pages, show header immediately after delay
        setIsLoaded(true);
      }
    }, 1100); // Keep the 1100ms delay

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [pathname]);

  const toggleLanguage = () => {
    const languages: Language[] = ['de', 'ar', 'en'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const navItems = [
    { href: '/', label: t.navigation.home },
    { href: '/courses', label: t.navigation.courses },
    { href: '/lessons', label: t.navigation.lessons, hasDropdown: true },
    { href: '/services', label: t.navigation.services, hasDropdown: true },
    { href: '/store', label: t.navigation.store },
    { href: '/about', label: t.navigation.about },
    { href: '/contact', label: t.navigation.contact }
  ];

  const dropdownItems = [
    { href: '/parent-training', label: t.navigation.parentTraining },
    { href: '/blog', label: t.navigation.blog }
  ];

  const lessonsDropdownItems = [
    { href: '/home-lessons', label: t.navigation.homeLessons },
    { href: '/private-lessons', label: t.navigation.privateLessons }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6">
      <header 
        className={`relative max-w-7xl w-full ${
          pathname === '/' 
            ? `transition-all duration-1000 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
              }`
            : isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-2xl"></div>
        <div className={`relative w-full h-full ${
          isScrolled 
            ? 'bg-white/40 backdrop-blur-xl shadow-2xl border-2 border-green-200/60 rounded-2xl' 
            : 'bg-white/10 backdrop-blur-lg shadow-xl border-2 border-green-300/50 rounded-2xl'
        }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/logoLaa - Copy.PNG"
                alt="Lisanakademie"
                width={50}
                height={50}
                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <span className="hidden sm:block text-sm font-bold text-green-800 group-hover:text-green-600 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 sm:text-base lg:text-lg mx-4">
                Lisan Al-Arabi Akademie
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center justify-center content-center space-x-8  ${isRTL ? 'space-x-reverse' : ''}`}>
              {navItems.map((item) => (
                <div key={item.href} className="relative mx-2 ">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => {
                        if (item.href === '/services') {
                          setServicesDropdownOpen(true);
                        } else if (item.href === '/lessons') {
                          setLessonsDropdownOpen(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (item.href === '/services') {
                          setServicesDropdownOpen(false);
                        } else if (item.href === '/lessons') {
                          setLessonsDropdownOpen(false);
                        }
                      }}
                    >
                      <button className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-semibold group py-2 px-3 rounded-lg hover:bg-[#E4EB9D] hover:shadow-md transform hover:-translate-y-0.5 text-sm">
                        {item.label}
                        <svg className="w-3 h-3 transform transition-transform duration-300 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-green-200/50 overflow-hidden transition-all duration-300 transform ${
                          (item.href === '/services' && servicesDropdownOpen) || (item.href === '/lessons' && lessonsDropdownOpen) 
                            ? 'opacity-100 translate-y-0 visible' 
                            : 'opacity-0 -translate-y-2 invisible'
                        } ${isRTL ? 'right-0 left-auto' : 'left-0 right-auto'}`}
                        onMouseEnter={() => {
                          if (item.href === '/services') {
                            setServicesDropdownOpen(true);
                          } else if (item.href === '/lessons') {
                            setLessonsDropdownOpen(true);
                          }
                        }}
                        onMouseLeave={() => {
                          if (item.href === '/services') {
                            setServicesDropdownOpen(false);
                          } else if (item.href === '/lessons') {
                            setLessonsDropdownOpen(false);
                          }
                        }}
                      >
                        <div className="py-2">
                          {(item.href === '/services' ? dropdownItems : lessonsDropdownItems).map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 text-xs font-normal"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-semibold group py-2 px-3 rounded-lg hover:bg-[#E4EB9D] hover:shadow-md transform hover:-translate-y-0.5 text-sm"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Switcher - Desktop */}
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 text-sm bg-gradient-to-r from-green-500/80 via-emerald-500/80 to-emerald-600/80 hover:from-green-600/85 hover:via-emerald-600/85 hover:to-emerald-700/85 text-white rounded-xl transition-all duration-300 font-semibold hover:shadow-xl hover:scale-105 border border-white/20 backdrop-blur-md relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile Right Section */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Language Switcher - Mobile */}
              <button
                onClick={toggleLanguage}
                className="px-2 py-1.5 text-xs bg-gradient-to-r from-green-500/80 via-emerald-500/80 to-emerald-600/80 hover:from-green-600/85 hover:via-emerald-600/85 hover:to-emerald-700/85 text-white rounded-xl transition-all duration-300 font-semibold hover:shadow-xl hover:scale-105 border border-white/20 backdrop-blur-md relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{language.toUpperCase()}</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-[#E4EB9D] transition-all duration-300 hover:scale-110 hover:shadow-md"
              >
                <svg className="w-5 h-5 text-gray-700 hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}>
            <nav className={`py-4 space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.href === '/services') {
                            setServicesDropdownOpen(!servicesDropdownOpen);
                          } else if (item.href === '/lessons') {
                            setLessonsDropdownOpen(!lessonsDropdownOpen);
                          }
                        }}
                        className={`w-full py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-[#E4EB9D] rounded-lg transition-all duration-300 font-semibold hover:translate-x-2 hover:shadow-md flex items-center justify-between ${
                          isRTL ? 'flex-row-reverse' : ''
                        }`}
                      >
                        {item.label}
                        <svg className="w-3 h-3 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mobile Dropdown */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        (item.href === '/services' && servicesDropdownOpen) || (item.href === '/lessons' && lessonsDropdownOpen) 
                          ? 'max-h-32 mt-2' 
                          : 'max-h-0'
                      }`}>
                        <div className="pl-4 space-y-2">
                          {(item.href === '/services' ? dropdownItems : lessonsDropdownItems).map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                if (item.href === '/services') {
                                  setServicesDropdownOpen(false);
                                } else if (item.href === '/lessons') {
                                  setLessonsDropdownOpen(false);
                                }
                              }}
                              className="block py-2 px-4 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 text-xs font-normal"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-[#E4EB9D] rounded-lg transition-all duration-300 font-semibold hover:translate-x-2 hover:shadow-md"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}
