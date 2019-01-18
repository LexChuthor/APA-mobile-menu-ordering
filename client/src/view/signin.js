import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import cards from "./cards.json";
import signin from "../components/signin/signin";
import kitchen from "./kitchen";
class Books extends Component {
  state = {
   cards,
   score: 0,
   highscore: 0
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
          <form id="signup" name="signup" method="post" action="/signup">
          <Row>Kitchen Sign In </Row>
          <Row>
        <label for="email">Username</label>
        <input class="text" name="email" type="email" />
        </Row>
        <Row>
        <label for="password">Password</label>
        <input name="password" type="password" />
        </Row>
        <Row>
        <input class="btn" type="submit" value="Sign Up" />
        <input class="btn" href="/kitchen" type="submit" value="Sign In" />
        </Row>
    </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
