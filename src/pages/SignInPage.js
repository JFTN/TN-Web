import React, { useState } from "react"; //, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/SignIn.css";

var capsLockWarning = "";

// password visibility
// const togglePasswordVisiblity = () => {
//   setPasswordShown(passwordShown ? false : true);
// };

// setting variables

// submit form
function onSubmit(event) {
  event.preventDefault();
}

// detect caps lock
function onKeyDown(event) {
  if (event.keyCode == 9) {
    capsLockWarning = "Caps Lock is On!";
    console.log("caps lock");
  } else {
    capsLockWarning = "";
  }
}

const onChange = (setter) => (event) => {
  setter(event.nativeEvent.target.value);
};

const SignInPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1 className="header">Sign In</h1>

      <Link to="/SignUp">
        <button className="signUpButton" type="button">
          Sign Up
        </button>
      </Link>

      <form className="signIn" onSubmit={onSubmit}>
        <div className="inputSection">
          <input
            autoFocus
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={onChange(setUsername)}
          />
        </div>
        <br />
        <div className="inputSection">
          {capsLockWarning}
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange(setPassword)}
            onKeyDown={onKeyDown}
          />
        </div>
        <br />
        <input 
          className="button" 
          type="submit" 
          value="Sign In" 
        />
        <Link className="forgotPassword" to="/forgotPassword">
          <p>Forgot Password?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignInPage;
