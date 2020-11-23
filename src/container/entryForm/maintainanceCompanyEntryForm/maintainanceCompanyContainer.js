import React from "react";
import MaintainanceCompanyComponent from "../../../component/entryForm/maintainanceCompanyEntryForm/maintainanceCompanyEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import TopNavBar from "../../../shared/topNavBar.js";

const MaintainanceCompanyContainer = () => {
  const MaintananceCompanyData = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });
    formData.append("Company_area", data.Company_area);
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

    Axios({
      method: "post",
      url: base_URL + "/api/maintananceCompany",
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
      <MaintainanceCompanyComponent
        MaintananceCompanyData={MaintananceCompanyData}
      />
    </div>
  );
};

export default MaintainanceCompanyContainer;
