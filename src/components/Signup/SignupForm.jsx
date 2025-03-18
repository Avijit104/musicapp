import React, { useState } from "react";
import Logo from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import "./SignupForm.css";
import { useDispatch } from "react-redux";
import authserv from "../../appwrite/authServ";
import { login } from "../../store/authSlice";

function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const signupHandle = async (e) => {
    e.preventDefault();
    console.log(password)
    try {
      const session = await authserv.createAccount({name, email, password});
      if(session){
        const userdata = await authserv.getUserDetails();
        if(userdata){
          dispatch(login(userdata))
          navigate("/")
        }
      }
      
    } catch (error) {
      console.log(error)
    }
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
              value={name}
              onChange={(e) => (setUser(e.target.value))}
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
              value={email}
              onChange={(e) => (setEmail(e.target.value))}
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
              value={password}
              onChange={(e) => (setPass(e.target.value))}
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
