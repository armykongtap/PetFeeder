import React, { Component } from "react";
import { Container, Row ,Image} from "react-bootstrap";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div class="NavBar">
        <Container>
          <Row>
            <Image
              height = "45"
              src="https://image.flaticon.com/icons/png/512/1623/1623681.png"
              rounded
            />
            <h2>Pet Feeder</h2>
          </Row>
        </Container>
      </div>
    );
  }
}
export default NavBar;
