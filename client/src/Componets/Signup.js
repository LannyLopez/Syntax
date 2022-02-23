import React, { useState } from "react";
import { MySelect } from "./MySelect";
import "../assets/signup.css";
//graphQL hooks
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "../graphql/mutations";
import { useForm } from "../utils/hooks";
import { useHistory } from "react-router-dom";

function Signup(props) {
  const [err, setErrors] = useState({});
  let history = useHistory();

  const { testChange, submitHandler, values } = useForm(newAccount, {
    firstName: "",
    lastName: "",
    github: "",
    email: "",
    password: "",
    profilePic: "",
  });

  const [addUser] = useMutation(SIGNUP_MUTATION, {
    update(proxy, result) {
      console.log(result);
      history.push("/swipe");
    },
    onError(error) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });
  function newAccount() {
    addUser();
  }
  // grab input data (first name last name github password)

  const [selected, setSelected] = useState();


  return (
    <div className="Signup">
      <form className="container">
        <div className="form-header">
          <h1>
            {" "}
            {" "}
            <br />
            SIGNUP WITH SYNTAX
          </h1>
        </div>
        <div className="div-margin">
          <label htmlFor="first-signup">FIRST NAME:</label>
          <input
            type="text"
            id="first-signup"
            name="firstName"
            value={values.firstName}
            onChange={testChange}
            placeholder=" Sam"
          />
        </div>
        <div className="div-margin">
          <label htmlFor="last-signup">LAST NAME:</label>
          <input
            type="text"
            id="last-signup"
            name="lastName"
            value={values.lastName}
            onChange={testChange}
            placeholder=" Syntax"
          />
        </div>
        <div className="div-margin">
          <label htmlFor="email-signup">EMAIL:</label>
          <input
            type="text"
            id="email-signup"
            name="email"
            value={values.email}
            onChange={testChange}
            placeholder=" Sam.Syntax@mail.com"
          />
        </div>
        <div className="div-margin">
          <label htmlFor="password-signup">PASSWORD:</label>
          <input
            type="password"
            id="password-signup"
            name="password"
            value={values.password}
            onChange={testChange}
            placeholder=" Password"
          />
        </div>
        <div className="div-margin">
          <label htmlFor="github-signup">GITHUB:</label>
          <input
            type="text"
            id="github-signup"
            name="github"
            value={values.github}
            onChange={testChange}
            placeholder=" SamSyntax"
          ></input>
        </div>
        <div className="div-margin">
          <label htmlFor="avatar-signup">IMAGE:</label>
          <input
            type="text"
            id="image-signup"
            name="profilePic"
            value={values.profilePic}
            onChange={testChange}
            placeholder=" image url"
          ></input>
        </div>
        <MySelect value={selected} onChange={setSelected} />

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
