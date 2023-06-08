import React, { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import axios, { AxiosRequestConfig } from "axios";
import { render } from "react-dom";
import App from "./App";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const client = {
    method: "GET",
    url: "http://localhost:4032/react-app/signin",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    let response;
    try {
      response = await axios.request(client);
      //setDatabase(response.data);
    } catch (err) {
      console.log(err);
    }
    console.log(response.data);
    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = response.data.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) => name === errorMessages.name && <div className="error">{errorMessages.message}</div>;

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <p className="button-container">Dont have an Account</p>
        <div className="link-container">
          <a href="/Registration">SIGN UP NOW</a>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? navigate("/sign-up") : renderForm}
      </div>
    </div>
  );
}

export default Login;
