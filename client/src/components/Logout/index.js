import React, { Component } from 'react';
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import "./style.css"
import Stretch from "../Stretch/Stretch"

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
      <div className="center">
            <Row>
                <p className="shopping-empty">APA restaurant</p> 
            </Row>
            <Row>
                <p className="shopping-empty"> mobile restaurant ordering</p>
             </Row>
            <Row>
                <div className="text-center">
                  <button className="access_Button mt-3 mb-4" onClick={this.handleExit} >Exit</button>
                </div>
            </Row>
            <Stretch />
      </div>
    );
  }
}

export default Logout;