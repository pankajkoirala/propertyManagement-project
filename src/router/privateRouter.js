import React,{useState} from "react"
import { Redirect, Route } from "react-router-dom";
 
const PrivateRouter=({ component: Component, ...rest })=>{
//   let authorize= getLocalStorage("token")
let [status,setStatus]=useState(true)
  return(
 <Route
 {...rest}
 render={(props)=>status?<Component {...props}/>:<Redirect to="/"/>}/>


  )
}
export default PrivateRouter