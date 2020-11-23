import React from "react";
import InvoiceDetail from "./../../../component/view/invoice/invoiceDetailView";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

let InvoiceDetailContainer = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedInvoice = props?.redux_invoiceData?.invoice?.filter(
    (arg) => arg._id === id
  );

  return (
    <div>
      <InvoiceDetail selectedInvoice={selectedInvoice[0]} />
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
)(InvoiceDetailContainer);
