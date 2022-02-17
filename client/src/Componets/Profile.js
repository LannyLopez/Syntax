import React, { useState } from "react";
import "../assets/profile.css";

function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState([]);
  const [user, setUser] = useState({});
  // get user
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
    <div className="Profile">
      <form className="container">
        <div className="form-header">
          <h1>EDIT YOUR PROFILE</h1>
        </div>
        <div className="div-margin">
          <label htmlFor="email-edit">FIRST NAME:</label>
          <input type="text" id="email-edit">
            {user.firstName}
          </input>
        </div>
        <div className="div-margin">
          <label htmlFor="email-edit">LAST NAME:</label>
          <input type="text" id="email-edit">
            {user.lastName}
          </input>
        </div>
        <div className="div-margin">
          <label htmlFor="email-edit">EMAIL:</label>
          <input type="text" id="email-edit">
            {user.email}
          </input>
        </div>

        <div className="div-margin">
          <label htmlFor="username-edit">GITHUB:</label>
          <input type="text" id="username-edit">
            {user.github}
          </input>
        </div>

        <div className="multiSelect">
          <div className="selectBox" onClick={clickHandler}>
            <select>
              <option>Select your languages</option>
              {options.map((option, index) => {
                // console.log(option);
                // return;
                return <DropDownOptions value={option} keys={index} />;
              })}
            </select>
            {user.selectBox}
            <div className="overSelect"></div>
          </div>
          <div
            id="checkboxes"
            className={`${showDropdown ? "dropDown" : "hideDropdown"}`}
          >
            {options.map((option, index) => {
              // console.log(option);
              // return;
              return <DropDownOptions value={option} keys={index} />;
            })}
          </div>
        </div>
        <div>
          <h4> UPDATE YOURSELF </h4>
          <textarea></textarea>
          {user.textarea}
        </div>
        <div className="div-button">
          <button className="button" type="submit" onClick={submitHandler}>
            FINISHED
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
