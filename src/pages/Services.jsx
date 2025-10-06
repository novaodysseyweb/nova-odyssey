import React from "react";
import HeroServiceSection from "../components/HeroServiceSection";

import QuoteBanner from "../components/QuoteBanner";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ServicePlansSection from "../components/ServicePlanSection";

function Home() {
  return (
    <>
      <HeroServiceSection />
      
      <ServicePlansSection />

      <QuoteBanner />
      <FloatingWhatsApp />
    </>
  );
}

export default Home;
