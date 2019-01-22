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
import { Mongoose } from "mongoose";
import {List, ListItem }from "../components/List";
import TotalBar from "../components/TotalBar";

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
      </Container>
    );
  }
}

export default Books;
