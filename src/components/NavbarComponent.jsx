import React from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavbarComponent() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Nova Odyssey</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">{t("navbar.home")}</Nav.Link>
            <Nav.Link as={Link} to="/services">{t("navbar.services")}</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">{t("navbar.portfolio")}</Nav.Link>
            <Nav.Link as={Link} to="/about">{t("navbar.about")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("navbar.contact")}</Nav.Link>

            <Button as={Link} to="/contact" variant="primary" className="ms-3">
              {t("navbar.quote")}
            </Button>

            <Dropdown className="ms-3">
              <Dropdown.Toggle variant="outline-secondary" size="sm">
                🌐 {i18n.language.toUpperCase()}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("en")}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("es")}>ES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
