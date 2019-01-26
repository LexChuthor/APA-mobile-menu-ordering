import React, { Component } from 'react';
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";

// import './style.css';
// import { Button, Container, Row, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Logout extends Component {
  state = { isLoggedIn: false };

  handleExit = event => {
    event.preventDefault();
    console.log("Back to Root");
    window.location.assign('/');
  };


  render() {
    return (
      <div>
            <Row>
              <Row><p className="product_Title mb-1">APA restaurant</p></Row>
              <Row><p className="product_Slogan pb-4">mobile restaurant ordering</p></Row>
            </Row>
            <Row>
                <div className="text-center">
                  <button className="access_Button mt-3 mb-4" onClick={this.handleExit} >Exit</button>
                </div>
            </Row>
      </div>
    );
  }
}

export default Logout;