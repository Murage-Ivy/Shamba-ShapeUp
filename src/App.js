import React from "react";
import Main from "./Components/Landing/Main./Main";
import SignUp from "./Components/Landing/SignUp/SignUp";
import Header from "./Components/Landing/Header/Header";
import Login from "./Components/Landing/Login/Login";
import PostForm from "./Components/Display/PostForm";
function App() {
  return (
    <div className="container">
      <Header />
      <Login />
      <SignUp />
      <Main />
      <br/>
    
      
     
    </div>
  );
}

export default App;
