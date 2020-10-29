import React,{useState,useEffect} from "react"
import TenantViews from "../../../component/view/tenantView/tenantView.js"
import { base_URL } from "../../../const/base_URL";
import Axios from "axios"



const TenantView=()=>{
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

export default TenantView