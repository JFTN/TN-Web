import React from "react";
import "../styles/SignUp.css";

const SignUpPage = () => {
  return (
    <div>
      <div class="container">
        <h1>Sign Up</h1>

        <form>
          <div>
            <input type="email" required/>
            <span>Email</span>
          </div>
          <div>
            <input type="text" required/>
            <span>Username</span>
          </div>
          <div>
            <input type="password" required/>
            <span>Password</span>
          </div>
          <div>
            <input type="password" required/>
            <span>Confirm Password</span>
          </div>
          <input type="submit" value="Sign Up"/>
        </form>

        {/* <p class="tos">By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.</p> */}
      </div>
    </div>
  );
}

export default SignUpPage;