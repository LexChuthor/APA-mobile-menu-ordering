import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
<<<<<<< HEAD
import Category from "../components/Category";
import { Mongoose } from "mongoose";
import {List, ListItem }from "../components/List";
import TotalBar from "../components/TotalBar";
=======
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_5Uor8muy3s1tPcseUcv6NbC4");

// // <!-- // Token is created using Checkout or Elements!
// // Get the payment token ID submitted by the form: -->
const token = request.body.stripeToken; // Using Express

const charge = stripe.charges.create({
  amount: 999,
  currency: 'usd',
  description: 'Example charge',
  source: token,
});
>>>>>>> c2cf2217fd7d3d30e1e0c80384461cd26315b8f9

class Books extends Component {
  state = {
    products: [],
    categories: [],
    order: []
  };

  componentDidMount() {
    this.loadCategories();
    this.loadProducts();
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

  handleMenuClick = (id) => {
    const currentOrder = this.state.order;
    const product = this.state.products.filter(product => {
      return product._id === id;
    });
    currentOrder.push(product[0]);
    this.setState({ order: currentOrder });
  }

  calculateTotal = () => {
    const currentOrder = this.state.order;
    let prices = [];
    let total = 0;
    currentOrder.map(item => {
      prices.push(item.price);
    });
    prices.forEach(price =>{
      total += price;
    });
    return total;
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-9 sm-12">
            <Wrapper>
              <Row><h1>Please select from the menu options below</h1></Row>
              <Wrapper>
                {this.state.categories.map(category => (
                  <Category
                    key={category._id}
                    category={category.name}
                    products={this.state.products.map(product => (
                      <Card
                        handleMenuClick={this.handleMenuClick}
                        name={product.name}
                        id={product._id}
                        key={product._id}
                        image={product.img}
                        description={product.description}
                      />
                    ))}></Category>
                ))}
              </Wrapper>
            </Wrapper>
          </Col>
          <Col size="md-3 sm-12">
            {/* Right Side Jumbotron */}
            <Jumbotron>
              <h1>Your Order:</h1>
            </Jumbotron>
            <List>
              {this.state.order.map((item, i) => (
                <ListItem 
                key={i}
                name={item.name}
                price={item.price}>
                </ListItem>
              ))}
              <TotalBar
                total={this.calculateTotal()}></TotalBar>
            </List>
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
