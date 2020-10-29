import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>Main page</h1>
      <Link to="/signIn">
        <button type="button">
          Sign In
        </button>
      </Link>
    </div>
  );
}

export default MainPage;