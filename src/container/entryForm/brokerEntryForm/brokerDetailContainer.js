import React from "react";
import BrokerDetailComponent from "../../../component/entryForm/brokerEntryForm/brokerEntryForm";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";

const BrokerDetailContainer = () => {
  const brokerData = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });
    formData.append("area", data.area);
    formData.append("city", data.city);
    formData.append("country", data.country);
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
    formData.append("brokerType", data.brokerType);

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
        notification("Created successfully", "SUCCESS");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };
  return (
    <div>
      <BrokerDetailComponent brokerData={brokerData} />
    </div>
  );
};

export default BrokerDetailContainer;
