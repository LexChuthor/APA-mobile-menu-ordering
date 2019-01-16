import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

class Books extends Component {
  state = {
  products: [],
  };

  componentDidMount(){
    this.loadProducts();
  };

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({products: res.data})
        )
        .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-9 sm-12">
            <Jumbotron>
              <h1>Please select menu options below</h1>
            </Jumbotron>
            <Wrapper>
              {this.state.products.map(product => (
              <Card
                name={product.name}
                id={product._id}
                key={product._id}
                image={product.img}
                description={product.description}
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
