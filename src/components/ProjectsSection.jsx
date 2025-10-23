import React from "react";
import { Container, Card, Button, Carousel, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ProjectsSection() {
  const { t } = useTranslation();
  let projects = t("portfolio.projects", { returnObjects: true });
  //lets filter projects that have featured set to true
  projects = projects.filter(proj => proj.featured);
  // Split projects into chunks depending on screen size (Bootstrap handled via CSS)
  const chunkProjects = (size) => {
    const chunks = [];
    for (let i = 0; i < projects.length; i += size) {
      chunks.push(projects.slice(i, i + size));
    }
    return chunks;
  };

  // 3 items per slide for large screens
  const slides = chunkProjects(3);

  return (
    <section className="projects-section py-5">
      <Container>
        <h2 className="text-center mb-4">{t("home.projects.title")}</h2>

        <Carousel
          indicators={false}
          nextIcon={<span className="carousel-control-next-icon bg-dark rounded-circle p-3" />}
          prevIcon={<span className="carousel-control-prev-icon bg-dark rounded-circle p-3" />}
          className="projects-carousel"
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {slide.map((proj, i) => (
                  <Col key={i} xs={12} sm={6} lg={4} className="mb-4">
                    <Card className="h-100 text-center shadow-soft border-0">
                      <Card.Img
                        variant="top"
                        src={proj.heroImage}
                        alt={proj.name}
                        className="project-image"
                      />
                      <Card.Body>
                        <Card.Title>{proj.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="text-center mt-4">
          <Button variant="primary" href="/portfolio">{t("common.viewPortfolio")}</Button>
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
