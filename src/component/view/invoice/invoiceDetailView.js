import React from "react";

let InvoiceDetailComponent = (props) => {
  console.log(
    "🚀 ~ file: invoiceDetailView.js ~ line 13 ~ InvoiceDetailContainer ~ selectedEmployee",
    props.selectedInvoice
  );
  return (
    <div>
      <img
        src={props.selectedInvoice?.invoicePhoto}
        style={{ height: "600px", width: "1000px" }}
        alt=""
      />
    </div>
  );
};
export default InvoiceDetailComponent;
