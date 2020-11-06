import React from "react";
import DeveloperCompany from "../../../component/entryForm/developersCompanyEntryForm/developerCompanyEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";

const BankAccountContainer = () => {
  const DevelopmentCompanyData = (data) => {
    const formData = new FormData();
    formData.append("Developer_street", data.Developer_Developer_street);
    formData.append("Developer_city", data.Developer_city);
    formData.append("Developer_provience", data.Developer_provience);
    formData.append("Developer_country", data.Developer_country);
    formData.append("Developer_ZipCode", data.Developer_ZipCode);
    formData.append("DeveloperCompany_photo", data.DeveloperCompany_photo);
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <DeveloperCompany DevelopmentCompanyData={DevelopmentCompanyData} />
    </div>
  );
};

export default BankAccountContainer;
