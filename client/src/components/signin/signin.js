import React from "react";


function signin() {
  return (
    <div>
        <form id="signup" name="signup" method="post" action="/signup">
          <label for="email">Email Address</label>
          <input className="text" name="email" type="email" />
          <label for="firstname">Firstname</label>
          <input name="firstname" type="text" />
          <label for="lastname">Lastname</label>
          <input name="lastname" type="text" />
          <label for="password">Password</label>
          <input name="password" type="password" />
          <input className="btn" type="submit" value="Sign Up" />
        </form>
    </div>
    );
}

export default signin;