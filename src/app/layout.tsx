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
