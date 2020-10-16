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
        formData.append("photo", data.photo);
        formData.append("bedromArea", data.bedromArea);
        formData.append("kitchenArea", data.kitchenArea);
        formData.append("hallArea", data.hallArea);
        formData.append("bathroomArea", data.bathroomArea);
        formData.append("NoOfBathroom", data.NoOfBathroom);
        formData.append("NoOfHall", data.NoOfHall);
        formData.append("NoOfKitchen", data.NoOfKitchen);
        formData.append("NoOfbedrom", data.NoOfbedrom);
        formData.append("bathroomRemark", data.bathroomRemark);
        formData.append("hallRemark", data.hallRemark);
        formData.append("bedroomRemark", data.bedroomRemark);
        formData.append("kitchenRemark", data.kitchenRemark);
        formData.append("Garden", data.Garden);
        formData.append("PetAllowed", data.PetAllowed);
        formData.append("Smoking", data.Smoking);
        formData.append("Balcony", data.Balcony);
        formData.append("Swimming", data.Swimming);
        formData.append("Parking", data.Parking);
 
        
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