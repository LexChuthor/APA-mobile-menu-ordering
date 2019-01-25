import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import Category from "../components/Category";
import { List, ListItem } from "../components/List";
import TotalBar from "../components/TotalBar";
import SubmitOrderBtn from "../components/SubmitOrderBtn";

import "./Menu.css"
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
// var stripe = require("stripe")("sk_test_5Uor8muy3s1tPcseUcv6NbC4");

// // <!-- // Token is created using Checkout or Elements!
// // Get the payment token ID submitted by the form: -->
// const token = request.body.stripeToken; // Using Express

// const charge = stripe.charges.create({
//   amount: 999,
//   currency: 'usd',
//   description: 'Example charge',
//   source: token,
// });

class Menu extends Component {
  state = {
    products: [],
    categories: [],
    order: [],
    orderName: "default"
  };

  componentDidMount() {
    this.loadProducts();
  };

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        API.getCategories()
          .then(res2 => {
            this.setState({ products: res.data, categories: res2.data })
          })
          .catch(err => console.log(err))
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
  submitOrder = event => {
    event.preventDefault();
    let total = this.calculateTotal();
    if (this.state.order.length > 0) {
      API.saveOrder({
        name: this.state.orderName,
        product: this.state.order,
        price: total
      })
        .then(res => console.log(this.state.order))
        .catch(err => console.log(err));
    }
  };
  getACategory = (name) => {
    let productList = [];
    let currentCats = this.state.categories
    let categoryObj = currentCats.filter(category => {
      return category.name === name;
    });
    categoryObj[0].product.forEach(product => {
      productList.push(this.state.products.find(item => {
        return item._id === product
      }));
    });
    return productList;
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
    prices.forEach(price => {
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
                    products={this.getACategory(category.name).map(product => (
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
              <SubmitOrderBtn handleClick={this.submitOrder} />
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

export default Menu;
