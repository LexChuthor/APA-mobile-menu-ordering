import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import "./Menu.css";
import PayPalButton from "react-paypal-button";
// const charge = stripe.charges.create({
//   amount: 999,
//   currency: "usd",
//   source: "tok_visa",
//   receipt_email: "jenny.rosen@example.com"
// });

// stripe.charges.create(
//   {
//     amount: 2000,
//     currency: "usd",
//     source: "tok_amex", // obtained with Stripe.js
//     description: "Charge for jenny.rosen@example.com"
//   },
//   function(err, charge) {
//     // asynchronously called
//   }
// );

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
  }

  loadProducts = () => {
    API.getProducts()
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  };
  loadCategories = () => {
    API.getCategories()
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.log(err));
  };
  loadOrders = () => {
    API.getOrders()
      .then(res => this.setState({ order: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-9 sm-12">
            <Wrapper className="wood">
              <Row>
                <h1 className="shopping-empty">
                  Please select from the menu options below
                </h1>
              </Row>
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
            </Wrapper>
          </Col>
          <Col size="md-3 sm-12">
            {/* Right Side Jumbotron */}
            <Jumbotron>
              <h1 className="shopping-empty">Your Order:</h1>
            </Jumbotron>
            <h3 className="shopping-empty">No items in the shopping cart</h3>
          </Col>
        </Row>
        <Col size="md-9">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick"></input>
                <input type="hidden" name="hosted_button_id" value="PRPQCWGBUZSVN"></input>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
            </form>
        </Col>
      </Container>
    );
  }
}

export default Books;
