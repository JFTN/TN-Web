import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up page</h1>
      <div>
        <label for="email">Email</label>
        <br />
        <input type="email" />

        <br />

        <label for="username">Username</label>
        <br />
        <input type="text" />

        <br />

        <label for="password">Password</label>
        <br />
        <input type="password" />

        <br />

        <label for="confirm-password">Confirm Password</label>
        <br />
        <input type="password" />

        <br />
        
        <input type="submit" value="Submit"></input>
      </div>
    </div>
  );
}

export default SignUpPage;