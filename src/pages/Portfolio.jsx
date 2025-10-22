import React from "react";
import HeroPortfolioSection from "../components/HeroPortfolioSection"
import QuoteBanner from "../components/QuoteBanner";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import PortfolioProjectsSection from "../components/PortfolioProjectsSection";

function Home() {
  return (
    <>
      <HeroPortfolioSection />
      <PortfolioProjectsSection />
      <QuoteBanner />
      <FloatingWhatsApp />
    </>
  );
}

export default Home;