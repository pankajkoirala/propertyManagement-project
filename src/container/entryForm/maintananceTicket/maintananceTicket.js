import React from "react";
import MaintananceTicketComponent from "../../../component/entryForm/maintananceTicket/maintananceTicket";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";

const MaintananceTicketContainer = (props) => {
  const MaintananceTicketData = (data) => {
    Axios({
      method: "post",
      url: base_URL + "/api/MaintananceTicket",
      data: data,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
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
      <MaintananceTicketComponent
        MaintananceTicketData={MaintananceTicketData}
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
  Redux_propertyData: state.property,
  Redux_maintananceCompanyData: state.maintananceCompany,
  Redux_managementCompanyData: state.managementCompany,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaintananceTicketContainer);
