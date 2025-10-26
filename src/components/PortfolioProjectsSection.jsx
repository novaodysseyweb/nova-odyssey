import React from 'react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Card, Carousel, Row, Col } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'


function PortfolioProjectsSection() {
  const { t } = useTranslation()

  const button = t('portfolio.button', { returnObjects: true })
  const website = t('portfolio.website', { returnObjects: true })
  const header = t('portfolio.header', { returnObjects: true })
  const projects = t('portfolio.projects', { returnObjects: true })
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const details = (project) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedProject(null)
  }

  return (
    <div className='container-lg pb-4'>
      <div className='row justify-content-center'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='d-flex my-5 col-11 col-sm-10 col-md-6'
          >
            <div>
              <div className='card flex-fill d-flex flex-column'>
                <div>
                  <a href={project.link} className='ratio ratio-16x9' target='blank'>
                    <img
                      src={project.heroImage}
                      className='card-img object-fit-cover'
                      alt={project.name}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </a>
                </div>
                <div className='card-body d-flex flex-column'>
                  <div className='pb-3'>
                    <h5 className='card-title text-secondary'>{project.name}</h5>
                    <h6 className='card-text card-subtile text-justify border border-secondary text-secondary rounded d-inline-block p-2'>
                      {project.client}
                    </h6>
                    <p className='card-text text-justify'>
                      {project.details}
                    </p>
                  </div>
                  <div className='d-flex'>
                    <Button
                      variant='outline-primary'
                      onClick={() => details(project)}
                    >
                      {button}
                    </Button>
                  </div>
                </div>

              </div>
              <div className='d-flex card-footer'>
                <a
                  href={project.link}
                  className='btn btn-secondary col'
                  target='blank'
                >
                  {website}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className='align-self-center'
        centered
        size='xl'
      >
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>

        {selectedProject && (
          <Modal.Body className='rounded px-0'>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                  <Carousel
                    indicators={false}
                    nextIcon={<span className="carousel-control-next-icon bg-dark rounded-circle p-3" />}
                    prevIcon={<span className="carousel-control-prev-icon bg-dark rounded-circle p-3" />}
                    className="projects-carousel"
                  >
                    {selectedProject.images.map((image, idx) => (
                      <Carousel.Item key={idx}>
                        <div className="ratio ratio-4x3">
                          <Card.Img
                            src={image}
                            alt={selectedProject.name}
                            className='object-fit-contain'
                          />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>

                <div className="col-12 col-lg-6">
                  <h5 className='card-tile'>{selectedProject.name}</h5>
                  <h6 className='card-text card-subtile text-justify border border-secondary text-secondary rounded d-inline-block p-2'>
                    {selectedProject.client}
                  </h6>
                  <p className='card-text text-justify'>
                    {selectedProject.details}
                  </p>
                  <p className='card-text text-justify'>
                    Elementos empleados:
                  </p>
                  {selectedProject.features.map((feature, idx) => (
                    <div class="form-check" key={idx}>
                      <input class="form-check-input" type="checkbox" value={feature} id={`feature-${idx}`} checked />
                      <label class="form-check-label ms-1" for={`feature-${idx}`}>
                        {feature}
                      </label>
                    </div>
                  ))}
                  <div className='text-center mt-4'>
                    <Button variant='primary' onClick={handleCloseModal}>
                      Cerrar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        )}

      </Modal>
      
    </div>
  )

}

export default PortfolioProjectsSection