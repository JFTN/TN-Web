import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up page</h1>
      <div>
        <label for="email">Email</label>
        <br></br>
        <input type="email"></input>

        <br></br>

        <label for="username">Username</label>
        <br></br>
        <input type="text"></input>

        <br></br>

        <label for="password">Password</label>
        <br></br>
        <input type="password"></input>

        <br></br>

        <label for="confirm-password">Confirm Password</label>
        <br></br>
        <input type="password"></input>

        <br></br>
        
        <input type="submit" value="Submit"></input>
      </div>
    </div>
  );
}

export default SignUpPage;