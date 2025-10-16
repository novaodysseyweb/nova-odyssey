import React from "react";
import { Container, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function QuoteBanner() {
  const { t } = useTranslation();

  return (
    <section className="quote-banner text-center py-4 bg-warning bg-opacity-25">
      <Container className="container-fluid">
        <p className="mb-3 fw-semibold">{t("home.quote.message")}</p>
        <Button variant="primary" className="z-4" href="/contact">{t("navbar.quote")}</Button>
      </Container>
    </section>
  );
}

export default QuoteBanner;
