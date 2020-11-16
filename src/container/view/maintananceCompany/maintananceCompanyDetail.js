import React, { useEffect, useState } from "react";
import MaintananceCompanyViewComp from "../../../component/view/maintananceCompany/maintananceCompanyDetail";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";

const MaintananceCompanyDetailView = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedMaintananceCompany = props?.redux_MaintananceCompanyData?.maintananceCompany?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const maintananceCompanyUpdate = (data, ID) => {
    const formData = new FormData();
    formData.append("Company_area", data.Company_area);
    formData.append("Company_city", data.Company_city);
    formData.append("Company_country", data.Company_country);
    formData.append("Company_uploadPhoto", data.Company_uploadPhoto);
    formData.append("Company_phoneNo", data.Company_phoneNo);
    formData.append(
      "Company_Registration_Number",
      data.Company_Registration_Number
    );
    formData.append("Company_Name", data.Company_Name);
    formData.append(
      "Company_Registeration_Date",
      data.Company_Registeration_Date
    );
    formData.append("Company_email", data.Company_email);
    formData.append("Company_Mobile_Number", data.Company_Mobile_Number);

    Axios({
      method: "put",
      url: base_URL + "/api/maintananceCompany/" + ID,
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

  const maintananceCompanyDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/maintananceCompany/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
        props.history.push("/maintananceCompanyList");

        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <MaintananceCompanyViewComp
        selectedMaintananceCompany={selectedMaintananceCompany}
        maintananceCompanyUpdate={maintananceCompanyUpdate}
        maintananceCompanyDelete={maintananceCompanyDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_MaintananceCompanyData: state.maintananceCompany,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaintananceCompanyDetailView);
