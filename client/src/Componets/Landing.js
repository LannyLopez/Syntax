import React from "react";
import "../assets/landing.css";
import {Link} from 'react-router-dom'

function Landing() {
  return (
    <div className="Landing">
      <form className="container">
        <div className="form-header">
          <h1>
            <img
              className="header__logo" alt="logo"
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
          <Link to="/signup">
          <button className="sButton" type="button">
            SIGN UP
          </button>
          </Link>
          <Link to="/login">
            <button className="lButton" type="button">
              LOGIN
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Landing;
