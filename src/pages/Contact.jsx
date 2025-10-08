import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

function Contact() {
  return (
    <>
      <ContactHero />
      <section className="contact-section py-5 bg-light">
        <Container>
          <Row>
            <Col md={5} className="mb-4">
              <ContactInfo />
            </Col>
            <Col md={7}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
      <FloatingWhatsApp />
    </>
  );
}

export default Contact;
