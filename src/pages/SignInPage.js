import React from "react";

const SignInPage = () => {
  return (
    <div>
      <h1>Sign In page</h1>
      <form>
        <label>
         Username: 
          <input autoFocus type="text"/>
        </label>
        <br/>
        <label>
          Password: 
          <input type="password"/>
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default SignInPage;