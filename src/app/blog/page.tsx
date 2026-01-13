import { BlogSection } from "@/components/BlogSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
