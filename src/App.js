import React from "react";
import Main from "./Components/Landing/Main./Main";
import SignUp from "./Components/Landing/SignUp/SignUp";
import Header from "./Components/Landing/Header/Header";
import Login from "./Components/Landing/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <br />
    </div>
  );
}

export default App;
