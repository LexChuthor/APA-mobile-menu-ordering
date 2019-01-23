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
          {/*  Jumbotron */}
            <Jumbotron>
              <h1>Current orders:</h1>
            </Jumbotron>
              <h3>No items in the shopping cart</h3>
          </Col>
        </Row>
        <Container fluid>
          <Row>
           <Col size="sm-1">
            <form id="signup" name="signup"  action="/kitchen">
            <Row>Add an Item </Row>
            <Row>
          <label for="Name">Name</label>
          <input class="text" name="productName" type="text" />
          </Row>
          <Row>
          <label for="Img">Image</label>
          <input name="URL" type="text" />
          </Row>
          <Row>
          <label for="Description">Description</label>
          <input name="Description" type="text" />
          </Row>
          <Row>
          <label for="Price">Price</label>
          <input name="Price" type="number" />
          </Row>
          <Row>
          <label for="Category">Category</label>
          <input name="URL" type="text" />
          </Row>
          <Row>
          <input class="btn" href="/kitchen"  type="submit" value="Add New Item/product" />

          </Row>
      </form>
            </Col>
          </Row>
        </Container>
        </Container>
    );
  }
}

export default Books;
