import React from "react";
import BrokerDetailComponent from "../../../component/entryForm/brokerEntryForm/brokerCompanyEntryForm";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";

const BrokerDetailContainer = () => {
  const brokerData = (data) => {
    const formData = new FormData();
    formData.append("street", data.street);
    formData.append("city", data.city);
    formData.append("provience", data.provience);
    formData.append("country", data.country);
    formData.append("ZipCode", data.ZipCode);
    formData.append("broker_photo", data.broker_photo);
    formData.append("broker_phoneNo", data.broker_phoneNo);
    formData.append(
      "broker_RegistrationNumber",
      data.broker_RegistrationNumber
    );
    formData.append("broker_companyName", data.broker_companyName);
    formData.append(
      "broker_companyRegisterDate",
      data.broker_companyRegisterDate
    );
    formData.append("broker_email", data.broker_email);

    Axios({
      method: "post",
      url: base_URL + "/api/brokerCompany",
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
      <BrokerDetailComponent brokerData={brokerData} />
    </div>
  );
};

export default BrokerDetailContainer;
