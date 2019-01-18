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
    let addition;
    API.getProductbyId(id)
      .then(res =>
        addition = res.data)
      .catch(err => console.log(err));
    const currentOrder = this.state.order;
    currentOrder.push(addition);
    console.log(addition);
    this.setState({ order: currentOrder });
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
                        onClick={()=> this.handleMenuClick(this.props.match.params._id)}
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
            {console.log(this.state.order)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
