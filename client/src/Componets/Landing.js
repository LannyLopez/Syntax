import React from "react";
import "../assets/landing.css";

function Landing() {
  function submitHandler(event) {
    event.preventDefault();
    //  grab user data from form and languages from selected
    //on creation success, history push to homepage
    //on creation failure, error message
    console.log("submit");
  }
  return (
    <div className="Landing">
      <form className="container">
        <div className="form-header">
          <h1>
            <img
              className="header__logo"
              src="https://www.downloadclipart.net/medium/curly-brackets-png-picture.png"
            />{" "}
            <br />
            SYNTAX
          </h1>
          <p className="welcome">
            Welcome to SYNTAX! <br /> Hire, Connect & Collaborate in our world
            of coding!
          </p>
        </div>

        <div className="sign-button">
          <button className="sButton" type="submit" onClick={submitHandler}>
            SIGN UP
          </button>
          {/* </div> */}
          {/* <div className="log-button"> */}
          <button className="lButton" type="submit" onClick={submitHandler}>
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Landing;
