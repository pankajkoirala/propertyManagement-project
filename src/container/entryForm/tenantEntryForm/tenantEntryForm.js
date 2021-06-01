import React from "react";
import TenantEntryFormComponent from "../../../component/entryForm/tenantEntryForm/tenantEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const TenantEntry = () => {
  const tenantData = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });

    if (data.TenentType === "Person") {
      formData.append("TenentType", data.TenentType);
      formData.append("tenant_Name", data.tenant_Name);
      formData.append("tenant_phoneNo", data.tenant_phoneNo);
      formData.append(
        "DateOfBirth_registrationDate",
        data.DateOfBirth_registrationDate
      );
      formData.append("tenant_GovIdNo", data.tenant_GovIdNo);
      formData.append("tenant_email", data.tenant_email);
      formData.append("city", data.city);
      formData.append("area", data.area);
      formData.append("country", data.country);
      formData.append(
        "tenant_GovIdNo_expireDate",
        data.tenant_GovIdNo_expireDate
      );
      formData.append(
        "tenant_passport_expireDate",
        data.tenant_passport_expireDate
      );
      formData.append("tenant_passportNo", data.tenant_passportNo);
    } else {

      formData.append("TenentType", data.TenentType);
      formData.append("tenant_companyName", data.tenant_companyName);
      formData.append(
        "tenant_companyAuthorizePerson",
        data.tenant_companyAuthorizePerson
      );
      formData.append("tenant_GovIdNo", data.tenant_GovIdNo);
      formData.append(
        "tenant_companyIssuingDate",
        data.tenant_companyIssuingDate
      );
      formData.append(
        "tenant_companyExpireDate",
        data.tenant_companyExpireDate
      );
      formData.append(
        "tenant_companyAuthorizePersonDesignation",
        data.tenant_companyAuthorizePersonDesignation
      );
      formData.append(
        "tenant_companyTradeLicenseNo",
        data.tenant_companyTradeLicenseNo
      );
      formData.append("tenant_email", data.tenant_email);
      formData.append("city", data.city);
      formData.append("area", data.area);
      formData.append("country", data.country);
      formData.append(
        "tenant_GovIdNo_expireDate",
        data.tenant_GovIdNo_expireDate
      );
      formData.append(
        "tenant_passport_expireDate",
        data.tenant_passport_expireDate
      );
      formData.append("tenant_passportNo", data.tenant_passportNo);
    }

    
    Axios.post(base_URL + "/api/tenant", formData, {
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
      <TenantEntryFormComponent tenantData={tenantData} />
    </div>
  );
};

export default TenantEntry;
