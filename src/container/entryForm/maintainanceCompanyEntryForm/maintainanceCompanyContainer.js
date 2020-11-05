import React from "react";
import MaintainanceCompanyComponent from "../../../component/entryForm/maintainanceCompanyEntryForm/maintainanceCompanyEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";

const MaintainanceCompanyContainer = () => {
  const MaintananceCompanyData = (data) => {
    const formData = new FormData();
    formData.append("Company_street", data.Company_street);
    formData.append("Company_city", data.Company_city);
    formData.append("Company_provience", data.Company_provience);
    formData.append("Company_country", data.Company_country);
    formData.append("Company_ZipCode", data.Company_ZipCode);
    formData.append("Company_uploadPhoto", data.Company_uploadPhoto);
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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
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
