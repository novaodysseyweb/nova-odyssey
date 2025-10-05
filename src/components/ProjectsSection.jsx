import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ProjectsSection() {
  const { t } = useTranslation();
  const projects = t("home.projects.items", { returnObjects: true });

  return (
    <section className="projects-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">{t("home.projects.title")}</h2>
        <Row>
          {projects.map((proj, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="h-100 text-center shadow-soft border-0">
                <Card.Img variant="top" src={proj.image} alt={proj.name} />
                <Card.Body>
                  <Card.Title>{proj.name}</Card.Title>
                  <Button variant="outline-primary">{t("common.viewPortfolio")}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsSection;
