import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = t("home.testimonials.items", { returnObjects: true });

  return (
    <section className="testimonials-section py-5">
      <Container>
        <h2 className="text-center mb-4">{t("home.testimonials.title")}</h2>
        <Row>
          {testimonials.map((tst, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="h-100 text-center shadow-soft border-0">
                <Card.Header
                                  className='text-center bg-secondary text-white'
                                  style={{
                                    fontWeight: 700,
                                    fontSize: '1.2rem',
                                    letterSpacing: '0.03em'
                                  }}
                                >
                                  {tst.name}
                                </Card.Header>
                <Card.Body>
                  <Card.Subtitle className="text-muted mb-3">{ <a
    href={tst.website.startsWith("http") ? tst.website : `https://${tst.website}`}
    target="_blank"
    rel="noopener noreferrer"
  >{tst.website}</a>}</Card.Subtitle>
                  <Card.Text>{tst.details}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
