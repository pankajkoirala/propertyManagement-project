import React,{useState,useEffect} from "react"
import ManagementCompanyViews from "../../../component/view/managementCompany/managementCompany"
import { base_URL } from "../../../const/base_URL";
import Axios from "axios"
import {connect} from 'react-redux'



const ManagementCompanyView=(props)=>{
    const [ManagementCompany,setManagementCompany]=useState([])

    useEffect(()=>{
        AllManagementCompany()
    },[])

    let AllManagementCompany=()=>{
        Axios({
            method: 'get',
            url: base_URL+"/api/managementCompany",
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
            }).then((res)=>{
                setManagementCompany(res.data);
          }).catch((err)=>{
            console.log(err);
          })
    
    }
    

    return(
        <div><ManagementCompanyViews
        ManagementCompany={ManagementCompany}
        /></div>
    )
}

  
  export default ManagementCompanyView;
