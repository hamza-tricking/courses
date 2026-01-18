'use client';

import { StoreSection } from "@/components/StoreSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export default function StorePage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.store?.title || "Store - Lisanakademie";
  }, [t]);

  return (
    <div>
      <StoreSection />
    </div>
  );
}
