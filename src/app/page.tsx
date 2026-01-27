import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/features/landing/components/HeroSection";
import ServicesSection from "@/features/landing/components/ServicesSection";
import AboutSection from "@/features/landing/components/AboutSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
      </main>
    </>
  );
}
