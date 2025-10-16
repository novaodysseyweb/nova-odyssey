import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function PackageSection () {
  const { t } = useTranslation()
  const packages = t('home.packages.items', { returnObjects: true })

  // Track which accordion is open
  const [activeKey, setActiveKey] = useState([])

  const handleToggle = key => {
    setActiveKey(
      activeKey.includes(key)
        ? activeKey.filter(k => k !== key)
        : [...activeKey, key]
    )
    console.log('Toggled package index:', key)
    console.log('Current active keys:', activeKey)
  }

  return (
    <section className='package-section py-5'>
      <Container>
        <h2 className='text-center mb-4'>{t('home.packages.title')}</h2>
        <p className='text-center text-muted mb-5'>
          {t('home.packages.description')}
        </p>
        <Row>
          {packages.map((pkg, index) => (
            <Col md={4} key={index} className='mb-4'>
              <Card className='h-100 shadow-soft border-0'>
                <Card.Header
                  className='text-center bg-primary text-white'
                  style={{
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    letterSpacing: '0.03em'
                  }}
                >
                  {pkg.name}
                </Card.Header>
                <Card.Body className='d-flex flex-column'>
                  <div
                    className='mb-3 text-center text-secondary flex-shrink-0'
                    style={{ minHeight: '60px' }} // Adjust height as needed
                  >
                    {pkg.explanation ||
                      t(`home.packages.items.${index}.explanation`)}
                  </div>
                  <Accordion
                    activeKey={activeKey.includes(index) ? `${index}` : null}
                    className='mb-3 mb-auto'
                  >
                    <Accordion.Item eventKey={`${index}`}>

                      <Accordion.Body>
                        <ul className='list-unstyled mb-2'>
                          {(
                            pkg.features ||
                            t(`home.packages.items.${index}.features`, {
                              returnObjects: true
                            })
                          ).map((feature, i) => (
                            <li key={i} className='mb-1'>
                              <span className='text-success me-2'>✔</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className='text-muted small'>{pkg.details}</div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Button
                    variant='outline-primary'
                    className='mt-2'
                    onClick={() => handleToggle(index)}
                    aria-expanded={activeKey === index}
                  >
                    {activeKey.includes(index)
                      ? t('common.hideDetails') || t('common.hide')
                      : t('common.details')}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className='text-center mt-4'>
          <Button variant='primary' href='/services'>{t('common.viewMore')}</Button>
        </div>
      </Container>
    </section>
  )
}

export default PackageSection
