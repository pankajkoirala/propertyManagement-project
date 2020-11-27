import React, { useState } from "react";
import Axios from "axios";
import LoginComponent from "../../component/login/login";
import { setLocalStorage } from "../../const/tokenStorage";
import { base_URL } from "../../const/base_URL";
import LoginImage from "../../assets/sample.jpg";
import "./Back.css";
const LoginContainer = (props) => {
  const [response, setResponse] = useState("");

  const login = (data) => {
    Axios({
      method: "post",
      url: base_URL + "/api/login",
      data: data,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        setResponse(res.data.message);
        setLocalStorage("token", res.data.token);
        //push to other page after login
        props.history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setResponse("username and password doesn't match");
      });
  };
  return (
    <div className="loginContainer">
      <LoginComponent login={login} />
    </div>
  );
};
export default LoginContainer;
