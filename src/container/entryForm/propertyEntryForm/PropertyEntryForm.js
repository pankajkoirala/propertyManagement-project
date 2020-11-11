import React from "react";
import PropertyEntryFormComponent from "../../../component/entryForm/PropertyEntryForm/PropertyEntryForm";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";

const PropertyEntry = () => {
  const propertySend = (data) => {
    const formData = new FormData();
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("property_type", data.property_type);
    formData.append("property_price", data.property_price);
    formData.append("Parking_Number", data.Parking_Number);
    formData.append("facilities", data.facilities);
    formData.append("property_community", data.property_community);
    formData.append("building_Name", data.building_Name);
    formData.append("building_Number", data.building_Number);
    formData.append("plot_Number", data.plot_Number);
    formData.append("building_floorNumber", data.building_floorNumber);
    formData.append("Muncipality_Number", data.Muncipality_Number);
    formData.append("Property_Area", data.Property_Area);
    formData.append("Property_Premise_Number", data.Property_Premise_Number);
    formData.append("area", data.area);
    formData.append("Title_Deed_Photo", data.Title_Deed_Photo);
    formData.append("photo", data.photo);

    Axios({
      method: "post",
      url: base_URL + "/api/property",
      data: formData,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("Created successfully", "SUCCESS");
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <PropertyEntryFormComponent propertySend={propertySend} />
    </div>
  );
};

export default PropertyEntry;
