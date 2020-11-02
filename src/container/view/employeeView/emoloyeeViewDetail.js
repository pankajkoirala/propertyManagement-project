import React, { useEffect, useState } from "react";
import EmployeeViewComp from "../../../component/view/employeeView/detailEmployeeView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const TanentDetailViewCont = (props) => {
  console.log(props);

  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedEmployee = props?.redux_employeeData?.employee?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const EmployeeUpdate = (data, ID) => {
    const formData = new FormData();
    formData.append("employee_street", data.employee_street);
    formData.append("employee_city", data.employee_city);
    formData.append("employee_provience", data.employee_provience);
    formData.append("employee_country", data.employee_country);
    formData.append("employee_ZipCode", data.employee_ZipCode);
    formData.append("employee_photo", data.employee_photo);
    formData.append("employee_phoneNo", data.employee_phoneNo);
    formData.append("employee_firstName", data.employee_firstName);
    formData.append("employee_middleName", data.employee_middleName);
    formData.append("employee_lastName", data.employee_lastName);
    formData.append("employee_email", data.employee_email);
    formData.append("employee_post", data.employee_post);

    Axios({
      method: "put",
      url: base_URL + "/api/employee/" + ID,
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
      <EmployeeViewComp
        selectedEmployee={selectedEmployee}
        EmployeeUpdate={EmployeeUpdate}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_employeeData: state.employee,
});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_TENANT", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TanentDetailViewCont);
