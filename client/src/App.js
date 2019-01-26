import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./view/Menu";
// import NoMatch from "./view/NoMatch";
// our navbar
import Nav from "./components/Nav";
// import Card from "./components/Card";
import kitchen from "./view/kitchen";
import linkedin from "./view/linkedin";
import  signin  from "./view/signin";
import "./view/Menu.css";
import "./components/Nav/Nav.css";

function App() {
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
