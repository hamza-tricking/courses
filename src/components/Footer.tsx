'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, Music, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(34, 197, 94, 0.1) 35px, rgba(34, 197, 94, 0.1) 70px)`,
            animation: 'slide 30s linear infinite'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-400 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-teal-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* About Section */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                    {t.footer.about}
                  </h3>
                  <p className="text-green-100/80 text-sm leading-relaxed mb-4">
                    {t.footer.aboutText}
                  </p>
                  <div className="flex items-center space-x-2 text-green-200/60 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>Berlin, Germany</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/courses" className="flex items-center space-x-2 text-green-100/80 hover:text-emerald-200 transition-all duration-300 group/link">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full transform scale-0 group-hover/link:scale-100 transition-transform duration-300"></span>
                        <span>{t.navigation.courses}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="flex items-center space-x-2 text-green-100/80 hover:text-emerald-200 transition-all duration-300 group/link">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full transform scale-0 group-hover/link:scale-100 transition-transform duration-300"></span>
                        <span>{t.navigation.services}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="flex items-center space-x-2 text-green-100/80 hover:text-emerald-200 transition-all duration-300 group/link">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full transform scale-0 group-hover/link:scale-100 transition-transform duration-300"></span>
                        <span>{t.navigation.about}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="flex items-center space-x-2 text-green-100/80 hover:text-emerald-200 transition-all duration-300 group/link">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full transform scale-0 group-hover/link:scale-100 transition-transform duration-300"></span>
                        <span>{t.navigation.contact}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-green-100/80 hover:text-teal-200 transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">info@lisanakademie.de</span>
                    </div>
                    <div className="flex items-center space-x-3 text-green-100/80 hover:text-teal-200 transition-colors duration-300">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+49 30 12345678</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    {t.footer.followUs}
                  </h3>
                  <div className="flex justify-center gap-3 mb-4">
                    <a 
                      href="https://www.instagram.com/lisanakademie" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/social relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                        <Instagram className="w-4 h-4 text-white" />
                      </div>
                    </a>
                    <a 
                      href="https://www.facebook.com/lisanakademie" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/social relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                        <Facebook className="w-4 h-4 text-white" />
                      </div>
                    </a>
                    <a 
                      href="https://www.tiktok.com/@lisanakademie" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/social relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                        <Music className="w-4 h-4 text-white" />
                      </div>
                    </a>
                  </div>
                  <p className="text-green-100/60 text-xs leading-relaxed">
                    {t.footer.socialMediaText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-green-200/60 text-sm">
                © 2025 Lisanakademie. {t.footer.rights}
              </p>
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-green-200/60 hover:text-green-200 text-sm transition-colors duration-300">
                  {t.footer.privacy}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-22 left-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
}
