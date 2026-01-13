'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';

export default function HomeVisitReservationPage() {
  const { t, isRTL } = useLanguage();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    distance: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState({
    sessionPrice: 15.00,
    travelCost: 0,
    total: 15.00
  });

  useEffect(() => {
    // Calculate travel cost based on distance
    const distance = parseFloat(formData.distance) || 0;
    const travelCost = distance * 0.35 * 2; // Round trip
    const total = 15.00 + travelCost;
    
    setCalculatedPrice({
      sessionPrice: 15.00,
      travelCost: travelCost,
      total: total
    });
  }, [formData.distance]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    // Redirect to success page or show success message
    alert(t.homeVisitReservation.successMessage || 'Reservation submitted successfully!');
    setIsSubmitting(false);
  };

  const timeSlots = [
    '09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00'
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-12 px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent">
            {t.homeVisitReservation?.title || 'Home Visit Reservation'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.homeVisitReservation?.subtitle || 'Book your personalized home visit session'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    {t.homeVisitReservation?.personalInfo || 'Personal Information'}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.homeVisitReservation?.name || 'Full Name'} *
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
                        {t.homeVisitReservation?.email || 'Email'} *
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
                        {t.homeVisitReservation?.phone || 'Phone'} *
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
                  </div>
                </div>

                {/* Location Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    {t.homeVisitReservation?.locationInfo || 'Location Information'}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.homeVisitReservation?.address || 'Address'} *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.homeVisitReservation?.distance || 'Distance from Academy (km)'} *
                      </label>
                      <input
                        type="number"
                        name="distance"
                        value={formData.distance}
                        onChange={handleInputChange}
                        required
                        min="0"
                        step="0.1"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {t.homeVisitReservation?.distanceNote || 'Travel cost: €0.35 per km (round trip)'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    {t.homeVisitReservation?.scheduling || 'Preferred Schedule'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.homeVisitReservation?.preferredDate || 'Preferred Date'} *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.homeVisitReservation?.preferredTime || 'Preferred Time'} *
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">
                          {t.homeVisitReservation?.selectTime || 'Select a time'}
                        </option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.homeVisitReservation?.notes || 'Additional Notes'}
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder={t.homeVisitReservation?.notesPlaceholder || 'Any special requirements or questions...'}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting 
                    ? (t.homeVisitReservation?.submitting || 'Submitting...')
                    : (t.homeVisitReservation?.submit || 'Submit Reservation')
                  }
                </button>
              </div>
            </form>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                {t.homeVisitReservation?.priceSummary || 'Price Summary'}
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">
                    {t.homeVisitReservation?.sessionPrice || 'Session Price (90 min)'}
                  </span>
                  <span className="font-medium">€15.00</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">
                    {t.homeVisitReservation?.travelCost || 'Travel Cost'}
                  </span>
                  <span className="font-medium">€{calculatedPrice.travelCost.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg border-t-2 border-emerald-200">
                  <span className="font-semibold text-gray-800">
                    {t.homeVisitReservation?.total || 'Total'}
                  </span>
                  <span className="text-emerald-600 font-bold text-lg">€{calculatedPrice.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">
                  {t.homeVisitReservation?.importantInfo || 'Important Information'}
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• {t.homeVisitReservation?.info1 || '90-minute session at your location'}</li>
                  <li>• {t.homeVisitReservation?.info2 || 'Travel costs calculated round trip'}</li>
                  <li>• {t.homeVisitReservation?.info3 || 'Confirmation sent via email'}</li>
                  <li>• {t.homeVisitReservation?.info4 || 'Free cancellation up to 24 hours before'}</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => router.back()}
                className="w-full mt-6 px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t.homeVisitReservation?.back || 'Back'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
