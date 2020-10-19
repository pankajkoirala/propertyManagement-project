import React,{useState,useEffect} from "react"
import LeaseDisplayComponent from "../../../component/view/lease/lease"
import { base_URL } from "../../../const/base_URL";
import Axios from "axios"

const LeaseDisplay=()=>{
    const [lease,setLease]=useState([])

    useEffect(()=>{
        TenantData()
    },[])

    let TenantData=()=>{
        Axios({
            method: 'get',
            url: base_URL+"/api/lease",
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
            }).then((res)=>{
                setLease(res.data);
          }).catch((err)=>{
            console.log(err);
          })
    
    }
    
    return(
        <div><LeaseDisplayComponent
        lease={lease}
        /></div>
    )
}
 export default LeaseDisplay
