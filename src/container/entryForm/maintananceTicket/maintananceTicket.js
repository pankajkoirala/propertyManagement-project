import React from "react";
import MaintananceTicketComponent from "../../../component/entryForm/maintananceTicket/maintananceTicket";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const MaintananceTicketContainer = (props) => {
  const MaintananceTicketData = (data,file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });

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
 
    formData.append("maintanance_Amount", data.maintanance_Amount);
    Axios.post(base_URL + "/api/MaintananceTicket", formData, {
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
      <MaintananceTicketComponent
        MaintananceTicketData={MaintananceTicketData}
        Redux_propertyData={props.Redux_propertyData.property}
        Redux_maintananceCompanyData={
          props.Redux_maintananceCompanyData.maintananceCompany
        }
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  Redux_propertyData: state.property,
  Redux_maintananceCompanyData: state.maintananceCompany,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaintananceTicketContainer);
