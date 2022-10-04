import React from "react";
import "./Login.css";

function Login() {
  return (
    <div id="login">
      {/* Holds login text */}
      <div className="login-text">
        <h2>Shamba Shape Up</h2>
        <p>
          Connect with farmers and
          <br></br>
          the world around you on Shamba Shape Up
        </p>
      </div>

      {/* Login form */}
      <form className="form login">
        {/* Email input section */}
        <label>Email</label>
        <br></br>
        <input
          type={"email"}
          placeholder="Enter Your Email"
          name="email"
          id="email-login"
        />

        <br></br>
        {/* Password input section */}
        <label>Password</label>
        <br></br>
        <input
          type={"password"}
          placeholder="Enter Your Email"
          name="password"
          id="password-login"
          autoComplete="current-password"
        />

        <br></br>
        {/* Submit button */}
        <button type="submit" id="login-button">
          Login
        </button>

        <br></br>
        {/* Sign click label */}
        <label id="signup">Don't have an account create one</label>
      </form>
    </div>
  );
}

export default Login;
