import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up page</h1>
      <div>
        <input type="email" placeholder="Email"></input>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Confirm Password"></input>

        <input type="submit" value="Sign Up"></input>
        <p>By clicking "Sign Up" you are agreeing to TOS etc</p>
      </div>
    </div>
  );
}

export default SignUpPage;