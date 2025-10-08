import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ sent: false, error: false });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sent: false, error: false });

    try {
      // TODO: integrate with backend or email service
      console.log("Submitted:", formData);
      setStatus({ sent: true, error: false });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus({ sent: false, error: true });
    }
  };

  return (
    <div className="contact-form">
      <h5 className="mb-3">{t("contact.formTitle")}</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>{t("contact.form.name")}</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>{t("contact.form.phone")}</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>{t("contact.form.email")}</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>{t("contact.form.message")}</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {status.sent && (
          <Alert variant="success" className="py-2">
            {t("contact.success")}
          </Alert>
        )}
        {status.error && (
          <Alert variant="danger" className="py-2">
            {t("contact.error")}
          </Alert>
        )}

        <Button type="submit" variant="primary">
          {t("contact.form.send")}
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
