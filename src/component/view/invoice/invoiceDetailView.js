import React from "react";

let InvoiceDetailComponent = (props) => {
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h2 className="text-center">Invoice Picture</h2>
        <img
          src={props.selectedInvoice?.invoicePhoto}
          style={{
            height: "500px",
            width: "80%",
            marginTop: "40px",
            alignItems: "center",
          }}
          alt=""
        />
      </div>
    </div>
  );
};
export default InvoiceDetailComponent;
