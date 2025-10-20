import React from 'react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap'


function PortfolioProjectsSection() {
  const { t } = useTranslation()

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
      <div className='row justify-content-center align-items-center px-0 mx-0'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='d-flex justify-content-center align-items-center my-5 col-11 col-sm-10 col-md-6'
          >
            <div className='col'>
              <div className='card col-10 col-sm-9 col-lg-12'>
                <div>
                  <a href={project.link} className='ratio ratio-16x9' target='blank'>
                    <img
                      src={project.heroImage}
                      className='card-img object-fit-cover'
                      alt={project.name}
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
                      Ver más detalles
                    </Button>
                  </div>
                </div>

              </div>
              <div className='d-flex'>
                <a
                  href={project.link}
                  className='btn btn-secondary col'
                  target='blank'
                >
                  Ir al sitio
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
      >
        <Modal.Header closeButton>
          <Modal.Title>Detalles</Modal.Title>
        </Modal.Header>
        {selectedProject && (
          <Modal.Body className='rounded'>
            <h5 className='card-tile'>{selectedProject.name}</h5>
            <h6 className='card-text card-subtile text-justify border border-secondary text-secondary rounded d-inline-block p-2'>
              {selectedProject.client}
            </h6>
            <p className='card-text text-justify'>
              {selectedProject.details}
            </p>
            <div className='text-center mt-4'>
              <Button variant='primary' onClick={handleCloseModal}>
                Cerrar
              </Button>
            </div>
          </Modal.Body>
        )}
      </Modal>
    </div>
  )

}

export default PortfolioProjectsSection