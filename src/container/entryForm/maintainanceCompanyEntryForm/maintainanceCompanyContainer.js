import React from "react";
import MaintainanceCompanyComponent from "../../../component/entryForm/maintainanceCompanyEntryForm/maintainanceCompanyEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const MaintainanceCompanyContainer = () => {
  const MaintananceCompanyData = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });
    formData.append("Company_residence", data.Company_residence);
    formData.append("Company_city", data.Company_city);
    formData.append("Company_country", data.Company_country);
    formData.append("Company_phoneNo", data.Company_phoneNo);
    formData.append(
      "Company_Registration_Number",
      data.Company_Registration_Number
    );
    formData.append("Company_Name", data.Company_Name);
    formData.append(
      "Company_Registeration_Date",
      data.Company_Registeration_Date
    );
    formData.append("Company_email", data.Company_email);
    formData.append("Company_Mobile_Number", data.Company_Mobile_Number);

 
    
      Axios.post(base_URL + "/api/maintananceCompany",formData,{
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
      <MaintainanceCompanyComponent
        MaintananceCompanyData={MaintananceCompanyData}
      />
    </div>
  );
};

export default MaintainanceCompanyContainer;
