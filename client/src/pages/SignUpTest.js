import React, { useState } from "react";
import "../assets/signup.css";
import { useMutation } from '@apollo/client'
import { SIGNUP_MUTATION } from '../graphql/mutations'

function SignupTest() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        github: '',
        email: '',
        password: ''
    })

    const testChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    }
    
    const [addUser, { loading }] = useMutation(SIGNUP_MUTATION, {
        update(proxy, result){
            console.log(result)
        },
        variables: values
    })

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
    addUser();

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
        <div className="div-margin">
          <label htmlFor="first-signup">FIRST NAME:</label>
          <input type="text" id="first-signup" name="firstName" value={values.firstName} onChange={testChange}/>
        </div>
        <div className="div-margin">
          <label htmlFor="last-signup">LAST NAME:</label>
          <input type="text" id="last-signup" name="lastName" value={values.lastName} onChange={testChange}/>
        </div>
        <div className="div-margin">
          <label htmlFor="email-signup">EMAIL:</label>
          <input type="text" id="email-signup" name="email" value={values.email} onChange={testChange}/>
        </div>
        <div className="div-margin">
          <label htmlFor="password-signup">PASSWORD:</label>
          <input type="text" id="password-signup" name="password" value={values.password} onChange={testChange}/>
        </div>
        <div className="div-margin">
          <label htmlFor="github-signup">GITHUB:</label>
          <input type="text" id="github-signup" name="github" value={values.github} onChange={testChange}></input>
        </div>

        <div className="multiselect">
          <div className="selectBox" onClick={clickHandler}>
            <select>
              <option>Select your languages</option>
              {options.map((option, index) => {
                // console.log(option);
                // return;
                return <DropDownOptions value={option} keys={index} />;
              })}
            </select>

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
          <h4> ALL ABOUT YOU</h4>
          <textarea></textarea>
        </div>
        <div className="div-button">
          <button className="button" type="submit" onClick={submitHandler}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupTest;
