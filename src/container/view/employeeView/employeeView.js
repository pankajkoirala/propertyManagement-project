import React,{useState,useEffect} from "react"

import EmployeeViews from "../../../component/view/employeeView/employeeView.js"
import Axios from "axios"
import {base_URL} from "../../../const/base_URL"
import { propTypes } from "react-bootstrap/esm/Image"
import {connect} from 'react-redux'



const EmployeeView=(props)=>{
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
               props.redux_Add_employee(res.data)
          }).catch((err)=>{
            console.log(err);
          })
    
    }
    return(
        <div><EmployeeViews
        allEmployee={employee}
        /></div>
    )
}
const mapStateToProps = (state) => ({
    redux_tenantData: state.tenant,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    redux_Add_employee: (arg) => dispatch({ type:"ADD_ALL_EMPLOYEE", payload:arg }),
  
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView);
