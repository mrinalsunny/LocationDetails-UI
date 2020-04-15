import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import {
  Card,
  ListGroup,
  Button,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const BrowserTab = () => {
  const [browsers, setBrowsers] = useState([]);
  const [editingBrowser, setEditingBrowser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/browser/get/all")
      .then((response) => {
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
    console.log(
      props
      // (browsers[browsers.findIndex((browser) => browser === editingBrowser)] = {
      //   id: editingBrowser.id,
      //   host: "158.234.207.103",
      //   username: "",
      //   password: "",
      //   owner: "",
      //   isEditable: "",
      //   modifiedDate: "2020-04-14T09:54:43.128+0000",
      // })
    );
    setEditingBrowser(null);
  };

  const renderBrowserEditModal = () => {
    if (editingBrowser) {
      return (
        <div>
          <Modal
            show="true"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={true}
            onHide={() => setEditingBrowser(null)}
          >
            <Modal.Header>{editingBrowser.id}</Modal.Header>

            <Formik
              initialValues={{ host: editingBrowser.host }}
              onSubmit={saveEdit}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Modal.Body>
                    <input
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.host}
                      name="host"
                    />
                  </Modal.Body>
                  {props.errors.name && (
                    <div id="feedback">{props.errors.host}</div>
                  )}
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
                  {/* <Button type="submit">Submit</Button> */}
                </form>
              )}
            </Formik>
          </Modal>
          {editingBrowser.host}
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
                {browser.host}
                <br />
                {browser.username}
                <br />
                {browser.password}
                <br />
                {browser.owner}
                <br />
                {browser.modifiedDate}
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
