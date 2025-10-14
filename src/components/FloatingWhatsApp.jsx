import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/FloatingWhatsApp.scss";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5215555555555"
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={36} />
    </a>
  );
}

export default FloatingWhatsApp;
