import React from "react";
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section text-center py-5">
      <Container>
        <h1 className="display-4 fw-bold mb-3">{t("home.hero.title")}</h1>
        <h2 className="fw-semibold mb-3">{t("home.hero.subtitle")}</h2>
        <p className="mb-4 text-muted">{t("home.hero.description")}</p>
        <Button variant="light" href="/portfolio">
          {t("home.hero.cta")}
        </Button>
      </Container>
    </section>
  );
}

export default HeroSection;
