'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white/50 backdrop-blur-md flex flex-col items-center justify-center z-[9999]">
      <div className="mb-8">
        <Image
          src="/logoLaa - Copy.PNG"
          alt="Lisanakademie"
          width={80}
          height={80}
          className="rounded-lg animate-bounce"
        />
      </div>
      <div className="loader"></div>
      
      <style jsx>{`
        .loader {
          --w: 10ch;
          font-weight: bold;
          font-family: monospace;
          font-size: 30px;
          line-height: 1.2em;
          letter-spacing: var(--w);
          width: var(--w);
          overflow: hidden;
          white-space: nowrap;
          color: #0000;
          animation: l19 2s infinite linear;
        }
        .loader:before {
          content: "Loading...";
        }

        @keyframes l19 {
           0% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0}
           4% {text-shadow: 
                calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0}
           8% {text-shadow: 
                calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0}
          12% {text-shadow: 
                calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0}
          16% {text-shadow: 
                calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0}
          20% {text-shadow: 
                calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0}
          24% {text-shadow: 
                calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000, 
                calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0}
          28% {text-shadow: 
                calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000, 
                calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0}
          32% {text-shadow: 
                calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000, 
                calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0}
          36% {text-shadow: 
                calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000, 
                calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0}
          40%,
          60% {text-shadow: 
                calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000, 
                calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000}
          64% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000, 
                calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000}
          68% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000, 
                calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000}
          72% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000, 
                calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000}
          76% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0 #000, 
                calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000}
          80% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000}
          84% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000}
          88% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000}
          92% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000}
          96% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0 #000}
          100% {text-shadow: 
                calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0, 
                calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0}
        }
      `}</style>
    </div>
  );
}
