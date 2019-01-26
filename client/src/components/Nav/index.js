import React from "react";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Mexicana Food App</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link"  href="/">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signin">Kitchen Sign in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Kitchen Sign up</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Linkedins
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {/* <a className="dropdown-item" href="#">Alex Esch</a> */}
            <a className="dropdown-item" href="https://www.linkedin.com/in/patrick-chu-90545514b">Patrick Chu</a>
            <a className="dropdown-item" href="https://www.linkedin.com/in/aosilvester/">Alex Silvester</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Hello Guest</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}


export default Nav;
