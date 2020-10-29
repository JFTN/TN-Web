import React from "react";

var username;
var password;

function SetUsername(props){
  username = props.target.value;
}

function SetPassword(props){
  password = props.target.value;
}

function handleSubmit(event){
  event.preventDefault();
}

const SignInPage = () => {
  return (
    <div>
      <h1>Sign In page</h1>
      <form onSubmit={handleSubmit}>
        <label>
         Username: 
          <input autoFocus type="text" value={username} onChange={SetUsername}/>
        </label>
        <br/>
        <label>
          Password: 
          <input type="password" value={password} onChange={SetPassword}/>
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default SignInPage;