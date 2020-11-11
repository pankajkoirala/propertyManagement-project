import React, { useEffect, useState } from "react";
import MaintananceTicketViewComp from "../../../component/view/maintananceTicket/maintananceTicketDetailView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";

const MaintananceTicketDetailView = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedMaintananceTicket = props?.redux_maintananceTicketData?.maintananceTicket?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const maintananceTicketUpdate = (data, ID) => {
    Axios({
      method: "put",
      url: base_URL + "/api/MaintananceTicket/" + ID,
      data: data,
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
  const maintananceTicketDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/MaintananceTicket/" + ID,
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
      <MaintananceTicketViewComp
        selectedMaintananceTicket={selectedMaintananceTicket}
        maintananceTicketDelete={maintananceTicketDelete}
        maintananceTicketUpdate={maintananceTicketUpdate}
        Redux_propertyData={props.Redux_propertyData.property}
        Redux_maintananceCompanyData={
          props.Redux_maintananceCompanyData.maintananceCompany
        }
        Redux_managementCompanyData={
          props.Redux_managementCompanyData.managementCompany
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_maintananceTicketData: state.maintananceTicket,
  Redux_propertyData: state.property,
  Redux_maintananceCompanyData: state.maintananceCompany,
  Redux_managementCompanyData: state.managementCompany,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaintananceTicketDetailView);
