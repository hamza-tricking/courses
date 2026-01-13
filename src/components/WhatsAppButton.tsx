'use client';

import { useState, useEffect } from 'react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    // WhatsApp number (replace with actual number)
    const phoneNumber = '491234567890'; // German format
    const message = encodeURIComponent('Hello! I\'m interested in your language courses.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Pulsing dot for signaling */}
      <div className="fixed bottom-24 right-6 md:bottom-6 z-40">
        <div className="relative">
          {/* Animated pulse effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50"></div>
          
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className={`
              relative w-16 h-16 bg-green-500/30 hover:bg-green-600/80 
              backdrop-blur-md
              text-white rounded-full 
              flex items-center justify-center 
              shadow-2xl hover:shadow-green-500/50 
              transition-all duration-300 
              transform hover:scale-110 
              border-4 border-white/50
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            aria-label="Contact us on WhatsApp"
          >
            {/* Custom WhatsApp SVG Icon */}
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 32 32" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
            >
              <path d="M16 0C7.164 0 0 7.164 0 16c0 2.889.864 5.576 2.352 7.824L.064 31.488l7.808-2.208C10.016 30.688 12.832 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.665 0-5.136-.816-7.181-2.208l-5.151 1.459 1.435-5.083C3.719 21.447 2.667 18.848 2.667 16c0-7.364 5.969-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/>
              <path d="M23.136 19.531c-.363-.181-2.147-1.059-2.476-1.181-.329-.122-.568-.181-.807.181-.239.363-.925 1.181-1.134 1.42-.209.239-.418.274-.781.093-.363-.181-1.531-.564-2.918-1.801-1.078-.962-1.805-2.147-2.014-2.51-.209-.363-.022-.56.159-.741.163-.163.363-.418.544-.627.181-.209.239-.363.359-.602.119-.239.059-.448-.03-.627-.09-.181-.807-1.945-1.106-2.662-.291-.698-.587-.603-.807-.613-.209-.01-.448-.01-.687-.01-.239 0-.627.09-.956.448-.329.363-1.255 1.226-1.255 2.989s1.287 3.471 1.466 3.71c.181.239 2.531 3.868 6.132 5.424 3.601 1.556 3.601 1.035 4.249.971.648-.064 2.147-.877 2.447-1.724.3-.847.3-1.571.209-1.72-.091-.149-.329-.239-.692-.42z"/>
            </svg>
            
            {/* Small notification dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></div>
          </button>
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </>
  );
}
