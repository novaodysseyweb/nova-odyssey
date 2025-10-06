import React from "react";
import { Container, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ServicePlansSection() {
  const { t } = useTranslation();

  const plans = t("services.plans", { returnObjects: true });
  const features = t("services.features", { returnObjects: true });

  // Reorder features by category (common → advanced → premium)
  const orderedFeatures = [
    ...features.filter((f) => f.level === "common"),
    ...features.filter((f) => f.level === "standard"),
    ...features.filter((f) => f.level === "premium")
  ];

  const renderCell = (plan, feature) => {
    if (feature.key === "pages") {
      return <strong>{plan.pages}</strong>;
    }
    const hasFeature = plan.features.includes(feature.key);
    return hasFeature ? (
      <span className="feature-check">✓</span>
    ) : (
      <span className="feature-missing">—</span>
    );
  };

  return (
    <section className="service-plans-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">{t("services.title")}</h2>
        <p className="text-center text-muted mb-5">
          {t("services.description")}
        </p>

        <div className="table-responsive shadow-soft">
          <Table bordered hover responsive className="align-middle text-center mb-0">
            <thead className="table-primary">
              <tr>
                <th className="text-start">{t("services.featureHeader")}</th>
                {plans.map((plan, idx) => (
                  <th key={idx}>
                    <div className="fw-bold">{plan.name}</div>
                    <div className="small text-light">{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orderedFeatures.map((feature, idx) => (
                <tr key={idx}>
                  <td className="text-start fw-semibold">{feature.name}</td>
                  {plans.map((plan, pIdx) => (
                    <td key={pIdx}>{renderCell(plan, feature)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
}

export default ServicePlansSection;
