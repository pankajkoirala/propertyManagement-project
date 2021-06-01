import React from "react";
import PropertyEntryFormComponent from "../../../component/entryForm/PropertyEntryForm/PropertyEntryForm";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";
import { connect } from "react-redux";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const PropertyEntry = (props) => {
  const propertySend = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("property_type", data.property_type);
    formData.append("property_price", data.property_price);
    formData.append("facilities", data.facilities);
    formData.append("property_community", data.property_community);
    formData.append("plot_no", data.plot_no);
    formData.append("building_Number", data.building_Number);
    formData.append("building_floorNumber", data.building_floorNumber);
    formData.append("Makani_Number", data.Makani_Number);
    formData.append("Property_Area", data.Property_Area);
    formData.append("Property_Premise_Number", data.Property_Premise_Number);
    formData.append("area", data.area);
    formData.append("Property_ownerName", data.Property_ownerName);
    formData.append("developerCompany", data.developerCompany);
    formData.append("managementCompany", data.managementCompany);
    formData.append("unitNo", data.unitNo);



      
      Axios.post( base_URL + "/api/property", formData,{
        headers: {
          [token_key]: getLocalStorage(token_key),
        },
      })
   
      .then((res) => {
        notification("Created successfully", "SUCCESS");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <PropertyEntryFormComponent
        propertySend={propertySend}
        Redux_ManagementCompanyData={
          props.Redux_ManagementCompanyData.managementCompany
        }
        redux_DeveloperCompanyData={
          props.redux_DeveloperCompanyData.DeveloperCompany
        }
        Redux_OwnerData={props.Redux_OwnerData.owner}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_ManagementCompanyData: state.managementCompany,
  redux_DeveloperCompanyData: state.DeveloperCompany,
  Redux_OwnerData: state.owner,
});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_invoice: (arg) =>
    dispatch({ type: "ADD_ALL_INVOICE", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyEntry);
