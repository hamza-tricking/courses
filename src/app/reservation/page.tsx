'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ReservationPage() {
  const { t, isRTL, language } = useLanguage();
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

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

  const timeSlots = [
    '09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30'
  ];

  const getDaysOfWeek = () => {
    const days = isRTL ? ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'] : 
               language === 'de' ? ['Samstag', 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'] :
               ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const today = new Date();
    const currentDay = today.getDay();
    
    // Start from current day
    const reorderedDays = [...days.slice(currentDay), ...days.slice(0, currentDay)];
    
    return reorderedDays.map((day, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);
      
      return {
        name: day,
        date: date.toISOString().split('T')[0],
        dayNumber: date.getDate()
      };
    });
  };

  const days = getDaysOfWeek();

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleReservation = () => {
    if (selectedPackage && selectedDate && selectedTime) {
      const selectedPkg = packages.find(p => p.id === selectedPackage);
      alert(`${t.reservation?.bookingConfirmed || 'Booking confirmed'}: ${selectedPkg?.name} ${t.reservation?.onDate || 'on'} ${selectedDate} ${t.reservation?.atTime || 'at'} ${selectedTime}`);
    }
  };

  const getAvailableSlots = (dayName: string) => {
    if (!selectedPackage) return [];
    
    const selectedPkg = packages.find(p => p.id === selectedPackage);
    if (!selectedPkg) return [];

    // Map day names to day indices for consistent comparison
    const dayToIndex: { [key: string]: number } = {
      // Arabic
      'السبت': 6, 'الأحد': 0, 'الإثنين': 1, 'الثلاثاء': 2, 'الأربعاء': 3, 'الخميس': 4, 'الجمعة': 5,
      // English
      'Saturday': 6, 'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5,
      // German
      'Samstag': 6, 'Sonntag': 0, 'Montag': 1, 'Dienstag': 2, 'Mittwoch': 3, 'Donnerstag': 4, 'Freitag': 5
    };

    const dayIndex = dayToIndex[dayName];
    if (dayIndex === undefined) return [];

    // Get available days based on package (using day indices)
    let availableDayIndices: number[] = [];
    
    if (selectedPackage === 'basic') {
      // Only Saturday
      availableDayIndices = [6];
    } else if (selectedPackage === 'standard') {
      // Sunday and Monday
      availableDayIndices = [0, 1];
    } else if (selectedPackage === 'premium') {
      // Sunday, Monday, Tuesday
      availableDayIndices = [0, 1, 2];
    }
    
    // Check if current day is in available days
    if (!availableDayIndices.includes(dayIndex)) {
      return [];
    }
    
    return timeSlots.slice(0, selectedPkg.maxSlots);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent mb-4">
            {t.reservation?.title || 'حجز الدروس الخصوصية'}
          </h1>
          <p className="text-gray-600 text-lg">
            {t.reservation?.subtitle || 'اختر الباقة المناسبة لك واحجز وقتك المفضل'}
          </p>
        </div>

        {/* Package Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">{t.reservation?.selectPackage || 'اختر الباقة:'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => handlePackageSelect(pkg.id)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPackage === pkg.id
                    ? 'border-green-500 bg-green-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
                }`}
              >
                <div className={`bg-gradient-to-r ${pkg.color} text-white p-3 rounded-lg mb-4`}>
                  <h3 className="font-bold text-lg">{pkg.name}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">{t.reservation?.sessionsLabel || 'Sessions:'}</span> {pkg.sessions}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">{t.reservation?.priceLabel || 'Price:'}</span> 
                    <span className="text-green-600 font-bold text-xl ml-2">{pkg.price}</span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">{t.reservation?.maxStudents?.replace('{count}', pkg.maxSlots.toString()) || `Max ${pkg.maxSlots} students available`}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        {selectedPackage && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{t.reservation?.selectDayTime || 'Select Day and Time:'}</h2>
            
            {/* Days of Week */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
              {days.map((day) => {
                const availableSlots = getAvailableSlots(day.name);
                const hasAvailability = availableSlots.length > 0;
                
                return (
                  <div
                    key={day.date}
                    onClick={() => hasAvailability ? setSelectedDate(day.date) : null}
                    className={`p-4 rounded-lg border-2 text-center transition-all duration-300 ${
                      selectedDate === day.date
                        ? 'border-green-500 bg-green-50'
                        : hasAvailability
                        ? 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md cursor-pointer'
                        : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-1">{day.name}</div>
                    <div className="text-2xl font-bold">{day.dayNumber}</div>
                    {!hasAvailability && (
                      <div className="text-xs text-red-500 mt-1">{t.reservation?.notAvailable || 'Not Available'}</div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{t.reservation?.availableTimes || 'Available Times:'}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {getAvailableSlots(days.find(d => d.date === selectedDate)?.name || '').map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        selectedTime === time
                          ? 'border-green-500 bg-green-500 text-white'
                          : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Reservation Summary */}
        {selectedPackage && selectedDate && selectedTime && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t.reservation?.reservationSummary || 'Reservation Summary:'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">{t.reservation?.packageLabel || 'Package:'}</span> {packages.find(p => p.id === selectedPackage)?.name}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t.reservation?.dateLabel || 'Date:'}</span> {selectedDate}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t.reservation?.timeLabel || 'Time:'}</span> {selectedTime}
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">{t.reservation?.priceLabel || 'Price:'}</span> 
                  <span className="text-green-600 font-bold text-xl ml-2">
                    {packages.find(p => p.id === selectedPackage)?.price}
                  </span>
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {t.reservation?.confirmationNote || 'Reservation confirmation will be sent via email'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Confirm Button */}
        {selectedPackage && selectedDate && selectedTime && (
          <div className="text-center">
            <button
              onClick={handleReservation}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-lg"
            >
              {t.reservation?.confirmButton || 'Confirm Booking'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
