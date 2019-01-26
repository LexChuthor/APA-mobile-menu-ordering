import React from "react";


function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Mexicana Food App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link"  href="/">Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signin">Kitchen Sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signup">Kitchen Sign up</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Linkedins
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Alex Esch</a>
            <a class="dropdown-item" href="https://www.linkedin.com/in/patrick-chu-90545514b">Patrick Chu</a>
            <a class="dropdown-item" href="https://www.linkedin.com/in/aosilvester/">Alex Silvester</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/">Hello Guest</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}


export default Nav;
