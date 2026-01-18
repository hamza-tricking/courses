'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const { t, isRTL, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const content = {
    ar: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك في رحلتك',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'رسالتك',
      submit: 'إرسال الرسالة',
      submitting: 'جاري الإرسال...',
      success: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
      close: 'إغلاق'
    },
    de: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Wir sind hier, um Sie auf Ihrer Reise zu unterstützen',
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      message: 'Ihre Nachricht',
      submit: 'Nachricht senden',
      submitting: 'Wird gesendet...',
      success: 'Ihre Nachricht wurde erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.',
      close: 'Schließen'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are here to help you on your journey',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Your Message',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Your message has been sent successfully! We will contact you soon.',
      close: 'Close'
    }
  };

  const currentContent = content[language] || content.en;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 bg-opacity-30 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className={`relative w-full max-w-md transform rounded-2xl bg-white p-6 shadow-xl transition-all ${isRTL ? 'rtl' : ''}`}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentContent.title}
                </h2>
                <p className="text-gray-600">
                  {currentContent.subtitle}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {currentContent.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={currentContent.name}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {currentContent.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={currentContent.email}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {currentContent.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={currentContent.phone}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {currentContent.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder={currentContent.message}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? currentContent.submitting : currentContent.submit}
                </button>
              </form>
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {currentContent.success}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
