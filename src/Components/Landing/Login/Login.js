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
          the world around you on Shamba Shape
          Up
        </p>
      </div>

      {/* Login form */}
      <form className="form login">
        <label>Email</label>
        <input
          type={"text"}
          placeholder="Enter Your Email"
          value="ivy@gmail.com"
          name="email"
        />

        <br></br>

        <label>Password</label>
        <input
          type={"text"}
          placeholder="Enter Your Email"
          value="ivy@gmail.com"
          name="password"
          id="login-input"
        />

        <br></br>

        <button type="submit" id="login-button">
          Login
        </button>

        <br></br>

        <label id="signup">Don't have an account create one</label>
      </form>
    </div>
  );
}

export default Login;
