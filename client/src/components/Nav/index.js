import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        EATZ POS System
      </a>
      
      <span className="login-btn"  role="button" tabIndex="0">
      Employee Log In
    </span>
    </nav>
  );
}

export default Nav;
