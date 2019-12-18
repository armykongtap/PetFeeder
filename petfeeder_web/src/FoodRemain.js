import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class FoodRemainBowl extends Component {
  render() {
    return (
      <Container className="Box" id="1">
        <Row>
          <Col>
            <Image
              width="50"
              src="https://image.flaticon.com/icons/png/512/2372/2372774.png"
              rounded
            />
          </Col>
          <Col>
            <div>Food remain in bowl</div>
            <h3>999 g</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <Container className="Box" id="2">
        <Row>
          <Col>
          <Image
              width="60"
              src="https://image.flaticon.com/icons/png/512/1279/1279250.png"
              onClick="Feed()"
              />
          </Col>
          <Col>
            <div>Feed Me</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

class FoodRemain extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col >
            <FoodRemainBowl />
          </Col>
          <Col >
            <Feed />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FoodRemain;
