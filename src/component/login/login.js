import React, { useState } from "react";
import "./login.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import { LoginValidator } from "../../utility/validation/loginValidation";
import icon from "../../assets/icon.png";

const LoginComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    props.login(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <img src={icon} alt="" />
        <div className="group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="group">
          <input type="submit" className="submit-btn" />
        </div>
      </form>
    </div>
  );
};
export default LoginComponent;
