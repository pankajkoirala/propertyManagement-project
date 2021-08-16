import React from "react";
import FMCComponent from "../../../component/entryForm/FMC/fmc";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import { connect } from "react-redux";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

let FMC = (props) => {
  // invoice send
  const fmc = (data) => {
    const formData = new FormData();
    formData.append("property", data.property);
    formData.append("management_Companies", data.management_Companies);
    formData.append("totalAmount", data.totalAmount);
    formData.append("quarter", data.quarter);
    formData.append("entry_date", data.entry_date);
    formData.append("remark", data.remark);
    formData.append("file1", data.file1);
    formData.append("file2", data.file2);
    formData.append("fmcInvoice_Date", data.fmcInvoice_Date);

    Axios.post(base_URL + "/api/fmc", formData, {
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

export default connect(mapStateToProps, mapDispatchToProps)(FMC);
