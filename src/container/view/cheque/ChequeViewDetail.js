import React, { useEffect, useState } from "react";
import ChequeViewComp from "../../../component/view/cheque/chequeViewDetail";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ChequeViewComp
        selectedCheque={selectedCheque}
        ChequeUpdate={ChequeUpdate}
        ChequeDelete={ChequeDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_ChequeData: state.cheque,
});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_Tenant: (arg) =>
    dispatch({ type: "ADD_ALL_BROKER_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChequeDetailViewCont);
