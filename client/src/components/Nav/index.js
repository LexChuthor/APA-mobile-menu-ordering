import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        EATZ POS System
      </a>
      
    <a class="navbar-brand" href="/signin">Kitchen Log In <img src= "http://icons-for-free.com/free-icons/png/512/1543351.png" height="30px"></img></a>
    <a class="navbar-brand" href="/linkedin"> <img src= "https://pbs.twimg.com/profile_images/1082424539492073477/exU8rYn8_400x400.jpg" height="30px"></img></a>
    
    </nav>
  );
}

export default Nav;
