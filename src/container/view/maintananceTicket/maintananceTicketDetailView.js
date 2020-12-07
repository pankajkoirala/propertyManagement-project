import React from "react";
import MaintananceTicketViewComp from "../../../component/view/maintananceTicket/maintananceTicketDetailView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";

const MaintananceTicketDetailView = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedMaintananceTicket = props?.redux_maintananceTicketData?.maintananceTicket?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const maintananceTicketUpdate = (data, ID) => {
    const formData = new FormData();

    formData.append(
      "maintananceTicketIssueDate",
      data.maintananceTicketIssueDate
    );
    formData.append("maintananceTicketDueDate", data.maintananceTicketDueDate);
    formData.append("MaintanancePropertyID", data.MaintanancePropertyID);
    formData.append("MaintananceCompanyId", data.MaintananceCompanyId);
    formData.append(
      "MaintananceCompanyDetailInfo",
      data.MaintananceCompanyDetailInfo
    );
    formData.append(
      "Maintanance_Ticket_picture",
      data.Maintanance_Ticket_picture
    );
    formData.append("maintanance_Amount", data.maintanance_Amount);

    Axios({
      method: "put",
      url: base_URL + "/api/MaintananceTicket/" + ID,
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
        props.history.push("/maintananceTicketList");

        reloadFunction();
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
