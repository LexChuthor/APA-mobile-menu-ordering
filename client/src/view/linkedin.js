import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import Card from "../components/Card";
// import Wrapper from "../components/Wrapper";
import cards from "./cards.json";

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
          {/* Right Side Jumbotron */}
            <Jumbotron>
              <h1>Current orders:</h1>
            </Jumbotron>
              <h3>No items in the shopping cart</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
