import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const handleLogin = (e) => {
    e.preventDefault()
  }
  return (
    <div className="login-container">
      <Logo />
      <form action="#">
        <p>Login to your account</p>
        <div className="login-form">
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="password-input">
            <label htmlFor="pass">Password</label>
            <br />
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
            />
          </div>
          <div className="login-button">
            <button type="submit" id="login-button" name="login-button">
              Login
            </button>
          </div>
        </div>
      </form>
      <p>Does not have any account ? <Link to="/signup">Click here</Link></p>
      
    </div>
  );
}

export default LoginForm;
