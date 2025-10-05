import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function PackageSection() {
  const { t } = useTranslation();

  const packages = t("home.packages.items", { returnObjects: true });

  return (
    <section className="package-section py-5">
      <Container>
        <h2 className="text-center mb-4">{t("home.packages.title")}</h2>
        <p className="text-center text-muted mb-5">
          {t("home.packages.description")}
        </p>
        <Row>
          {packages.map((pkg, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 text-center shadow-soft border-0">
                <Card.Body>
                  <Card.Title>{pkg.name}</Card.Title>
                  <Card.Text>{pkg.details}</Card.Text>
                  <Button variant="outline-primary">{t("common.details")}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button variant="primary">{t("common.viewMore")}</Button>
        </div>
      </Container>
    </section>
  );
}

export default PackageSection;
