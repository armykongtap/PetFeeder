import React from "react";
import FoodRemain from "./FoodRemain";
import Schdule from "./Schdule";
import Graph from "./Graph";
import NavBar from "./NavBar";
import "./App.css";
import { Container, Row, Col, Image } from "react-bootstrap";

function App() {
  return (
    <div>
      <NavBar/>
      <Container>
        <Row><h3>Dashborad</h3></Row>
        <Row>
          <Col>
            <FoodRemain />
          </Col>
          <Col>
            <Schdule />
          </Col>
        </Row>
        <Row>
          <Graph />
        </Row>
      </Container>
    </div>
  );
}

export default App;
