import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import initialData from "../dataSource/initial-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const BrowserTab = () => {
  // const [controllers, setController] = useState(initialData.controllers);

  return (
    <div>
      {Object.entries(initialData.browsers).map((browser) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item key={browser[1].id}>
                {browser[1].id}
                <hr />
                {browser[1].host}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <br />
        </div>
      ))}
      <Button style={{ width: "18rem" }}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export default BrowserTab;
