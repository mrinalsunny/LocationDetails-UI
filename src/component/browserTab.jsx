import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import {
  Card,
  ListGroup,
  Button,
  Modal,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Moment from "react-moment";

const BrowserTab = () => {
  const [browsers, setBrowsers] = useState([]);
  const [editingBrowser, setEditingBrowser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/browser/get/all")
      .then((response) => {
        console.log("From useEffect");
        console.log(response);
        setBrowsers((browsers) => response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const PushToBrowserApi = (props) => {
    return axios
      .post("/api/browser/add", props)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  };

  const AddToBrowser = () => {
    PushToBrowserApi({
      host: "",
      username: "",
      password: "",
      owner: "",
    }).then((data) => {
      setEditingBrowser(data);
      setBrowsers((browsers) => [...browsers, data]);
    });
  };

  const saveEdit = (props) => {
    browsers[browsers.findIndex((browser) => browser === editingBrowser)] = {
      id: editingBrowser.id,
      host: props.host,
      username: props.username,
      password: props.password,
      owner: props.owner,
      modifiedDate: Date.now(),
    };
    setEditingBrowser(null);
    console.log("From saveEdit");
    console.log(browsers);
  };

  const renderBrowserEditModal = () => {
    if (editingBrowser) {
      return (
        <div>
          <Modal
            show={true}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={true}
            onHide={() => setEditingBrowser(null)}
          >
            <Modal.Header>{editingBrowser.id}</Modal.Header>

            <Formik
              initialValues={{
                host: editingBrowser.host,
                username: editingBrowser.username,
                password: editingBrowser.password,
                owner: editingBrowser.owner,
              }}
              onSubmit={saveEdit}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Modal.Body>
                    <Form>
                      <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                          Host
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.host}
                            name="host"
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                          Username
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.username}
                            name="username"
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                          Password
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            name="password"
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                          Owner
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.owner}
                            name="owner"
                          />
                        </Col>
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  {/* {props.errors.name && (
                    <div id="feedback">{props.errors.host}</div>
                  )} */}
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setEditingBrowser(null)}
                    >
                      Close
                    </Button>
                    <Button type="submit" variant="primary">
                      Save changes
                    </Button>
                  </Modal.Footer>
                </form>
              )}
            </Formik>
          </Modal>
        </div>
      );
    }
  };

  return (
    <div>
      {browsers.map((browser) => (
        <div key={browser.id}>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <Button variant="link" onClick={() => setEditingBrowser(browser)}>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <ListGroup.Item>
                <Row>
                  <Col sm="5">Host</Col>
                  <Col sm="7">{browser.host}</Col>
                  <Col sm="5">Username</Col>
                  <Col sm="7">{browser.username}</Col>
                  <Col sm="5">Password</Col>
                  <Col sm="7">{browser.password}</Col>
                  <Col sm="5">Owner</Col>
                  <Col sm="7">{browser.owner}</Col>
                  <Col sm="5">Updated</Col>
                  <Col sm="7">
                    <Moment format="DD-MM-YY HH:MM:ss">
                      {browser.modifiedDate}
                    </Moment>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <br />
        </div>
      ))}
      <Button onClick={AddToBrowser} style={{ width: "18rem" }}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      {renderBrowserEditModal()}
    </div>
  );
};

export default BrowserTab;
