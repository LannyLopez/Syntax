import React, { useState } from "react";
import "../assets/signup.css";

function Signup() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState([]);
  const options = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "MYSQL",
    "REACT",
    "EXPRESS.JS",
    "MONGODB",
    "NODE.JS",
    "NOSQL",
  ];
  function clickHandler(event) {
    setShowDropdown(!showDropdown);
  }
  function submitHandler(event) {
    event.preventDefault();
    //  grab user data from form and languages from selected
    //on creation success, history push to homepage
    //on creation failure, error message
    console.log("submit");
  }
  function DropDownOptions(props) {
    const isInArray = selected.findIndex((e) => e === props.value);
    function handleChange(event) {
      if (isInArray >= 0) {
        const update = [...selected].filter((e) => e != event.target.value);
        setSelected(update);
      } else {
        setSelected([...selected, event.target.value]);
      }
    }
    return (
      <label htmlFor={props.value}>
        <input
          type="checkbox"
          id={props.value}
          value={props.value}
          onChange={handleChange}
          checked={isInArray >= 0 ? true : false}
        />
        {props.value}
      </label>
    );
  }

  return (
    <div className="Signup">
      <form className="container">
        <div className="form-header">
          <h1>SIGNUP WITH SYNTAX</h1>
        </div>
        <div className="row">
          <label htmlFor="username-signup">GITHUB URL:</label>
          <input type="text" id="username-signup" />
        </div>
        <div>
          <label htmlFor="email-signup">FIRST NAME:</label>
          <input type="text" id="email-signup" />
        </div>
        <div>
          <label htmlFor="email-signup">LAST NAME:</label>
          <input type="text" id="email-signup" />
        </div>
        <div>
          <label htmlFor="email-signup">EMAIL:</label>
          <input type="text" id="email-signup" />
        </div>
        <div>
          <label htmlFor="password-signup">PASSWORD:</label>
          <input type="text" id="password-signup" />
        </div>

        <div className="multiselect">
          <div className="selectBox" onClick={clickHandler}>
            <select>
              <option>Select your languages</option>
            </select>
            <div className="overSelect"></div>
          </div>
          <div
            id="checkboxes"
            className={`${showDropdown ? "" : "hideDropdown"}`}
          >
            {options.map((option, index) => {
              // console.log(option);
              // return;
              return <DropDownOptions value={option} keys={index} />;
            })}
          </div>
        </div>
        <div>
          <h4> ALL ABOUT YOU</h4>
          <textarea></textarea>
        </div>
        <div>
          <button className="button" type="submit" onClick={submitHandler}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
