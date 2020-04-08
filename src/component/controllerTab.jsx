import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import initialData from "../dataSource/initial-data";

const ControllerTab = () => {
  // const [controllers, setController] = useState(initialData.controllers);

  return (
    <div>
      {Object.entries(initialData.controllers).map((controller) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item key={controller[1].id}>
                {controller[1].id}
                <hr />
                {controller[1].host}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default ControllerTab;
