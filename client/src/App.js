import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./view/Menu";
import Detail from "./view/Detail";
// import NoMatch from "./view/NoMatch";
// our navbar
import Nav from "./components/Nav";
// import Card from "./components/Card";
import kitchen from "./view/kitchen";
import linkedin from "./view/linkedin";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu/:id" component={Detail} />
          <Route exact path="/kitchen" component={kitchen}/>
          <Route exact path="/linkedin" component={linkedin}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



// comment