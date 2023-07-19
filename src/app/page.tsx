import { AboutSection } from "@/views/AboutSection/About";
import { Contact } from "@/views/Contact/Contact";
import { Footer } from "@/views/Footer/Footer";
import { HeroSection } from "@/views/HeroSection/Hero";
import { RepositoriesSection } from "@/views/RepositoriesSection/Repositories";
import { StacksSection } from "@/views/StacksSection/Stacks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 bg-gradient-to-b from-slate-900 to-black overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <StacksSection />
      <RepositoriesSection />
      <Contact />
      <Footer />
    </main>
  );
}
