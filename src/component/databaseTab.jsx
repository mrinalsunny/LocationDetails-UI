import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import initialData from "../dataSource/initial-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DatabaseTab = () => {
  // const [controllers, setController] = useState(initialData.controllers);

  return (
    <div>
      {Object.entries(initialData.databases).map((database) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item key={database[1].id}>
                {database[1].id}
                <hr />
                {database[1].host}
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

export default DatabaseTab;
