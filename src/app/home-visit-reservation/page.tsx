'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix Leaflet default icon issues
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icons for different locations
const academyIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const clientIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

// Custom component for map click handling
const MapClickHandler = ({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) => {
  const useMapEvents = require('react-leaflet').useMapEvents;
  let clickTimeout: NodeJS.Timeout | null = null;
  let clickCount = 0;
  
  useMapEvents({
    click: (e: any) => {
      clickCount++;
      
      // Clear existing timeout
      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }
      
      // Set timeout to detect single vs double click
      clickTimeout = setTimeout(() => {
        if (clickCount === 1) {
          // Single click - set location
          console.log('Single click detected, setting location');
          onMapClick(e.latlng.lat, e.latlng.lng);
        }
        // Reset for next interaction
        clickCount = 0;
        clickTimeout = null;
      }, 250); // Wait 250ms to detect double click
    },
    
    dblclick: () => {
      // Double click detected - don't set location, let map zoom
      console.log('Double click detected, allowing zoom');
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
      }
      clickCount = 0;
    },
  });
  
  return null;
};

// Academy location (fixed reference)
const ACADEMY_LOCATION = {
  address: 'Ebersbach an der Fils, Germany',
  lat: 48.6999,
  lng: 9.5333
};

interface Location {
  lat: number;
  lng: number;
  address: string;
}

// Haversine formula to calculate distance between two points
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Geocoding function using Nominatim (OpenStreetMap)
async function geocodeAddress(address: string): Promise<Location | null> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
      {
        headers: {
          'User-Agent': 'Courses-Website/1.0'
        }
      }
    );
    
    if (!response.ok) return null;
    
    const data = await response.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
        address: data[0].display_name
      };
    }
  } catch (error) {
    console.error('Geocoding error:', error);
  }
  return null;
}

