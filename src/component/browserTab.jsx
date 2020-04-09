import React, { useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

const BrowserTab = () => {
  const [browsers, setBrowsers] = useState([
    { id: "browser-1", host: "158.234.207.101" },
    { id: "browser-2", host: "158.234.207.102" },
    { id: "browser-3", host: "158.234.207.103" },
    { id: "browser-4", host: "158.234.207.104" },
  ]);

  const AddToBrowser = () => {
    setBrowsers((browsers) => [
      ...browsers,
      { id: "browser-" + (browsers.length + 1), host: "158.234.207.105" },
    ]);
  };

  return (
    <div>
      {Object.entries(browsers).map((browser) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <Button variant="link">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <ListGroup.Item key={browser[1].id}>
                {browser[1].id}
                <br />
                {browser[1].host}
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
