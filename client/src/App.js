import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./view/Menu";
// import NoMatch from "./view/NoMatch";
// our navbar
import Nav from "./components/Nav";
// import Card from "./components/Card";
import kitchen from "./view/kitchen";
import linkedin from "./view/linkedin";
import signin from "./view/signin"
import  signup from "./view/signup";
import "./view/Menu.css";
import "./components/Nav/Nav.css";




class App extends Component {
  // state = {
  //   isLoggedIn: false,
  //   loginEmail: ""
  // }
  
  // handleLoginStatus = (passedStatus, passedEmail) => {
  //   console.log("APP: Loginstatus and email = " + passedStatus + " " + passedEmail);
  //   if (passedStatus) {
  //     this.setState({ isLoggedIn: true, });
  //     this.setState({ loginEmail: passedEmail });
  //   } else {
  //     this.setState({ isLoggedIn: false });
  //     this.setState({ loginEmail: passedEmail });
  //   };
  //   console.log("APP: state = " + JSON.stringify(this.state));
  // };


  // reportLogin = () => {
  //   let note = this.state.isLoggedIn;
  //   return note
  // };

  // reportEmail = () => {
  //   let email = this.state.loginEmail;
  //   return email;
  // };

  render() {
    return (
      <Router>
        <div className="menu">
          <Nav />
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/menu/:id" component={Menu} />
            <Route exact path="/kitchen" component={kitchen}/>
            <Route exact path="/linkedin" component={linkedin}/>
            <Route exact path="/signin" component={signin}/>
            <Route exact path="/signup" component={signup}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;



// comment