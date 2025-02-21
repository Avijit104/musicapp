import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import "./SignupForm.css";

function SignupForm() {
  const signupHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup-container">
      <Logo />
      <form action="">
        <p>Create your account</p>
        <div className="signup-form">
          <div className="username-input">
            <label htmlFor="user">Username</label>
            <br />
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Username"
            />
          </div>
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="password-input">
            <label htmlFor="pass">Password</label>
            <br />
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="password"
            />
          </div>
          <div className="signup-btn">
            <button
              type="submit"
              id="signup-button"
              name="signup-button"
              onClick={signupHandle}
            >
              Signup
            </button>
          </div>
        </div>
      </form>
      <p>
        Already have an account ? <Link to="/login">Click Here</Link>
      </p>
    </div>
  );
}

export default SignupForm;
