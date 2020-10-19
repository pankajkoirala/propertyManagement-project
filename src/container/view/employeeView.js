import React,{useState,useEffect} from "react"

import EmployeeViews from "../../component/view/employeeView/employeeView.js"
import Axios from "axios"
import {base_URL} from "../../const/base_URL"

const EmployeeView=()=>{
    const [employee,setEmployee]=useState([])
    useEffect(()=>{
        EmployeeData()
    },[])

    let EmployeeData=()=>{
        Axios({
            method: 'get',
            url: base_URL+"/api/employee",
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
            }).then((res)=>{
                setEmployee(res.data);
          }).catch((err)=>{
            console.log(err);
          })
    
    }
    return(
        <div><EmployeeViews/></div>
    )
}

export default EmployeeView