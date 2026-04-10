'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import emailjs from '@emailjs/browser';

export function BlogSection() {
  const { t, isRTL, language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentAge: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get all form data from DOM
      const form = formRef.current;
      if (!form) return;
      
      const formData = new FormData(form);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const studentAge = formData.get('studentAge') as string;
      const preferredTime = formData.get('preferredTime') as string;
      
      // Create a single message string with all information
      const messageContent = `
Trial Class Booking Details:

Personal Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Student Age: ${studentAge}

Preferred Time: ${preferredTime}

---
الاسم: ${name}
البريد الإلكتروني: ${email}
الهاتف: ${phone}
عمر الطالب: ${studentAge}
الوقت المفضل: ${preferredTime}
      `.trim();

      // Send formatted message using emailjs.send
      await emailjs.send(
        "service_8wtdizb",      // Service ID
        "template_ulrw044",     // Template ID
        {
          to_email: "laaakademie@gmail.com",
          subject: `Trial Class Booking from ${name}`,
          message: messageContent,
          reply_to: email
        },
        "N6FeQ45lY6cUjYR94"    // Public Key
      );

      // Show success modal
      setShowModal(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        studentAge: '',
        preferredTime: ''
      });
      
    } catch (error) {
      console.error("Failed to send trial class booking:", error);
      alert('Failed to send trial class booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getFlag = () => {
    switch (language) {
      case 'ar': return '🇸🇦';
      case 'de': return '🇩🇪';
      case 'en': return '🇬🇧';
      default: return '🇩🇪';
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-gray-100 via-green-50 to-emerald-100 text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(34, 197, 94, 0.05) 35px, rgba(34, 197, 94, 0.05) 70px)`,
          animation: 'slide 30s linear infinite'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 ${isRTL ? 'rtl' : ''}`}>
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="text-2xl">{getFlag()}</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent py-4">
              {t.trialClass.title}
            </h2>
          </div>
        </div>

        {/* Content and Form Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Text Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-emerald-700">{t.trialClass.subtitle}</h3>
            <p className="mb-4 text-gray-700">
              {t.trialClass.description}
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              {t.trialClass.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
            
            <h4 className="text-lg font-bold mb-3 text-emerald-700">{t.trialClass.whatIncludes}</h4>
            <p className="mb-3 text-gray-700">{t.trialClass.duration}</p>
            <ol className="space-y-2 mb-6 text-gray-700">
              {t.trialClass.steps.map((step, index) => (
                <li key={index}>{index + 1}️⃣ {step}</li>
              ))}
            </ol>
            <p className="text-gray-700 font-medium">
              {t.trialClass.goal}
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-emerald-700">
              {t.trialClass.formTitle}
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    {t.trialClass.form.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    {t.trialClass.form.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    {t.trialClass.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    {t.trialClass.form.studentAge} *
                  </label>
                  <input
                    type="text"
                    name="studentAge"
                    required
                    placeholder={language === 'ar' ? 'مثلاً، 8 سنوات' : language === 'de' ? 'z.B., 8 Jahre' : 'e.g., 8 years'}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  {t.trialClass.form.preferredTime}
                </label>
                <select
                  name="preferredTime"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">{language === 'ar' ? 'اختر' : language === 'de' ? 'Auswählen' : 'Select'}</option>
                  <option value="Morning (9-12) / الصباح (9-12)">
                    {language === 'ar' ? 'الصباح (9-12)' : language === 'de' ? 'Morgen (9-12)' : 'Morning (9-12)'}
                  </option>
                  <option value="Afternoon (12-17) / بعد الظهر (12-17)">
                    {language === 'ar' ? 'بعد الظهر (12-17)' : language === 'de' ? 'Nachmittag (12-17)' : 'Afternoon (12-17)'}
                  </option>
                  <option value="Evening (17-20) / المساء (17-20)">
                    {language === 'ar' ? 'المساء (17-20)' : language === 'de' ? 'Abend (17-20)' : 'Evening (17-20)'}
                  </option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (language === 'ar' ? 'جاري الإرسال...' : language === 'de' ? 'Wird gesendet...' : 'Sending...') : t.trialClass.form.submit}
              </button>
            </form>
            
            <p className="text-center mt-4 text-sm text-gray-600">
              {t.trialClass.footer}
            </p>
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
                {language === 'de' ? 'Ihre Teststundenbuchung wurde erfolgreich gesendet! Wir werden uns bald mit Ihnen in Verbindung setzen, um Ihren Termin zu bestätigen.' : language === 'ar' ? 'تم إرسال حجز الحصة التجريبية بنجاح! سنتواصل معك قريباً لتأكيد الموعد.' : 'Your trial class booking has been submitted successfully! We will contact you soon to confirm your appointment.'}
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
    </section>
  );
}
