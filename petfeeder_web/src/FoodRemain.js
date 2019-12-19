import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
class FoodRemainBowl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0
    };
  }

  async componentDidMount() {
    try {
      setInterval(async () => {
        const res = await fetch("http://localhost:8000/lastweight/");
        const blocks = await res.json();
        const tmp = blocks["weight"];

        this.setState({
          weight: tmp
        });
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }
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
            <div class="cursive">Food remain in bowl</div>
            <h3 class="cursive">{this.state.weight}</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

class Feed extends Component {
  constructor(props) {
    super(props);

    this.feed = this.feed.bind(this);
  }

  async feed(event) {
    let response;
    event.preventDefault();
    try {
      response = await fetch("http://localhost:8000/feed/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 100
        })
      });
      console.log(response.status);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <Container className="Box" id="2">
        <Row>
          <Col>
            <Image
              width="60"
              src="https://image.flaticon.com/icons/png/512/1279/1279250.png"
            />
          </Col>
          <Col>
            <Button onClick={this.feed} id="feed">
              Feed me
            </Button>
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
          <Col>
            <FoodRemainBowl />
          </Col>
          <Col>
            <Feed />
          </Col>
        </Row>
      </Container>
    );
  }
}

/*function updateDate(){
  //document.getElementById("feed").innerHTML = Date();
  document.getElementById("feed").addEventListener("Feed me", Feed); 
}*/

export default FoodRemain;
