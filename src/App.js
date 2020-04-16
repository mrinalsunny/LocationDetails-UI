import React from "react";
import Navbar from "./component/navbar";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
