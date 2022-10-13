import React from "react";
import { useState } from "react";
import SignUp from "./Components/Landing/SignUp/SignUp";
import Header from "./Components/Landing/Header/Header";
import Login from "./Components/Landing/Login/Login";
import Main from "./Components/Landing/Main/Main";
import { Route, Routes } from "react-router-dom";
import { LoginProvider } from "./Components/Landing/Login/LoginContext";

function App() {
  const [logged, setLogged] = useState(false);
  function getLogStatus(logStatus) {
    setLogged(logStatus);
    console.log("This is the status when user loggs in", logStatus);
  }
  const isLogged = localStorage.getItem("isLoggedIn");
  // console.log("This is the status when user logs out", logged);

  // const [errors, setErrors] = useState([]);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={isLogged ? <Main /> : <Header />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/main"
          element={<Main logged={logged} setLogged={setLogged} />}
        />
        <Route path="/main/:id" element={<Main />} />

        <Route
          path="/login"
          element={
            <LoginProvider>
              <Login getLogStatus={getLogStatus} logged={logged} />
            </LoginProvider>
          }
        />
      </Routes>

      <br />
    </div>
  );
}

export default App;
