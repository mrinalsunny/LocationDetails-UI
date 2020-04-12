import React, { useState, useEffect } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const BrowserTab = () => {
  const [browsers, setBrowsers] = useState([]);

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
      setBrowsers((browsers) => [...browsers, data]);
    });
  };

  return (
    <div>
      {Object.entries(browsers).map((browser) => (
        <div key={browser[1].id}>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <Button variant="link">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <ListGroup.Item>
                {browser[1].host}
                <br />
                {browser[1].id}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <br />
        </div>
      ))}
      <Button onClick={AddToBrowser} style={{ width: "18rem" }}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export default BrowserTab;
