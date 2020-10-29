import React, { useState } from "react"; //, { useState } from 'react';
import "../styles/SignIn.css"

// const [username, setUsername] = useState();
// const [password, setPassword] = useState();

var username;
var password;

// password visibility
// const togglePasswordVisiblity = () => {
//   setPasswordShown(passwordShown ? false : true);
// };

// setting variables
function SetUsername(props){
  username = props.target.value;
}

function SetPassword(props){
  password = props.target.value;
}

// submit form
function handleSubmit(event){
  event.preventDefault();
}

const SignInPage = () => {
  return (
    <div>
      <h1 className="header">Sign In</h1>
      <form onSubmit={handleSubmit} className="signIn">
        <div className="inputSection">
          <label>
            {/* Username:  */}
            <input autoFocus type="text" placeholder="Username" value={username} onChange={SetUsername} 
            className="input" />
          </label>
        </div>
        <br/>
        <div className="inputSection">
          <label>
            {/* Password:  */}
            <input type="password" placeholder="Password" value={password} onChange={SetPassword} 
            className="input" />
          </label>
        </div>
        <br/>
        <input type="submit" value="Sign In" className="button"/>
      </form>
    </div>
  );
}

export default SignInPage;