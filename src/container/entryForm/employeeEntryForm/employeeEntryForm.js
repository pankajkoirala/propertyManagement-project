import React from "react"
import EmployeeEntryFormComponent from "../../../component/entryForm/employeeEntryForm/employeeEntryForm.js"
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";


const EmployeeEntry=()=>{
 
    const EmployeeData=(data)=>{
        const formData = new FormData();
        formData.append("employee_street", data.employee_street);
        formData.append("employee_city", data.employee_city);
        formData.append("employee_provience", data.employee_provience);
        formData.append("employee_country", data.employee_country);
        formData.append("employee_ZipCode", data.employee_ZipCode);
        formData.append("employee_phoneNo", data.employee_phoneNo);
        formData.append("employee_firstName", data.employee_firstName);
        formData.append("employee_middleName", data.employee_middleName);
        formData.append("employee_lastName", data.employee_lastName);
        formData.append("employee_email", data.employee_email);
        formData.append("employee_post", data.employee_post);
        formData.append("employee_photo", data.employee_photo);

        Axios({
            method: 'post',
            url: base_URL+"/api/employee",
            data: formData,
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
            }).then((res)=>{
        console.log(res);
          }).catch((err)=>{
            console.log(err);
          })
 
      }
    return(
        <div><EmployeeEntryFormComponent
        EmployeeData={EmployeeData}
        /></div>
    )
}

export default EmployeeEntry