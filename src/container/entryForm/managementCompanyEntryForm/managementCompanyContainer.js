import React from "react";
import ManagementCompanyComponent from "../../../component/entryForm/managementCompanyEntryForm/managementCompanyEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";

const ManagementCompanyContainer = () => {
  const ManagementCompanyData = (data) => {
    const formData = new FormData();
    formData.append("managementCompany_street", data.managementCompany_street);
    formData.append("managementCompany_city", data.managementCompany_city);
    formData.append(
      "managementCompany_provience",
      data.managementCompany_provience
    );
    formData.append(
      "managementCompany_country",
      data.managementCompany_country
    );
    formData.append(
      "managementCompany_ZipCode",
      data.managementCompany_ZipCode
    );
    formData.append("managementCompany_photo", data.managementCompany_photo);
    formData.append(
      "managementCompany_phoneNo",
      data.managementCompany_phoneNo
    );
    formData.append(
      "managementCompany_Registeration_Number",
      data.managementCompany_Registeration_Number
    );
    formData.append("managementCompany_name", data.managementCompany_name);
    formData.append(
      "managementCompany_Registeration_Date",
      data.managementCompany_Registeration_Date
    );
    formData.append("managementCompany_email", data.managementCompany_email);
    formData.append(
      "managementCompany_MobileNumber",
      data.managementCompany_MobileNumber
    );

    Axios({
      method: "post",
      url: base_URL + "/api/managementCompany",
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
