import React, { useEffect, useState } from "react";
import ChequeViewComp from "../../../component/view/cheque/chequeViewDetail";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";

const ChequeDetailViewCont = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedCheque = props?.redux_ChequeData?.cheque?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const ChequeUpdate = (data, ID) => {
    const formData = new FormData();
    formData.append("cheque_issueDate", data.cheque_issueDate);
    formData.append("cheque_status", data.cheque_status);
    formData.append("cheque_remarks", data.cheque_remarks);
    formData.append("cheque_amount", data.cheque_amount);
    formData.append("cheque_picture", data.cheque_picture);
    formData.append("lease_property", data.lease_property);
    formData.append("cheque_number", data.cheque_number);
    formData.append("cheque_entryDate", data.cheque_entryDate);
    formData.append("cheque_bankName", data.cheque_bankName);
    formData.append("cheque_depositeDate", data.cheque_depositeDate);
    formData.append("cheque_clearDate", data.cheque_clearDate);
    formData.append("cheque_bouncedDate", data.cheque_bouncedDate);
    formData.append("cheque_holdDate", data.cheque_holdDate);
    formData.append("cheque_recivedDate", data.cheque_recivedDate);
    formData.append("vat_amount", data.vat_amount);
    formData.append("miscellaneous_amount", data.miscellaneous_amount);

    Axios({
      method: "put",
      url: base_URL + "/api/cheque/" + ID,
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

  const ChequeDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/cheque/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
        props.history.push("/chequeList");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };
  //lease data
  let leaseDataID = [];
  props.Redux_leaseData.lease.map((arg) => leaseDataID.push(arg._id));
  return (
    <div>
      <ChequeViewComp
        Redux_propertyData={props.Redux_propertyData.property}
        selectedCheque={selectedCheque}
        ChequeUpdate={ChequeUpdate}
        ChequeDelete={ChequeDelete}
        leaseDataID={leaseDataID}
        Redux_leaseData={props.Redux_leaseData.lease}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_ChequeData: state.cheque,
  Redux_propertyData: state.property,
  Redux_leaseData: state.lease,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChequeDetailViewCont);
