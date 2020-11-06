import React, { useState, useEffect } from "react";
import LeaseEntryFormComponent from "../../../component/entryForm/lease/lease";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";

const LeaseEntry = (props) => {
  //console.log('Redux_propertyData',props.Redux_propertyData.property);
  //console.log('Redux_LeaseData',props.Redux_LeaseData.lease);

  const leaseData = (data) => {
    const formData = new FormData();
    formData.append("chequeList", data.chequeList);
    formData.append("lease_enterDate", data.lease_enterDate);
    formData.append("tenants", data.tenants);
    formData.append("lease_Term", data.lease_Term);
    formData.append("commenceDate", data.commenceDate);
    formData.append("expirationDate", data.expirationDate);
    formData.append("rentAmount", data.rentAmount);
    formData.append("firstDueDate", data.firstDueDate);
    formData.append("frequency", data.frequency);
    formData.append("gracePeriod", data.gracePeriod);
    formData.append("late_feeType", data.late_feeType);
    formData.append("lateFeeAmount", data.lateFeeAmount);
    formData.append("securityDeposite", data.securityDeposite);
    formData.append("securityfirstDueDate", data.securityfirstDueDate);
    formData.append("property", data.property);

    formData.append("photo", data.photo);

    Axios({
      method: "post",
      url: base_URL + "/api/lease",
      data: formData,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("Created successfully", "SUCCESS");
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };
  //property remove which are in lease from all property
  let reserveProperty = [];
  let unReserveProperty = [];

  props.Redux_LeaseData.lease.forEach((arg) => {
    reserveProperty.push(arg.property._id);
  });
  unReserveProperty = props.Redux_propertyData.property.filter(
    (arg) => !reserveProperty.includes(arg._id)
  );

  //cheque remove which are in checklist from all cheque
  let chequeUsed = [];
  let UnchequeUsed = [];
  props.Redux_LeaseData.lease.forEach((arg) => {
    arg.chequeList.map((arg1) => {
      chequeUsed.push(arg1._id);
    });
  });

  UnchequeUsed = props.redux_ChequeData.cheque.filter(
    (arg) => !chequeUsed.includes(arg._id)
  );

  return (
    <div>
      <LeaseEntryFormComponent
        leaseData={leaseData}
        unReserveProperty={unReserveProperty}
        redux_tenantData={props.redux_tenantData}
        UnchequeUsed={UnchequeUsed}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  Redux_propertyData: state.property,
  redux_tenantData: state.tenant,
  Redux_LeaseData: state.lease,
  redux_ChequeData: state.cheque,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LeaseEntry);
