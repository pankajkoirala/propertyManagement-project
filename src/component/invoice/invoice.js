import React from "react";

let InvoiceComponent = (props) => {
  return (
    <div>
      <h1>invoice</h1>
      <button onClick={() => props.setPrintInvoice(!props.printInvoice)}>
        cancle
      </button>
    </div>
  );
};
export default InvoiceComponent;
