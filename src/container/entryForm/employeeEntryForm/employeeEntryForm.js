import React from "react";
import EmployeeEntryFormComponent from "../../../component/entryForm/employeeEntryForm/employeeEntryForm.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import TopNavBar from "../../../shared/topNavBar.js";

const EmployeeEntry = () => {
  const EmployeeData = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });
    formData.append("employee_area", data.employee_area);
    formData.append("employee_city", data.employee_city);
    formData.append("employee_country", data.employee_country);
    formData.append("employee_DOB", data.employee_DOB);
    formData.append("employee_phoneNo", data.employee_phoneNo);
    formData.append("employee_firstName", data.employee_firstName);
    formData.append("employee_middleName", data.employee_middleName);
    formData.append("employee_lastName", data.employee_lastName);
    formData.append("employee_email", data.employee_email);
    formData.append("employee_post", data.employee_post);

    Axios({
      method: "post",
      url: base_URL + "/api/employee",
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
      <EmployeeEntryFormComponent EmployeeData={EmployeeData} />
    </div>
  );
};

export default EmployeeEntry;
