import React from "react";
import HeroSection from "../components/HeroSection";
import PackageSection from "../components/PackageSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import QuoteBanner from "../components/QuoteBanner";
// import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

function Home() {
  return (
    <>
      <HeroSection />
      <PackageSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <QuoteBanner />
      <FloatingWhatsApp />
    </>
  );
}

export default Home;
