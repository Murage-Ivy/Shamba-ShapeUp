import React from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext(null);

function LoginProvider({ children }) {
  const navigate = useNavigate();
  /* ===Sets initial state for react interanl== */
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [loggedUser, setLoggedUser] = useState([]);
  const [errors, setErrors] = useState([]);
  /* ===Sets initial state for react interanl== */

  /* ===Checks if user's email is in the database and logs them in== */
  useEffect(() => {
    fetch("https://shamba-shape-up-data.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setLoggedUser(() => [...data]);
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  }, []);

  /* ===Checks if user email is in the database=== */
  const checkEmail = (serverUsers, loginInfo, getLogStatus) => {
    const user = serverUsers.find((user) => user.email === loginInfo.email);
    if (user) {
      fetch(`https://shamba-shape-up-data.herokuapp.com/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ isLogged: true }),
      })
        .then((res) => res.json())
        .then((data) => {
          // getLogStatus(data.isLogged);
          // store the user in localStorage
          localStorage.setItem("isLoggedIn", true);
          alert(`Success! User ${user.email} has successfully signed in!`);
          navigate("/main");
          setLoginInfo({
            email: "",
            password: "",
          });
          setErrors([]);
        })
        .catch((err) => {
          setErrors(() => [...err.message]);
          alert("Error: " + errors);
        });
    }
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
    console.log(loggedUser);
    event.preventDefault();
    checkEmail(loggedUser, loginInfo);
  };

  const value = {
    handleLoginInfo,
    handleSubmitLoginInfo,
    loginInfo,
  };
  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}

export { LoginProvider, LoginContext };