export default function HomeVisitReservationPage() {
  const { t, isRTL } = useLanguage();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clientLocation, setClientLocation] = useState<Location | null>(null);
  const [distance, setDistance] = useState<number>(0);
  const [isGeocoding, setIsGeocoding] = useState(false);
  const [mapCenter, setMapCenter] = useState<[number, number]>([ACADEMY_LOCATION.lat, ACADEMY_LOCATION.lng]);
  const [calculatedPrice, setCalculatedPrice] = useState({
    sessionPrice: 15.00,
    travelCost: 0,
    total: 15.00
  });

  useEffect(() => {
    // Calculate travel cost based on distance
    const travelCost = distance * 0.35 * 2; // Round trip
    const total = 15.00 + travelCost;
    
    setCalculatedPrice({
      sessionPrice: 15.00,
      travelCost: travelCost,
      total: total
    });
  }, [distance]);

  // Update distance when client location changes
  useEffect(() => {
    if (clientLocation) {
      const calculatedDistance = calculateDistance(
        ACADEMY_LOCATION.lat,
        ACADEMY_LOCATION.lng,
        clientLocation.lat,
        clientLocation.lng
      );
      setDistance(calculatedDistance);
    }
  }, [clientLocation]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddressGeocode = async () => {
    if (!formData.address.trim()) return;
    
    setIsGeocoding(true);
    const location = await geocodeAddress(formData.address);
    
    if (location) {
      setClientLocation(location);
      setMapCenter([location.lat, location.lng]);
    } else {
      alert('Address not found. Please try a different address or select location on the map.');
    }
    
    setIsGeocoding(false);
  };

  const handleMapClick = async (lat: number, lng: number) => {
    // Reverse geocoding to get address from coordinates
    try {
      console.log('Attempting reverse geocoding for:', lat, lng);
      
      // Try multiple times with different approaches
      let address = null;
      
      // First attempt
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&limit=1`,
          {
            headers: {
              'User-Agent': 'Courses-Website/1.0',
              'Accept': 'application/json'
            }
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          address = data.display_name;
          console.log('Geocoding successful:', address);
        }
      } catch (err) {
        console.log('First attempt failed:', err);
      }
      
      // Second attempt with different server
      if (!address) {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
            {
              headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Courses-Website/1.0)'
              }
            }
          );
          
          if (response.ok) {
            const data = await response.json();
            address = data.display_name || `${data.address?.road || ''}, ${data.address?.city || ''}, ${data.address?.country || ''}`;
            console.log('Second attempt successful:', address);
          }
        } catch (err) {
          console.log('Second attempt failed:', err);
        }
      }
      
      // Use coordinates as fallback
      const finalAddress = address || `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
      
      setClientLocation({ lat, lng, address: finalAddress });
      setFormData(prev => ({ ...prev, address: finalAddress }));
      
    } catch (error) {
      console.error('All geocoding attempts failed:', error);
      // Ultimate fallback - just use coordinates
      const fallbackAddress = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
      setClientLocation({ lat, lng, address: fallbackAddress });
      setFormData(prev => ({ ...prev, address: fallbackAddress }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to success page or show success message
    alert(t.homeVisitReservation?.successMessage || 'Reservation submitted successfully!');
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
          <h1 className="text-3xl pb-2 sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent">
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

              {/* Address Input */}
              <div className="md:col-span-2">
                 {/* Location Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    {t.homeVisitReservation?.locationInfo || 'Location Information'}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.homeVisitReservation?.distance || 'Distance from Academy'}
                      </label>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-medium text-gray-800">
                            {distance > 0 ? `${distance.toFixed(1)} km` : 'Not calculated'}
                          </span>
                          {clientLocation && (
                            <span className="text-sm text-green-600 font-medium">
                              ✓ Location set
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {t.homeVisitReservation?.distanceNote || 'Travel cost: €0.35 per km (round trip)'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.homeVisitReservation?.address || 'Address'} *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your address or click on map"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                        <button
                          type="button"
                          onClick={handleAddressGeocode}
                          disabled={isGeocoding || !formData.address.trim()}
                          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          {isGeocoding ? 'Finding...' : 'Find'}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Enter your address and click "Find" or use the map below
                      </p>
                    </div>
                  </div>

              {/* Interactive Map */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Select Your Location
                </h3>
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden relative" style={{ height: '400px', zIndex: 1 }}>
                  {typeof window !== 'undefined' && (
                    <MapContainer
                      center={mapCenter}
                      zoom={10}
                      style={{ height: '100%', width: '100%' }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      
                      {/* Academy Marker */}
                      <Marker position={[ACADEMY_LOCATION.lat, ACADEMY_LOCATION.lng]} icon={academyIcon}>
                        <Popup>
                          <div className="text-sm">
                            <strong>🏢 Academy Location</strong><br />
                            {ACADEMY_LOCATION.address}
                          </div>
                        </Popup>
                      </Marker>
                      
                      {/* Client Location Marker */}
                      {clientLocation && (
                        <Marker position={[clientLocation.lat, clientLocation.lng]} icon={clientIcon}>
                          <Popup>
                            <div className="text-sm">
                              <strong>📍 Your Location</strong><br />
                              {clientLocation.address}<br />
                              Distance: {distance.toFixed(1)} km
                            </div>
                          </Popup>
                        </Marker>
                      )}
                      
                      {/* Map Click Handler */}
                      <MapClickHandler onMapClick={handleMapClick} />
                    </MapContainer>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  💡 Single click to set location | Double click to zoom
                </p>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-center">
                 <div className="flex mx-2  justify-between items-center p-4 bg-emerald-50 rounded-lg border-t-2 border-emerald-200">
                  <span className="font-semibold text-gray-800">
                    {t.homeVisitReservation?.total || 'Total'}
                  </span>
                  <span className="text-emerald-600 font-bold text-lg">€{calculatedPrice.total.toFixed(2)}</span>
                </div>
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
                              <p className="text-sm text-gray-600 mb-2">
                  {t.common?.taxNotice || 'The invoice amount does not include VAT according to § 19 UStG.'}
                </p>
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
