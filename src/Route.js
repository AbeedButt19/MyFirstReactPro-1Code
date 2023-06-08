import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import SignUp from "./Signup";
import Login from "./Login";

function Routee() {
  return (
    <Router>
      <NavLink />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/LogIn" element={<Login />} />
        <Route exact path="/Registration" element={<Registration />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default Routee;
