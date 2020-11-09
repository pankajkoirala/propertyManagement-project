import React, { useEffect, useState } from "react";
import ManagementCompanyViewComp from "../../../component/view/managementCompany/managementCompanyDetail";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";

const ManagementCompanyDetailView = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedManagementCompany = props?.redux_ManagementCompanyData?.managementCompany?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const managementCompanyUpdate = (data, ID) => {
    const formData = new FormData();
    formData.append("managementCompany_street", data.managementCompany_street);
    formData.append("managementCompany_city", data.managementCompany_city);
    formData.append(
      "managementCompany_provience",
      data.managementCompany_provience
    );
    formData.append(
      "managementCompany_country",
      data.managementCompany_country
    );
    formData.append(
      "managementCompany_ZipCode",
      data.managementCompany_ZipCode
    );
    formData.append("managementCompany_photo", data.managementCompany_photo);
    formData.append(
      "managementCompany_phoneNo",
      data.managementCompany_phoneNo
    );
    formData.append(
      "managementCompany_Registeration_Number",
      data.managementCompany_Registeration_Number
    );
    formData.append("managementCompany_name", data.managementCompany_name);
    formData.append(
      "managementCompany_Registeration_Date",
      data.managementCompany_Registeration_Date
    );
    formData.append("managementCompany_email", data.managementCompany_email);
    formData.append(
      "managementCompany_MobileNumber",
      data.managementCompany_MobileNumber
    );

    Axios({
      method: "put",
      url: base_URL + "/api/managementCompany/" + ID,
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
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };
  const managementCompanyDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/managementCompany/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <ManagementCompanyViewComp
        selectedManagementCompany={selectedManagementCompany}
        managementCompanyUpdate={managementCompanyUpdate}
        managementCompanyDelete={managementCompanyDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_ManagementCompanyData: state.managementCompany,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagementCompanyDetailView);
