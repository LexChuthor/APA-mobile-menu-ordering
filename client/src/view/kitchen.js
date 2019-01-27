import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Wrapper from "../components/Wrapper";
import OrderCard from "../components/OrderCard";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import OrderCompleteBtn from "../components/OrderCompleteBtn";


class Kitchen extends Component {
  state = {
    products: [],
    orders: [],
    name: "",
    img: "",
    description: "",
    price: 0,
    category: "",
  };

  componentDidMount = () => {
    this.loadOrders();
  }
  loadOrders = () => {
    API.getOrders()
      .then(res =>
        API.getProducts()
          .then(res2 => {
            this.setState({ orders: res.data, products: res2.data })
          })
      )
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    let category = this.state.category;
    API.saveProduct({
      name: this.state.name,
      img: this.state.img,
      description: this.state.description,
      price: this.state.price,
    })
      .then(function (res) {
        console.log(res);
        API.updateCategoryWithProduct(category, res.data)
      })
      .then(res => this.loadOrders())
      .catch(function (err) {
        console.log(err)
      })
  }
  markOrderComplete = id => {
    API.updateOrder(id, { completed: true })
      .then(res => this.loadOrders())
      .catch(err => console.log(err));
  };
  translateOrder = (code, products) => {
    const orderItem = products.find(product => {
      return product._id === code;
    });
    return orderItem.name;
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            {/*  Jumbotron */}
            <Wrapper>
              {console.log(this.state.orders)}
              {this.state.orders.map((order, i) => (
                order.completed === false &&
                <OrderCard
                  key={i}
                  id={order._id}
                  products={this.state.products}
                  translateOrder={this.translateOrder}
                  orderName={order.name}
                  items={order.product}
                >
                  <OrderCompleteBtn onClick={() => this.markOrderComplete(order._id)} />
                </OrderCard>
              ))}
            </Wrapper>
          </Col>
        </Row>
        <Container fluid>
          <Row>
            <Col size="sm-6">
              <form id="signup" name="signup" action="/kitchen">
                <Row>Add an Item </Row>
                <Row>
                  <label htmlFor="Name">Name</label>
                </Row>
                <Row>
                  <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="New Product"
                  />
                </Row>
                <Row>
                  <label htmlFor="Img">Image</label>
                </Row>
                <Row>
                  <Input
                    name="img"
                    onChange={this.handleInputChange}
                    value={this.state.img}
                    placeholder="Enter URL"
                  />
                </Row>
                <Row>
                  <label htmlFor="Description">Description</label>
                </Row>
                <Row>
                  <TextArea
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    placeholder="Enter Description"
                  />
                </Row>
                <Row>
                  <label htmlFor="Price">Price</label>
                </Row>
                <Row>
                  <Input
                    name="price"
                    value={this.state.price}
                    onChange={this.handleInputChange}
                    type="double"
                  />
                </Row>
                <Row>
                  <label htmlFor="Category">Category</label>
                </Row>
                <Row>
                  <Input
                    name="category"
                    value={this.state.category}
                    onChange={this.handleInputChange}
                    placeholder="Enter existing or new category"
                  />
                </Row>
                <Row>
                  <FormBtn
                    onClick={this.handleFormSubmit} />

                </Row>
              </form>
            </Col>
            <Col size="sm-6">
            {/* <QRCode value="www.google.com"/> */}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Kitchen;
