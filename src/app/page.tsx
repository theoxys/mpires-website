import { AboutSection } from "@/views/AboutSection/About";
import { HeroSection } from "@/views/HeroSection/Hero";
import { StacksSection } from "@/views/StacksSection/Stacks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-b from-slate-900 to-black">
      <HeroSection />
      <AboutSection />
      <StacksSection />
    </main>
  );
}
