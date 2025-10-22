import React from "react";
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ContactHero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section text-center py-5">
      <Container className="container-fluid">
        <h1 className="display-4 fw-bold mb-3">{t("contact.hero.title")}</h1>
        <h2 className="fw-semibold mb-3">{t("contact.hero.subtitle")}</h2>
        <p className="mb-4 outline-text">{t("contact.hero.description")}</p>
      </Container>
    </section>
  );
}

export default ContactHero;
