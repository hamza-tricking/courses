'use client';

import { HeroCarousel } from "@/components/HeroCarousel";
import { CoursesSection } from "@/components/CoursesSection";
import { OnlineLessonsSection } from "@/components/OnlineLessonsSection";
import { HomeVisitSection } from "@/components/HomeVisitSection";
import { ParentTrainingSection } from "@/components/ParentTrainingSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BlogSection } from "@/components/BlogSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StoreSection } from "@/components/StoreSection";

export default function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <CoursesSection />
      <OnlineLessonsSection />
      <HomeVisitSection />
      <StoreSection />
      <ParentTrainingSection />
      <WhyChooseUs />
      <BlogSection />
      <ServicesSection />
    </div>
  );
}
