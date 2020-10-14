import React,{useEffect,useState} from 'react'
import TanentViewComp from "../../component/view/tenantView/tenantDetailView"
import { base_URL } from "../../const/base_URL";
import Axios from "axios"
import {useParams} from "react-router-dom"



const TanentDetailViewCont=()=>{
    const [tenant,setTenant]=useState([])
    const { id } = useParams();

    useEffect(()=>{
        TenantData()
    },[])

    let selectedTenantone=tenant.filter((arg)=>arg._id===id)

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
  
  <div> 
<TanentViewComp
selectedTenantone={selectedTenantone}
/> 
   </div>
    
    )
}


export default TanentDetailViewCont