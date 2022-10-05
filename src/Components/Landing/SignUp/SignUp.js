import React, { useEffect, useState } from "react";
import "./SignUp.css";
import image from "./Images/countryside-woman-holding-plant-leaves.jpg";

function SignUp() {
  // sets the initail state of user info
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    telephone: "",
    password: "",
  });

  // updates the user state when user enters data in the input field
  function handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  // Function handles submit sign up form
  function handleSubmit(event) {
    event.preventDefault();
    // create an object that holds user info
    const user = {
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      email: userInfo.email,
      telephone: userInfo.telephone,
      password: userInfo.password,
    };
    console.log("This is the submitted info", user);

    // Do a post request
    fetch("http://localhost:4000/Farmers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div className="signUp">
      <div className="signUp-text">
        <h4>
          Shamba Shape <br /> Up
        </h4>
        <div>
          <h2> Start Your Journey With Us </h2>
          <p>
            Shambe Shape Up UI.Inspirational <br /> designs, illustrations, and
            graphic elements from the world 's best designers.
          </p>
        </div>
        <div id="feedback">
          <p>
            Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
            Nulla libero, fugiat corrupti <br /> aspernatur id ea maxime
            temporibus consequuntur et quo! <br /> At corporis itaque nisi quod
            perferendis doloremque <br />
            accusamus temporibus distinctio!
          </p>
          <div className="one">
            <img src={image} alt="woman" />
            <span> Mkulima Hodari </span>
          </div>
        </div>
      </div>
      <form className="form sign-up" onSubmit={handleSubmit}>
        <label htmlFor="firstname"> First Name </label>
        <input
          type={"text"}
          name="first_name"
          id="first"
          value={userInfo.first_name}
          onChange={handleChange}
        />
        <br /> <label htmlFor="lastname"> Last Name </label>
        <input
          type={"text"}
          name="last_name"
          id="second"
          value={userInfo.last_name}
          onChange={handleChange}
        />
        <br /> <label> Email </label>
        <input
          type={"email"}
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <br /> <label> Telephone </label>
        <input
          type={"tel-country-code"}
          name="telephone"
          value={userInfo.telephone}
          onChange={handleChange}
        />
        <label> Password </label>
        <input
          type={"password"}
          name="password"
          value={userInfo.password}
          autoComplete={"current-password"}
          onChange={handleChange}
        />
        <button type="submit" id="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default SignUp;
