import React from "react"
import PropertyEntryFormComponent from "../../component/entryForm/PropertyEntryForm/PropertyEntryForm.js"
import { base_URL } from "../../const/base_URL";
import Axios from "axios";


const PropertyEntry=()=>{
  
      const propertySend=(data)=>{
        const formData = new FormData();
        formData.append("street", data.street);
        formData.append("city", data.city);
        formData.append("country", data.country);
        formData.append("property_type", data.property_type);
        formData.append("property_price", data.property_price);
        formData.append("property_status", data.property_status);
        formData.append("BHK", data.BHK);
        formData.append("toilet", data.toilet);
        formData.append("photo", data.photo);
        
        
        Axios({
          method: 'post',
          url: base_URL+"/api/property",
          data: formData,
          config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
          }).then((res)=>{
      console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      
      }
    
    return(
        <div><PropertyEntryFormComponent
        propertySend={propertySend}
        /></div>
    )
}

export default PropertyEntry