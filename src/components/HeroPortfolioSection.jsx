import React from "react";
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function HeroPortfolioSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section text-center py-5">
      <Container className="container-fluid">
        <h1 className="display-4 fw-bold mb-3">{t("portfolio.title")}</h1>
        <h2 className="fw-semibold mb-3">{t("portfolio.subtitle")}</h2>
        <p className="mb-4 outline-text">{t("portfolio.description")}</p>
      </Container>
    </section>
  );
}

export default HeroPortfolioSection;