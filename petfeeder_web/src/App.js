import React from "react";
import FoodRemain from "./FoodRemain";
import Graph from "./Graph";
import NavBar from "./NavBar";
import "./App.css";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <h3>Dashboard</h3>
        </Row>
        <Row>
            <FoodRemain />
        </Row>
        <Row>
          <Graph />
        </Row>
      </Container>
    </div>
  );
}

export default App;
