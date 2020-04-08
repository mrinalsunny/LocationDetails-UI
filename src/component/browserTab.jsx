import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import initialData from "../dataSource/initial-data";

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
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default BrowserTab;
