import React from "react";
import InvoiceList from "./../../../component/view/invoice/invoiceList";
import { connect } from "react-redux";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";

let InvoiceListContainer = (props) => {
  const InvoiceDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/invoice/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
        props.history.push("/invoiceList");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <InvoiceList
        invoiceList={props.redux_invoiceData.invoice}
        InvoiceDelete={InvoiceDelete}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  redux_invoiceData: state.invoice,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceListContainer);
