import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h1>{t("home.title")}</h1>
      <p className="lead">{t("home.subtitle")}</p>
      <Button variant="primary" href="/services">
        {t("navbar.services")}
      </Button>
    </div>
  );
}

export default Home;
