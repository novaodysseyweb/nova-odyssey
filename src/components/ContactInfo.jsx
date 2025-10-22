import React from "react";
import { useTranslation } from "react-i18next";

function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="contact-info">
      <h5 className="mb-3">{t("contact.infoTitle")}</h5>
      <ul className="list-unstyled text-muted">
        <li>
          <strong>{t("contact.addressLabel")}:</strong> {t("contact.address")}
        </li>
        <li>
          <strong>{t("contact.phoneLabel")}:</strong>{" "}
          <a href="tel:+5215555555555">+52 1 555 555 5555</a>
        </li>
        <li>
          <strong>{t("contact.emailLabel")}:</strong>{" "}
          <a href="mailto:hello@novaodyssey.com">novaodysseyweb@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
