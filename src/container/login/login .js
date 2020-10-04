import React,{useState} from "react"
import Axios from "axios"
import LoginComponent from "../../component/login/login" 
import {setLocalStorage} from "../../const/tokenStorage"
import {base_URL} from "../../const/base_URL"



const LoginContainer=()=>{
    const[response,setResponse]=useState("")

    const login=(data)=>{
        Axios({
          method: 'post',
          url: base_URL+'/api/login',
          data: data,
          config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
          }).then((res)=>{
            setResponse(res.data.message);
            setLocalStorage("token",res.data.token)
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
          setResponse("username and password doesnt match");
        })}
    return(
        <div><LoginComponent
        login={login}
        /></div>
    )
}
export default LoginContainer