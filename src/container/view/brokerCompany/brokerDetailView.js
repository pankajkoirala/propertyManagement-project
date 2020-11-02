import React, { useEffect, useState } from "react";
import BrokerCompanyViewComp from "../../../component/view/brokerCompany/brokerDetailView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const BrokerDetailViewCont = (props) => {
    const { id } = useParams();
    
    //using params and select one tanent to see detail
    let selectedBrokerCompany = props?.redux_brokerData?.brokerCompany?.filter(
        (arg) => arg._id === id
        );
        

  //tanent update
  const BrokerUpdate = (data, ID) => {
    const formData = new FormData();
    formData.append("street", data.street);
    formData.append("city", data.city);
    formData.append("provience", data.provience);
    formData.append("country", data.country);
    formData.append("ZipCode", data.ZipCode);
    formData.append("broker_photo", data.broker_photo);
    formData.append("broker_phoneNo", data.broker_phoneNo);
    formData.append("broker_RegistrationNumber", data.broker_RegistrationNumber);
    formData.append("broker_companyName", data.broker_companyName);
    formData.append("broker_companyRegisterDate", data.broker_companyRegisterDate);
    formData.append("broker_email", data.broker_email);

    Axios({
      method: "put",
      url: base_URL + "/api/brokerCompany/" + ID,
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

  const BrokerDelete = (ID) => {
   

    Axios({
      method: "delete",
      url: base_URL + "/api/brokerCompany/" + ID,
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
      <BrokerCompanyViewComp
        selectedBrokerCompany={selectedBrokerCompany}
       BrokerUpdate={BrokerUpdate}
       BrokerDelete={BrokerDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_brokerData: state.brokerCompany,
});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_BROKER_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrokerDetailViewCont);
