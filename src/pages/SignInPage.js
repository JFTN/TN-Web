import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css";

var capsLockWarning = "";

// password visibility
// const togglePasswordVisiblity = () => {
//   setPasswordShown(passwordShown ? false : true);
// };

class SignInPage extends React.Component {j

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <h1 className="header">Sign In</h1>

        <Link to="/SignUp">
          <button className="signUpButton" type="button">
            Sign Up
          </button>
        </Link>

        <form className="signIn" onSubmit={this.onSubmit}>
          <div className="inputSection">
            <input
              autoFocus
              className="input"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={event => {                  
                this.setState({         
                  username: event.nativeEvent.target.value
                });
              }}
            />
          </div>
          <br />
          <div className="inputSection">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={event => {
                this.setState({         
                  password: event.nativeEvent.target.value
                });
              }}
              onKeyDown={this.onKeyDown}
              tabIndex="0"
              />
            {capsLockWarning}
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
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  // detect caps lock
  onKeyDown = (event) => {
    if (event.code == "CapsLock") {
      if (capsLockWarning == "")
        capsLockWarning = "Caps Lock is On!";
      else
        capsLockWarning = "";
      
      this.forceUpdate();
    }
  }
};

export default SignInPage;
