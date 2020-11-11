import React from "react";
import ChequeEntryComponent from "../../../../component/entryForm/cheque/chequeEntry/chequeEntryForm.js";
import { connect } from "react-redux";
import { base_URL } from "../../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../../shared/notification.js";

const ChequeEntryContainer = (props) => {
  const ChequeeData = (data) => {
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

    Axios({
      method: "post",
      url: base_URL + "/api/cheque",
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
  return (
    <div>
      <ChequeEntryComponent
        Redux_leaseData={props.Redux_leaseData.lease}
        ChequeeData={ChequeeData}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_leaseData: state.lease,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChequeEntryContainer);
