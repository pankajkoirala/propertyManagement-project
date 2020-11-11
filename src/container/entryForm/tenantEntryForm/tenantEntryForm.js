import React from "react";
import TenantEntryFormComponent from "../../../component/entryForm/tenantEntryForm/tenantEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";

const TenantEntry = () => {
  const tenantData = (data) => {
    const formData = new FormData();
    formData.append("area", data.area);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("tenant_Name", data.tenant_Name);
    formData.append("company_Name", data.company_Name);
    formData.append("tenant_phoneNo", data.tenant_phoneNo);
    formData.append("tenant_email", data.tenant_email);
    formData.append("tenant_photo", data.tenant_photo);
    formData.append("tenant_EId_photo", data.tenant_EId_photo);
    formData.append(
      "tenant_TradeLicense_photo",
      data.tenant_TradeLicense_photo
    );
    formData.append(
      "tenant_IdentityLetter_photo",
      data.tenant_IdentityLetter_photo
    );
    formData.append(
      "tenant_SK_Properties_photo",
      data.tenant_SK_Properties_photo
    );
    formData.append("tenant_POA_photo", data.tenant_POA_photo);
    formData.append("tenant_GovIdNo", data.tenant_GovIdNo);
    formData.append(
      "DateOfBirth_registrationDate",
      data.DateOfBirth_registrationDate
    );
    formData.append("tenant_DrivingLicenceNo", data.tenant_DrivingLicenceNo);

    Axios({
      method: "post",
      url: base_URL + "/api/tenant",
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
      <TenantEntryFormComponent tenantData={tenantData} />
    </div>
  );
};

export default TenantEntry;
