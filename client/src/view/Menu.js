import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
// // Set your secret key: remember to change this to your live secret key in production
// // See your keys here: https://dashboard.stripe.com/account/apikeys
// var stripe = require("stripe")("sk_test_5Uor8muy3s1tPcseUcv6NbC4");

// // // <!-- // Token is created using Checkout or Elements!
// // // Get the payment token ID submitted by the form: -->
// const token = request.body.stripeToken; // Using Express

// const charge = stripe.charges.create({
//   amount: 999,
//   currency: 'usd',
//   description: 'Example charge',
//   source: token,
// });

class Books extends Component {
  state = {
    products: [],
    categories: [],
    order: []
  };

  componentDidMount() {
    this.loadProducts();
    this.loadCategories();
    this.loadOrders();
  };

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products: res.data })
      )
      .catch(err => console.log(err));
  }
  loadCategories = () => {
    API.getCategories()
      .then(res =>
        this.setState({ categories: res.data })
      )
      .catch(err => console.log(err));
  }
  loadOrders = () => {
    API.getOrders()
      .then(res =>
        this.setState({ order: res.data })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-9 sm-12">
            <Wrapper>
              <Row><h1>Please select from the menu options below</h1></Row>
              <Wrapper>{this.state.products.map(product => (
                <Card
                  name={product.name}
                  id={product._id}
                  key={product._id}
                  image={product.img}
                  description={product.description}
                />
              ))}
              </Wrapper>
            </Wrapper>
          </Col>
          <Col size="md-3 sm-12">
            {/* Right Side Jumbotron */}
            <Jumbotron>
              <h1>Your Order:</h1>
            </Jumbotron>
            <h3>No items in the shopping cart</h3>
          </Col>
        </Row>
        <Col size="md-9"></Col>
        <Col size="md-3">
          <Wrapper>
              <form action="your-server-side-code" method="POST">
                <script
                  src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                  data-key="pk_test_8Z9f9E3qi0HOt62PCWknYmnu"
                  data-amount="999"
                  data-name="Demo Site"
                  data-description="Example charge"
                  data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                  data-locale="auto"
                  data-zip-code="true">
                </script>
              </form>
           </Wrapper>                    
        </Col>
      </Container>
    );
  }
}

export default Books;
