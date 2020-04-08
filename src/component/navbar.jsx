import React from "react";
import { Card, Nav } from "react-bootstrap";
import ControllerTab from "./controllerTab";
import BrowserTab from "./browserTab";
import DatabaseTab from "./databaseTab";

const navbar = () => {
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Controller</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#second">Browser</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#third">Database</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <ControllerTab></ControllerTab>
        <BrowserTab></BrowserTab>
        <DatabaseTab></DatabaseTab>
      </Card.Body>
    </Card>
  );
};

export default navbar;
