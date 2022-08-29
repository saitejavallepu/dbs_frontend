import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

import "./loginstyles.css";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
const navigate = useNavigate();
  const database = [
    {
      username: "admin",
      password: "admin",
    },
    {
      username: "admin1",
      password: "admin1",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

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

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div class="login-page">
    <div class="form">
      <form class="login-form" onSubmit={handlesubmit}>
        <input id='col' type="text" name="uname" placeholder="username"/>
        <input id='col' type="password" name="pass" placeholder="password"/>
        <button>login</button>
        
      </form>
    </div>
  </div>
  );

  return (
    // isSubmitted ? <Dashboard/> : renderForm
    <div className="app">
      <div className="login-form">
        <div>{isSubmitted ? navigate("/dashboard") : renderForm}</div>
      </div>
    </div>
  );
}

export default Login;
