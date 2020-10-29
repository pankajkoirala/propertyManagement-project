import React from "react"
import TenantEntryFormComponent from "../../../component/entryForm/tenantEntryForm/tenantEntryForm.js"
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";

const TenantEntry=()=>{
    const tenantData=(data)=>{
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
        formData.append("tenant_GovIdNo", data.tenant_GovIdNo);
        formData.append("tenant_DateOfBirth", data.tenant_DateOfBirth);
        formData.append("tenant_DrivingLicenceNo", data.tenant_DrivingLicenceNo);



        
        
        Axios({
          method: 'post',
          url: base_URL+"/api/tenant",
          data: formData,
          config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
          }).then((res)=>{
      console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      
      }
    return(
        <div><TenantEntryFormComponent
        tenantData={tenantData}
        /></div>
    )
}

export default TenantEntry