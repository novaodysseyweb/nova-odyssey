import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import logo from "../assets/Logo_Final.png"; 

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer py-5 mt-5">
      <Container>
        <Row className="align-items-start">
          {/* === Logo & Description === */}
          <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
            <img
              src={logo}
              alt="Nova Odyssey logo"
              className="footer-logo mb-3"
            />
            <p className="small mb-0">
              Nova Odyssey — {t("footer.tagline", {
                defaultValue: "Designing the Future of Digital Presence",
              })}
            </p>
          </Col>

          {/* === Navigation === */}
          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="footer-heading mb-3">{t("footer.navigation")}</h6>
            <Nav className="flex-column">
              <Nav.Link href="/">{t("navbar.home")}</Nav.Link>
              <Nav.Link href="/services">{t("navbar.services")}</Nav.Link>
              <Nav.Link href="/portfolio">{t("navbar.portfolio")}</Nav.Link>
              <Nav.Link href="/about">{t("navbar.about")}</Nav.Link>
              <Nav.Link href="/contact">{t("navbar.contact")}</Nav.Link>
            </Nav>
          </Col>

          {/* === Contact Info === */}
          <Col md={4}>
            <h6 className="footer-heading mb-3">{t("footer.contact")}</h6>
            <ul className="list-unstyled small mb-0">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@novaodyssey.com">hello@novaodyssey.com</a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+5215555555555">+52 1 555 555 5555</a>
              </li>
              <li>
                <strong>{t("footer.location")}:</strong> Mexico City, MX
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col className="text-center small">
            © {new Date().getFullYear()} Nova Odyssey. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
