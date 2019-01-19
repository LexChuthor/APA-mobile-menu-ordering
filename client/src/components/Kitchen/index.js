import React, { Component } from "react";

class Books extends Component {
    state = {
     cards,
     score: 0,
     highscore: 0
    };
  
    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="sm-12">
            {/* Right Side Jumbotron */}
              <Jumbotron>
                <h1>Current orders:</h1>
              </Jumbotron>
                <h3>No items in the shopping cart</h3>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default Books;
  