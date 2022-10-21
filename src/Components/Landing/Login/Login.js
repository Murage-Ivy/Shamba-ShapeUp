import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { LoginContext } from "./LoginContext";
function Login() {
  const{loginInfo, handleLoginInfo, handleSubmitLoginInfo} = useContext(LoginContext);

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
      <form className="form login" onSubmit={handleSubmitLoginInfo}>
        {/* ===Email input section=== */}
        <label> Email </label>

        <br />

        <input
          type={"email"}
          placeholder="Enter Your Email"
          name="email"
          id="email-login"
          autoComplete="on"
          value={loginInfo.email}
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
          value={loginInfo.password}
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
