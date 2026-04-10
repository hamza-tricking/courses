import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileBottomNav } from "@/components/MobileBottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lisanakademie - Modernes Lernen für alle",
  description: "Unsere Expertise in der Sprachförderung ermöglicht es Ihnen, effektiv und flexibel zu lernen. Vertrauen Sie auf unsere praxisnahen Angebote.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1480392636848823');
fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1480392636848823&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Loader />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-24 pb-20 md:pb-0">
              {children}
            </main>
            <Footer />
          </div>
          <WhatsAppButton />
          <MobileBottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
