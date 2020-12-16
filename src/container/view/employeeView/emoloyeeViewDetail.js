import React from "react";
import EmployeeViewComp from "../../../component/view/employeeView/detailEmployeeView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";


const TanentDetailViewCont = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedEmployee = props?.redux_employeeData?.employee?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const EmployeeUpdate = (data, ID, file) => {
    const formData = new FormData();
    if (typeof file[0].file !== "string") {
      file.forEach((element) => {
        formData.append(element.fileName, element.file);
      });
    } else {
      formData.append("files_list", data.files_list);
    }
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
    formData.append("employee_gender", data.employee_gender);

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
        notification("Updated successfully", "SUCCESS");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  const employeeDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/employee/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
        props.history.push("/employeeList");

        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <EmployeeViewComp
        selectedEmployee={selectedEmployee}
        EmployeeUpdate={EmployeeUpdate}
        employeeDelete={employeeDelete}
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
