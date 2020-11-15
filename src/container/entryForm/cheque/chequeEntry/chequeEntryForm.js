import React from "react";
import ChequeEntryComponent from "../../../../component/entryForm/cheque/chequeEntry/chequeEntryForm.js";
import { connect } from "react-redux";
import { base_URL } from "../../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../../shared/notification.js";
import { reloadFunction } from "../../../../shared/commonFunction.js";

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
    formData.append("cheque_depositeDate", data.cheque_depositeDate);
    formData.append("cheque_clearDate", data.cheque_clearDate);
    formData.append("cheque_bouncedDate", data.cheque_bouncedDate);
    formData.append("cheque_holdDate", data.cheque_holdDate);
    formData.append("cheque_recivedDate", data.cheque_recivedDate);
    formData.append("vat_amount", data.vat_amount);
    formData.append("miscellaneous_amount", data.miscellaneous_amount);

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
        reloadFunction();
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
