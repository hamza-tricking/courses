import { ParentTrainingSection } from "@/components/ParentTrainingSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ParentTrainingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="">
        <ParentTrainingSection />
      </main>
    </div>
  );
}
