import React, { useState } from 'react'
import '../assets/Login.css'
//hooks
import  { useMutation } from '@apollo/client';
import { useForm } from '../utils/hooks';
import { LOGIN_MUTATION } from '../graphql/mutations';
import { useHistory, Link } from 'react-router-dom';

function Login(props) {
  const [errors, setErrors] = useState({});
  let history = useHistory();

  const { testChange, submitHandler, values } = useForm(loginUserCallback, {
    email: '',
    password: ''
  })

  const [loginUser] = useMutation(LOGIN_MUTATION, {
    update(_, result) {
      console.log(result);
      history.push('/swipe');
    },
    onError(err) {
      console.log(err);
      setErrors(errors);
      console.log('hit error');
    },
    variables: values
  });
  
  function loginUserCallback(){
    loginUser();
  };

    return (
        <div className="login">
          <h4>Login</h4>
          <form>
            <div className="text_area">
              <input
                type="text"
                id="email"
                name="email"
                placeholder='Email'
                className="text_input"
                value={values.email}
                onChange={testChange}
              />
              
            </div>
            <div className="text_area">
              <input
                type="password"
                id="password"
                name="password"
                placeholder='Password'
                className="text_input"
                value={values.password}
                onChange={testChange}
              />
            </div>
            <input
              type="submit"
              value="LOGIN"
              className="btn"
              onClick={submitHandler}
            />
          </form>
          <Link to="/signup">Sign Up</Link>
        </div>
      )
}

export default Login