import React, { useState } from "react";
import Logo from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import authserv from "../../appwrite/authServ";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const session = await authserv.authLogin({ email, password });

      if (session) {
        const userdata = await authserv.getUserDetails();
        if (userdata) {
          dispatch(login(userdata));
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-button">
            <button
              type="submit"
              id="login-button"
              name="login-button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <p>
        Does not have any account ? <Link to="/signup">Click here</Link>
      </p>
    </div>
  );
}

export default LoginForm;
