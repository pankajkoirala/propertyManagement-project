import React, { useEffect, useState } from "react";
import DeveloperCompanyViewComp from "../../../component/view/DevelopementCompany/DeveloperCompanyDetail";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const DeveloperCompanyDetailViewCont = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedDeveloperCompany = props?.redux_DeveloperCompanyData?.DeveloperCompany?.filter(
    (arg) => arg._id === id
  );

  //developerCompany update
  const DeveloperCompanyUpdate = (data, ID) => {
    const formData = new FormData();
    formData.append("Developer_street", data.Developer_Developer_street);
    formData.append("Developer_city", data.Developer_city);
    formData.append("Developer_provience", data.Developer_provience);
    formData.append("Developer_country", data.Developer_country);
    formData.append("Developer_ZipCode", data.Developer_ZipCode);
    formData.append("DeveloperCompany_photo", data.DeveloperCompany_photo);
    formData.append("DeveloperCompany_phoneNo", data.DeveloperCompany_phoneNo);
    formData.append("DeveloperCompany_Name", data.DeveloperCompany_Name);
    formData.append(
      "DeveloperCompany_RegisterationDate",
      data.DeveloperCompany_RegisterationDate
    );
    formData.append(
      "DeveloperCompany_RegisterationNumber",
      data.DeveloperCompany_RegisterationNumber
    );

    formData.append("DeveloperCompany_email", data.DeveloperCompany_email);
    formData.append(
      "DeveloperCompany_MobileNumber",
      data.DeveloperCompany_MobileNumber
    );

    Axios({
      method: "put",
      url: base_URL + "/api/DeveloperCompany/" + ID,
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

  const DeveloperCompanyDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/DeveloperCompany/" + ID,
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
      <DeveloperCompanyViewComp
        selectedDeveloperCompany={selectedDeveloperCompany}
        DeveloperCompanyUpdate={DeveloperCompanyUpdate}
        DeveloperCompanyDelete={DeveloperCompanyDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_DeveloperCompanyData: state.DeveloperCompany,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperCompanyDetailViewCont);
