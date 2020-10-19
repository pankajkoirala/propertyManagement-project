import React,{useState,useEffect} from "react"
import LeaseEntryFormComponent from "../../component/entryForm/lease/lease"
import { base_URL } from "../../const/base_URL";
import Axios from "axios";

const LeaseEntry=()=>{
const[property,setProperty]=useState([])
const[tenant,setTenant]=useState([])
useEffect(()=>{
  propertyData()
  TenantData()
},[])


    const leaseData=(data)=>{
        const formData = new FormData();
        formData.append("chequeList", data.chequeList);
        formData.append("lease_enterDate", data.lease_enterDate);
        formData.append("tenants", data.tenants);
        formData.append("lease_Term", data.lease_Term);
        formData.append("commenceDate", data.commenceDate);
        formData.append("expirationDate", data.expirationDate);
        formData.append("rentAmount", data.rentAmount);
        formData.append("firstDueDate", data.firstDueDate);
        formData.append("frequency", data.frequency);
        formData.append("gracePeriod", data.gracePeriod);
        formData.append("late_feeType", data.late_feeType);
        formData.append("lateFeeAmount", data.lateFeeAmount);
        formData.append("securityDeposite", data.securityDeposite);
        formData.append("securityfirstDueDate", data.securityfirstDueDate);
        formData.append("property", data.property);

        formData.append("photo", data.photo);

        Axios({
          method: 'post',
          url: base_URL+"/api/lease",
          data: formData,
          config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
          }).then((res)=>{
      console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      
      }
//property data
let propertyData=()=>{
  Axios({
      method: 'get',
      url: base_URL+"/api/property",
      config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
      }).then((res)=>{
          setProperty(res.data);
    }).catch((err)=>{
      console.log(err);
    })

}
//tenant data
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
        <div><LeaseEntryFormComponent
       leaseData={leaseData}
       property={property}
       tenant={tenant}       
        /></div>
    )
}

export default LeaseEntry