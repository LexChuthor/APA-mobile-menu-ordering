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
import Stretchmini from "../components/Stretchmini/Stretchmini";

class Books extends Component {
  state = {
    products: [],
    categories: [],
    order: [],
    orderName: this.props.match.params.id
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
       return prices.push(item.price);
    });
    prices.forEach(price => {
      total += price;
    });
    return total;
  }

  render() {
    return (
      <Container >
        <Row >
          <Col size="md-9 sm-12">
            <Wrapper className="wood">
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
              <h1 className="shopping-empty">Your Order:</h1>
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
        <Col size="md-9">
          <Wrapper>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick"></input>
                <input type="hidden" name="hosted_button_id" value="PRPQCWGBUZSVN"></input>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
            </form>

          </Wrapper>
        </Col>
        <Stretchmini/>
      </Container>

    );
  }
}

export default Books;
