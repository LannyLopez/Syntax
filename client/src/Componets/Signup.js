import React, { useState, Component } from "react";
import { MySelect } from "./MySelect";
import "../assets/signup.css";

function Signup() {
  // grab input data (first name last name github password)
  const [selected, setSelected] = useState([]);
  const submitHandler = () => {
    console.log(selected);
  };
  return (
    <div className="Signup">
      <form className="container">
        <div className="form-header">
          <h1>
            {" "}
            <img
              className="header__logo"
              src="https://www.downloadclipart.net/medium/curly-brackets-png-picture.png"
            />{" "}
            <br />
            SIGNUP WITH SYNTAX
          </h1>
        </div>
        <div className="div-margin">
          <label htmlFor="email-signup">FIRST NAME:</label>
          <input type="text" id="email-signup" />
        </div>
        <div className="div-margin">
          <label htmlFor="email-signup">LAST NAME:</label>
          <input type="text" id="email-signup" />
        </div>
        <div className="div-margin">
          <label htmlFor="email-signup">EMAIL:</label>
          <input type="text" id="email-signup" />
        </div>
        <div className="div-margin">
          <label htmlFor="password-signup">PASSWORD:</label>
          <input type="text" id="password-signup" />
        </div>
        <div className="div-margin">
          <label htmlFor="username-signup">GITHUB:</label>
          <input type="text" id="username-signup"></input>
        </div>
        <MySelect onChange={setSelected} />

        <div className="div-button">
          <button className="button" type="submit" onClick={submitHandler}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
