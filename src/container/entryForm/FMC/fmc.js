import React from "react";
import FMCComponent from "../../../component/entryForm/FMC/fmc";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import { connect } from "react-redux";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

let Invoice = (props) => {



  // invoice send
  const fmc = (data) => {
    console.log("🚀 ~ file: fmc.js ~ line 17 ~ fmc ~ data", data)
    // const formData = new FormData();
    // formData.append("property", data.property);
    // formData.append("management_Companies", data.management_Companies);
    // formData.append("totalAmount", data.totalAmount);
    // formData.append("quarter", data.quarter);
    // formData.append("date", data.date);
    // formData.append("remark", data.remark);

    Axios.post(base_URL + "/api/fmc", data, {
      headers: {
        [token_key]: getLocalStorage(token_key),
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
  return (
    <div>
      <FMCComponent
        {...props}
        property={props.Redux_propertyData.property}
        Redux_ManagementCompanyData={
          props.Redux_ManagementCompanyData.managementCompany
        }
        fmc={fmc}

      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_propertyData: state.property,
  Redux_ManagementCompanyData: state.managementCompany,

});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
