import React,{useState,useEffect} from "react"
import TenantViews from "../../../component/view/tenantView/tenantView.js"
import { base_URL } from "../../../const/base_URL";
import Axios from "axios"
import {connect} from 'react-redux'



const TenantView=(props)=>{
    const [tenant,setTenant]=useState([])

    useEffect(()=>{
        TenantData()
    },[])

    let TenantData=()=>{
        Axios({
            method: 'get',
            url: base_URL+"/api/tenant",
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
            }).then((res)=>{
                setTenant(res.data);
                props.redux_Add_Tenant(res.data)
          }).catch((err)=>{
            console.log(err);
          })
    
    }
    

    return(
        <div><TenantViews
        tenant={tenant}
        /></div>
    )
}

const mapStateToProps = (state) => ({
  });
  
  const mapDispatchToProps = (dispatch) => ({
    redux_Add_Tenant: (arg) => dispatch({ type:"ADD_ALL_TENANT", payload:arg }),
  
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(TenantView);
