import React from "react";
import "./SignUp.css";
import image from "./Images/countryside-woman-holding-plant-leaves.jpg";

function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp-text">
        <h4>
          Shamba Shape <br></br>Up
        </h4>
        <div>
          <h2>Start Your Journey With Us</h2>
          <p>
            Shambe Shape Up UI. Inspirational <br></br>designs, illustrations,
            and graphic elements from the world's best designers.
          </p>
        </div>

        <div id="feedback">
          <p>
            Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit.
            Nulla libero, fugiat corrupti <br></br>aspernatur id ea maxime
            temporibus consequuntur et quo! <br></br>At corporis itaque nisi
            quod perferendis doloremque <br></br>accusamus temporibus
            distinctio!
          </p>
          <div className="one">
            <img src={image} alt="woman" />
            <span>Mkulima Hodari</span>
          </div>
        </div>
      </div>
      <form className="form sign-up">
        <label for="firstname">First Name</label>
        <input type={"text"} name="firstName" id="first" />
        <br></br>
        <label for="lastname">Last Name</label>
        <input type={"text"} name="lastName" id="second" />
        <br></br>
        <label>Email</label>
        <input type={"email"} name="email" />
        <br></br>
        <label>Telephone</label>
        <input type={"number"} name="telephone" />
        <label>Password</label>
        <input type={"password"} name="password" />
        <button type="submit" id="signup-button">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;
