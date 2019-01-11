import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
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
          <Col size="md-9 sm-12">
            <Jumbotron>
              <h1>Please select menu options below</h1>
            </Jumbotron>
            <Wrapper>
              {this.state.cards.map(card => (
              <Card
                clickCount={this.clickCount}
                id={card.id}
                key={card.id}
                image={card.image}
              />  
            ))}
          </Wrapper>
        );
      }     
          </Col>
          <Col size="md-3 sm-12">
          {/* Right Side Jumbotron */}
            <Jumbotron>
              <h1>Your Order:</h1>
            </Jumbotron>
              <h3>No items in the shopping cart</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
