import React from "react";
import { Modal, Form, Row, Col, Button, Label } from "react-bootstrap";
import { Formik } from "formik";

const RenderModal = (tabsprops) => {
  console.log(
    "from RenderModal : editing : " + JSON.stringify(tabsprops.editing)
  );

  if (tabsprops.editing)
    return (
      <Modal
        show={true}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={true}
        onHide={() => tabsprops.setEditing(null)}
      >
        <Modal.Header>
          <Modal.Title>{tabsprops.editing.app}</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{
            host: tabsprops.editing.host,
            username: tabsprops.editing.username,
            password: tabsprops.editing.password,
            owner: tabsprops.editing.owner,
          }}
          onSubmit={() => console.log("submitted")}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Modal.Body>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Host
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.host}
                    name="host"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      User
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.username}
                    name="username"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Password
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                    name="password"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Owner
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.owner}
                    name="owner"
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => tabsprops.setEditing(null)}
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
    );
  else return null;
};

export default RenderModal;
