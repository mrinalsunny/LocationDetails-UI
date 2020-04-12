import React, { useState } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

const EditBrowserModal = (props) => {
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show}>
      <Modal.Header>{props.host}</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalHost">
            <Form.Label column sm={2}>
              Host
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Host IP Address"
                // value={props.host}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditBrowserModal;
