import React from "react";
import Axios from "axios";
import LoginComponent from "../../component/login/login";
import { setLocalStorage } from "../../const/tokenStorage";
import { base_URL,token_key } from "../../const/base_URL";
import "./Back.css";
const LoginContainer = (props) => {
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
        setLocalStorage(token_key, res.data.token);
        //push to other page after login
        props.history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="loginContainer">
      <LoginComponent login={login} />
    </div>
  );
};
export default LoginContainer;
