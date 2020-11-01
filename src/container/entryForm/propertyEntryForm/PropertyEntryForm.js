import React from "react"
import PropertyEntryFormComponent from "../../../component/entryForm/PropertyEntryForm/PropertyEntryForm"
import { base_URL } from "../../../const/base_URL";
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
        formData.append("bedroomArea", data.bedroomArea);
        formData.append("NoOfbedroom", data.NoOfbedroom);
        formData.append("bedroomRemark", data.bedroomRemark);
        formData.append("bathroomArea", data.bathroomArea);
        formData.append("NoOfBathroom", data.NoOfBathroom);
        formData.append("bathroomRemark", data.bathroomRemark);
        formData.append("hallArea", data.hallArea);
        formData.append("NoOfHall", data.NoOfHall);
        formData.append("hallRemark", data.hallRemark);
        formData.append("kitchenArea", data.kitchenArea);
        formData.append("NoOfKitchen", data.NoOfKitchen);
        formData.append("kitchenRemark", data.kitchenRemark);
        formData.append("Balcony_Area", data.Balcony_Area);
        formData.append("NoOfBalcony", data.NoOfBalcony);
        formData.append("BalconyRemark", data.BalconyRemark);
        formData.append("property_community", data.property_community);
        formData.append("building_Name", data.building_Name);
        formData.append("building_Number", data.building_Number);
        formData.append("plot_Number", data.plot_Number);
        formData.append("building_floorNumber", data.building_floorNumber);
        formData.append("Muncipality_Number", data.Muncipality_Number);
        formData.append("Property_Area", data.Property_Area);
        formData.append("Property_Premise_Number", data.Property_Premise_Number);
        formData.append("Garden", data.Garden);
        formData.append("PetAllowed", data.PetAllowed);
        formData.append("Smoking", data.Smoking);
        formData.append("Swimming", data.Swimming);
        formData.append("Parking", data.Parking);
        formData.append("Title_Deed_Photo", data.Title_Deed_Photo);
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