import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from './styles';
function ModalComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    > 
      <Modal.Header closeButton>
        <Modal.Title>
        {props.anime.name}  
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Original Run: {props.anime.originalRun}</p>
        <p>Written: {props.anime.written}</p>
        <p>Episodes: {props.anime.episodes}</p>
        <p>Story:  {props.anime.story}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalApp(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>
        More Information
      </Button>
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        anime={props.anime}
      />
    </div>
  );
}

export default ModalApp;
