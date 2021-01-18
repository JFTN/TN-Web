import React from "react";
import "../styles/SignUp.css";

const SignUpPage = () => {
  return (
    <div>
      <div class="container">
        <h1>Sign Up</h1>

        <form>
          <div class="inputBox">
            <input type="email" required/>
            <label>Email</label>
          </div>
          <div class="inputBox">
            <input type="text" required/>
            <label>Username</label>
          </div>
          <div class="inputBox">
            <input type="password" required/>
            <label>Password</label>
          </div>
          <div class="inputBox">
            <input type="password" required/>
            <label>Confirm Password</label>
          </div>
          <input type="submit" value="Sign Up"/>
        </form>

        <p class="tos">By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  );
}

export default SignUpPage;