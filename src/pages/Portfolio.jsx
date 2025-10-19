import React from "react";
import PortfolioHero from "../components/PortfolioHero"
import QuoteBanner from "../components/QuoteBanner";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import PortfolioProjectsSection from "../components/PortfolioProjectsSection";

function Home() {
  return (
    <>
      <PortfolioHero />
      <PortfolioProjectsSection />
      <QuoteBanner />
      <FloatingWhatsApp />
    </>
  );
}

export default Home;