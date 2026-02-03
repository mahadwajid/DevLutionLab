import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/features/landing/components/HeroSection";
import ServicesSection from "@/features/landing/components/ServicesSection";
import AboutSection from "@/features/landing/components/AboutSection";
import ProjectDisplaySection from "@/features/landing/components/ProjectDisplaySection";
import CoFoundersSection from "@/features/landing/components/CoFoundersSection";
import ReviewsSection from "@/features/landing/components/ReviewsSection";
import ContactSection from "@/features/landing/components/ContactSection";
import FooterSection from "@/features/landing/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectDisplaySection />
        <CoFoundersSection />
        <ReviewsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
