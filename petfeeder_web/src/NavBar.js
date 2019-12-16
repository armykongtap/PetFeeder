import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div class="NavBar">
        <Container>
          <Row>
            <h2>Pet Feeder</h2>
          </Row>
        </Container>
      </div>
    );
  }
}
export default NavBar;
