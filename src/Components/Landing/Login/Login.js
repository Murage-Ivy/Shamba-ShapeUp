import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  {
    /* ===Sets initial state for react interanl== */
  }
  const [loginInfo, setLoginInfo] = useState({
    first_name: "Ivy",
    password: "fyguhjlk",
  });

  {/* ===Updates state when value changes=== */}
  const handleLoginInfo = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  {
    /* ===Handles submit login info=== */
  }
  const handleSubmitLoginInfo = (event) => {
    event.preventDefault();
    console.log(loginInfo);
  };

  return (
    <div id="login">
      {/* ===Holds login text=== */}
      <div className="login-text">
        <h2> Shamba Shape Up </h2>
        <p>
          Connect with farmers and <br />
          the world around you on Shamba Shape Up
        </p>
      </div>

      {/*===== Login form =====*/}
      <form 
      className="form login" 
      onSubmit={handleSubmitLoginInfo}>

        {/* ===Email input section=== */}
        <label> Email </label>

        <br />

        <input
          type={"email"}
          placeholder="Enter Your Email"
          name="email"
          id="email-login"
          autoComplete="on"
          onChange={handleLoginInfo}
        />

        <br />

        {/*=== Password input section=== */}
        <label> Password </label>

        <br />

        <input
          type={"password"}
          placeholder="Enter Your Email"
          name="password"
          id="password-login"
          autoComplete="current-password"
          onChange={handleLoginInfo}
        />

        <br />

        {/* ====Submit button ====*/}
        <button type="submit" id="login-button">
          Login
        </button>

        <br />

        {/*=== Sign click label ===*/}
        <Link to={"/signup"}>
        <label id="signup"> Don 't have an account create one</label>
        </Link>
      </form>
    </div>
  );
}

export default Login;
