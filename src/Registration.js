import React, { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { render } from "react-dom";
import axios, { AxiosRequestConfig } from "axios";
import App from "./App";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, email, pass } = document.forms[0];
    const client = {
      method: "POST",
      url: "http://localhost:4032/react-app/registration",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username: uname.value,
        email: email.value,
        password: pass.value
      }
    };
    console.log(client);

    let response;
    try {
      response = await axios.request(client);
      //setDatabase(response.data);
    } catch (err) {
      console.log(err);
    }

    // Compare user info
    if (response) {
      setIsSubmitted(true);
    }
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <p className="button-container">Already have an Account</p>
        <div className="link-container">
          <a href="/">LogIn Form</a>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? navigate("/LogIn") : renderForm}
      </div>
    </div>
  );
}

export default Login;
