'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ReservationPage() {
  const { t, isRTL, language } = useLanguage();
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    {
      id: 'a1',
      title: t.home.courses.a1,
      description: t.courses.levels.a1.description,
      level: 'A1',
      image: '/Courses photos/Gemini_Generated_Image_e0edtbe0edtbe0ed.png'
    },
    {
      id: 'a2',
      title: t.home.courses.a2,
      description: t.courses.levels.a2.description,
      level: 'A2',
      image: '/Courses photos/Gemini_Generated_Image_i6j71ei6j71ei6j7.png'
    },
    {
      id: 'b1',
      title: t.home.courses.b1,
      description: t.courses.levels.b1.description,
      level: 'B1',
      image: '/Courses photos/Gemini_Generated_Image_ppr7yzppr7yzppr7.png'
    }
  ];

  const packages = [
    {
      id: 'basic',
      name: t.reservation?.packages?.basic?.name || 'الباقة الأساسية (Basis-Paket)',
      maxSlots: 10,
      availableDays: 1, // Only Saturday
      sessions: t.reservation?.packages?.basic?.sessions || 'حصة واحدة أسبوعياً لمدة 90 دقيقة',
      price: '29,95 €',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'standard',
      name: t.reservation?.packages?.standard?.name || 'الباقة القياسية (Standard-Paket)',
      maxSlots: 5,
      availableDays: 2, // 2 days per week for 2 sessions
      sessions: t.reservation?.packages?.standard?.sessions || 'حصتان أسبوعياً لمدة 90 دقيقة',
      price: '59,90 €',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'premium',
      name: t.reservation?.packages?.premium?.name || 'باقة التميز (Premium-Paket / VIP)',
      maxSlots: 3,
      availableDays: 3, // 3 days per week for 3 sessions
      sessions: t.reservation?.packages?.premium?.sessions || '3 حصص أسبوعياً لمدة 90 دقيقة',
      price: '89,85 €',
      color: 'from-teal-500 to-green-600'
    }
  ];

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
  };

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
    
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const selectedPkg = packages.find(p => p.id === selectedPackage);
    alert(`${t.reservation?.bookingConfirmed || 'Booking confirmed'}: ${selectedPkg?.name}`);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', address: '', notes: '' });
    setSelectedPackage('');
    setSelectedCourse('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl py-2 sm:text-4xl font-bold bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent mb-4">
            {t.reservation?.title || 'الكورسات'}
          </h1>
          <p className="text-gray-600 text-lg">
            {t.reservation?.subtitle || 'اختر الباقة المناسبة لك واحجز وقتك المفضل'}
          </p>
        </div>

        {/* Registration Form with Course and Package Selection */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">{t.reservation?.registerForm || 'Registration Form'}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Course Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.courses?.title || 'Select Course'} *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => handleCourseSelect(course.id)}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedCourse === course.id
                        ? 'border-green-500 bg-green-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <img src={course.image} alt={course.title} className="w-12 h-12 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm text-gray-800">{course.title}</h3>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-semibold">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Selection */}
            {selectedCourse && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t.reservation?.selectPackage || 'اختر الباقة:'} *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => handlePackageSelect(pkg.id)}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedPackage === pkg.id
                          ? 'border-green-500 bg-green-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-sm'
                      }`}
                    >
                      <div className={`bg-gradient-to-r ${pkg.color} text-white p-2 rounded mb-2`}>
                        <h3 className="font-bold text-sm">{pkg.name}</h3>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-700">
                          <span className="font-semibold">{t.reservation?.sessionsLabel || 'Sessions:'}</span> {pkg.sessions}
                        </p>
                        <p className="text-xs text-gray-700">
                          <span className="font-semibold">{t.reservation?.priceLabel || 'Price:'}</span> 
                          <span className="text-green-600 font-bold text-sm ml-1">{pkg.price}</span>
                        </p>
                        <p className="text-xs text-gray-600">
                          {t.common?.taxNotice || 'The invoice amount does not include VAT according to § 19 UStG.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Personal Information */}
            {selectedPackage && selectedCourse && (
              <>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.reservation?.name || 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.reservation?.email || 'Email'} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.reservation?.phone || 'Phone'} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.reservation?.address || 'Address'}
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.reservation?.notes || 'Additional Notes'}
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder={t.reservation?.notesPlaceholder || 'Any special requirements or questions...'}
                  />
                </div>

                {/* Course and Package Summary */}
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">{t.reservation?.selectedPackage || 'Selected Package'}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.courses?.title || 'Course'}:</span>
                      <span className="font-medium text-sm">{courses.find(c => c.id === selectedCourse)?.title}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.reservation?.selectedPackage || 'Package'}:</span>
                      <span className="font-medium text-sm">{packages.find(p => p.id === selectedPackage)?.name}</span>
                    </div>
                        <p className="text-xs text-gray-600 ">
                          {t.common?.taxNotice || 'The invoice amount does not include VAT according to § 19 UStG.'}
                        </p>
                    <div className="flex justify-between items-center">
                      
                      <span className="text-gray-700">{t.reservation?.priceLabel || 'Price'}</span>
                    
                      <span className="text-green-600 font-bold text-lg">
                        {packages.find(p => p.id === selectedPackage)?.price}
                      </span>
                      
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPackage('');
                      setSelectedCourse('');
                    }}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {t.reservation?.cancel || 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting 
                      ? (t.reservation?.submitting || 'Submitting...')
                      : (t.reservation?.confirmButton || 'Confirm Booking')
                    }
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
