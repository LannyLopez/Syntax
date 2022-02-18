import React from 'react'
import '../assets/Login.css'

function Login() {
    return (
        <div className="login">
          <h4>Login</h4>
          <form>
            <div className="text_area">
              <input
                id="username"
                name="username"
                placeholder='Username'
                className="text_input"
  
              />
            </div>
            <div className="text_area">
              <input
                type="password"
                id="password"
                name="password"
                placeholder='Password'
                className="text_input"
  
              />
            </div>
            <input
              type="submit"
              value="LOGIN"
              className="btn"
  
            />
          </form>
          <a className="link" href="/Signup">Sign Up</a>
        </div>
      )
}

export default Login