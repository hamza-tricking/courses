'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t, isRTL, language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Get all form data from DOM
      const form = formRef.current;
      if (!form) return;
      
      const formData = new FormData(form);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;
      
      // Create a single message string with all information
      const messageContent = `
Contact Form Submission:

Personal Information:
- Name: ${name}
- Email: ${email}

Message:
${message}
      `.trim();

      // Send formatted message using emailjs.send
      await emailjs.send(
        "service_8wtdizb",      // Service ID
        "template_ulrw044",     // Template ID
        {
          to_email: "laaakademie@gmail.com",
          subject: `Contact Message from ${name}`,
          message: messageContent,
          reply_to: email
        },
        "N6FeQ45lY6cUjYR94"    // Public Key
      );

      setStatus("Message sent successfully!");
      setShowModal(true);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("Failed to send message.");
    }
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  const getSuccessMessage = () => {
    switch (language) {
      case 'de':
        return 'Vielen Dank für deine Nachricht! Wir haben deine Anfrage erhalten und melden uns schnellstmöglich bei dir zurück.';
      case 'ar':
        return 'شكراً لك على رسالتك! لقد استلمنا طلبك وسنتواصل معك في أقرب وقت ممكن.';
      default:
        return 'Thank you for your message! We have received your request and will get back to you as soon as possible.';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            {t.contact.title}
          </h1>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Contact Form */}
          <div className={`bg-white rounded-xl shadow-lg p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              {t.contact.title}
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder={t.contact.form.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder={t.contact.form.email}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                  placeholder={t.contact.form.message}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
                disabled={status === "Sending..."}
              >
                {status === "Sending..." ? "Sending..." : t.contact.form.submit}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.contact.email}</h4>
                    <p className="text-gray-600">info@lisanakademie.de</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.contact.phone}</h4>
                    <p className="text-gray-600">004915208532660</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.contact.address}</h4>
                    <p className="text-gray-600">Ebersbach an der Fils, Germany</p>
                  </div>
                </div>
              </div>
            </div>

      
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100">
            <div className="text-center">
              {/* Success Icon */}
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === 'de' ? 'Vielen Dank!' : language === 'ar' ? 'شكراً جزيلاً!' : 'Thank You!'}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {getSuccessMessage()}
              </p>
              
              <button
                onClick={closeModal}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                {language === 'de' ? 'Schließen' : language === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
