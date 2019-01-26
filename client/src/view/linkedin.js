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
              <h1>Contributors:</h1>
            </Jumbotron>
            <div class="list-group">
               <a href="https://linkedin.com/in/alexander-esch-37b69a62" class="list-group-item list-group-item-action active">Alex Esch</a>
                <a href="https://www.linkedin.com/in/aosilvester/" class="list-group-item list-group-item-action">Alex Silvester</a>
                <a href="https://www.linkedin.com/in/patrick-chu-90545514b/" class="list-group-item list-group-item-action">Patrick Chu</a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
