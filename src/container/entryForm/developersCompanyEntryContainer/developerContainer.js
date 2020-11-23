import React from "react";
import DeveloperCompany from "../../../component/entryForm/developersCompanyEntryForm/developerCompanyEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import TopNavBar from "../../../shared/topNavBar.js";

const BankAccountContainer = () => {
  const DevelopmentCompanyData = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });
    formData.append("Developer_area", data.Developer_area);
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

    Axios({
      method: "post",
      url: base_URL + "/api/DeveloperCompany",
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
      <TopNavBar/>
      <DeveloperCompany DevelopmentCompanyData={DevelopmentCompanyData} />
    </div>
  );
};

export default BankAccountContainer;
