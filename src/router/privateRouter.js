import React,{useState} from "react"
import { Redirect, Route } from "react-router-dom";
 
const PrivateRouter=({ component: Component, ...rest })=>{
//   let authorize= getLocalStorage("token")
let [status,setStatus]=useState(false)
  return(
 <Route
 {...rest}
 render={(props)=>status?<Component {...props}/>:<Redirect to="/login"/>}/>
  )
}
export default PrivateRouter