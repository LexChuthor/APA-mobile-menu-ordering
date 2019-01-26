import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import signin from "../components/signin/signin";
import kitchen from "../components/Kitchen";
import API from "../utils/API";
import Stretch from "../components/Stretch/Stretch";

class Login extends Component {
  state = {
    isLoggedIn: false
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log("name = " + name);
    console.log("value = " + value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.validateUser({
      email: this.state.email,
      password: this.state.password
    });
    console.log("state = " + JSON.stringify(this.state));
  };

  validateUser = query => {
    API.getUser(query)
      .then(res => {
        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          this.setState({ isLoggedIn: true });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("SMC_authkey", res.data.token);
          window.location.assign("/kitchen");
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("SMC_authkey", "");
          // window.location.assign('/login');
        }
        console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <div id="loginForm" className="loginForm">
              <form id="signup" name="signup" action="/kitchen">
                <Row>
                  <h1>Kitchen Log In</h1>
                </Row>
                <Row>
                  <label className="login_email" for="login_email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="login_email"
                    placeholder="Enter your email address"
                    onChange={this.handleInputChange}
                  />
                </Row>
                <Row>
                  <label className="login_password" for="login_password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="login_password"
                    placeholder="Enter your password"
                    onChange={this.handleInputChange}
                  />
                </Row>
                <Row>
                  <button className="button" onClick={this.handleFormSubmit}>
                    Submit
                  </button>
                </Row>
              </form>
            </div>
          </Col>
        </Row>

        <Stretch />
      </Container>
    );
  }
}

export default Login;
