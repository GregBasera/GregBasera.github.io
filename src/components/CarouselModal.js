import React from "react";
import { Button, Carousel, Modal } from "react-bootstrap";

export default function CarouselModal(props) {
  return (
    <div>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {props.clarray.map((i, index) => {
              return (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={i} alt="Carousel slide" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
