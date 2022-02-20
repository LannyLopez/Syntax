import React, { useState } from "react";
import { MySelect } from "./MySelect";
import "../assets/profile.css";

function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState([]);
  const [user, setUser] = useState({});

  const submitHandler = () => {
    console.log(selected);
  };
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
        <div>
          <h4> CREATE YOUR BIO </h4>
          <textarea></textarea>
          {user.textarea}
        </div>
        <MySelect onChange={setSelected} />

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
