import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  /* ===Sets initial state for react interanl== */
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [loggedUser, setLoggedUser] = useState();
  const [logged, setLogged] = useState(false);
  /* ===Sets initial state for react interanl== */

  /* ===Checks if user's email is in the database and logs them in== */
  useEffect(() => {
    fetch("http://localhost:4000/Farmers")
      .then((res) => res.json())
      .then((data) => {
        const user = checkEmail(data, loginInfo);
        if (user) {
          setLoggedUser(user);
        }
      });
  }, [loginInfo]);

  const checkEmail = (serverUsers, loginInfo) => {
    const user = serverUsers.find((user) => user.email === loginInfo.email);
    if (user) return user;
  };

  /* ===Updates state when value changes=== */
  const handleLoginInfo = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  /* ===Handles submit login info=== */
  const handleSubmitLoginInfo = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4000/Farmers/${loggedUser.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isLogged: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLogged((logged) => (logged = data.isLogged));
        setLoginInfo({
          email: "",
          password: "",
        });
      })
      .catch((error) => console.log(error));
    if (logged) {
      navigate("/main");
    }
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
