import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/features/landing/components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        {/* Future sections like Services, Projects, etc. will follow */}
      </main>
    </>
  );
}
