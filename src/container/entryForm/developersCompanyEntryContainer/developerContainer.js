import React from "react";
import DeveloperCompany from "../../../component/entryForm/developersCompanyEntryForm/developerCompanyEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const BankAccountContainer = () => {
  const DevelopmentCompanyData = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });
    formData.append("Developer_residence", data.Developer_residence);
    formData.append("Developer_city", data.Developer_city);
    formData.append("Developer_country", data.Developer_country);
    formData.append("DeveloperCompany_phoneNo", data.DeveloperCompany_phoneNo);
    formData.append("DeveloperCompany_Name", data.DeveloperCompany_Name);
    formData.append(
      "DeveloperCompany_RegisterationDate",
      data.DeveloperCompany_RegisterationDate
    );
    formData.append(
      "DeveloperCompany_RegisterationNumber",
      data.DeveloperCompany_RegisterationNumber
    );

    formData.append("DeveloperCompany_email", data.DeveloperCompany_email);
    formData.append(
      "DeveloperCompany_MobileNumber",
      data.DeveloperCompany_MobileNumber
    );
    
      Axios.post( base_URL + "/api/DeveloperCompany" ,formData,{
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
      <DeveloperCompany DevelopmentCompanyData={DevelopmentCompanyData} />
    </div>
  );
};

export default BankAccountContainer;
