import React,{useEffect,useState} from 'react'
import TanentViewComp from "../../../component/view/tenantView/tenantDetailView"
import { base_URL } from "../../../const/base_URL";
import Axios from "axios"
import {useParams} from "react-router-dom"



const TanentDetailViewCont=()=>{
    const [tenant,setTenant]=useState([])
    const { id } = useParams();

    
    
    useEffect(()=>{
      tenentAllData()
    },[])
    
    //using params and select one tanent to see detail
    let selectedTenantone=tenant.filter((arg)=>arg._id===id)

      let tenentAllData=()=>{
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
   

   

  //tanent update 
    const tenentUpdate=(data,ID)=>{
      const formData = new FormData();
      formData.append("street", data.street);
      formData.append("city", data.city);
      formData.append("country", data.country);
      formData.append("provience", data.provience);
      formData.append("ZipCode", data.ZipCode);
      formData.append("tenant_firstName", data.tenant_firstName);
      formData.append("tenant_lastName", data.tenant_lastName);
      formData.append("tenant_middleName", data.tenant_middleName);
      formData.append("tenant_phoneNo", data.tenant_phoneNo);
      formData.append("tenant_email", data.tenant_email);
      formData.append("tenant_photo", data.tenant_photo);
      formData.append("tenant_EId_photo", data.tenant_EId_photo);
      formData.append("tenant_TradeLicense_photo", data.tenant_TradeLicense_photo);
      formData.append("tenant_IdentityLetter_photo", data.tenant_IdentityLetter_photo);
      formData.append("tenant_SK_Properties_photo", data.tenant_SK_Properties_photo);
      formData.append("tenant_POA_photo", data.tenant_POA_photo);

       
      Axios({
        method: 'put',
        url: base_URL+"/api/tenant/"+ID,
        data: data,
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
        }).then((res)=>{
    console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    }

    
  return( 
  
  <div> 
<TanentViewComp
selectedTenantone={selectedTenantone}
tenentUpdate={tenentUpdate}
/> 
   </div>
    
    )
}


export default TanentDetailViewCont