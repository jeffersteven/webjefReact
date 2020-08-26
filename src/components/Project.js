import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
 
function Project(props) {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (
    <div className="col-lg-4 col-sm-6 mb-4" id="portfolio">
        <div className="portfolio-item" variant="primary" onClick={handleShow}>
            <div className="portfolio-link">
                <div className="portfolio-hover">
                <div className="portfolio-hover-content"><FontAwesomeIcon icon={faPlus} /></div>
                </div>
                <img className="img-fluid" src={props.image} alt={props.title}/>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{props.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{props.link}</div>
                </div>
            </div>
        </div>
        <Modal size="lg" show={lgShow} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="img-fluid d-block mx-auto" src={props.image} alt={props.title}/>
                <p>{props.description}</p>
                <ul className="list-inline">
                    <li>Fecha: {props.date}</li>
                    <li>Categoría: {props.category}</li>
                </ul>                
                <p className="item-intro">{props.link}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    </div>    
  )
}
 
export default Project;