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

        <form className="signIn" onSubmit={this.onSubmit}>
          <div className="inputSection">
            <input
              autoFocus
              className="input"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onClick={this.offCapsWarning}
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
              onKeyDown={this.onCapsDown}
              onClick={this.isCapsDown}
              tabIndex="0"
              />
            <br />
            <div className="capsWarning">
              {capsLockWarning}
            </div>
          </div>
          <br />
          <input 
            className="button" 
            type="submit" 
            value="Sign In" 
          />
        </form>

        <Link className="signUpLink" to="/SignUp">
          <p>Sign Up</p>
        </Link>

        <Link className="forgotPasswordLink" to="/forgotPassword">
          <p>Forgot Password?</p>
        </Link>
      </div>
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  // detect caps lock
  onCapsDown = (event) => {
    if (event.code == "CapsLock") {
      if (capsLockWarning == "")
        capsLockWarning = "Caps Lock is On!";
      else
        capsLockWarning = "";
      
      this.forceUpdate();
    }
  }

  isCapsDown = (event) => {
    var capsOn = event.getModifierState("CapsLock");

    if (capsOn == true)
      capsLockWarning = "Caps Lock is On!";
    else
        capsLockWarning = "";

    this.forceUpdate();
  }

  offCapsWarning = () => {
    capsLockWarning = "";
    this.forceUpdate();
  }
};

export default SignInPage;
