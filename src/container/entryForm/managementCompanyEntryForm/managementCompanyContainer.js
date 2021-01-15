import React from "react";
import ManagementCompanyComponent from "../../../component/entryForm/managementCompanyEntryForm/managementCompanyEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const ManagementCompanyContainer = () => {
  const ManagementCompanyData = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });
    formData.append("managementCompany_residence", data.managementCompany_residence);
    formData.append("managementCompany_city", data.managementCompany_city);

    formData.append(
      "managementCompany_country",
      data.managementCompany_country
    );

    formData.append(
      "managementCompany_phoneNo",
      data.managementCompany_phoneNo
    );
  
    formData.append("managementCompany_name", data.managementCompany_name);

    formData.append("managementCompany_email", data.managementCompany_email);
    formData.append(
      "managementCompany_MobileNumber",
      data.managementCompany_MobileNumber
    );

     
      Axios.post( base_URL + "/api/managementCompany",formData,{
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
      <ManagementCompanyComponent
        ManagementCompanyData={ManagementCompanyData}
      />
    </div>
  );
};

export default ManagementCompanyContainer;
