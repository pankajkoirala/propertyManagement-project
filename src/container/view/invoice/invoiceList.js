import React from "react";
import InvoiceList from "./../../../component/view/invoice/invoiceList";
import { connect } from "react-redux";

let InvoiceListContainer = (props) => {
  return (
    <div>
      <InvoiceList invoiceList={props.redux_invoiceData.invoice} />
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
