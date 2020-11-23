import React from "react";
import InvoiceComponent from "../../../component/entryForm/invoiceEntryForm/invoiceEntry.js";
import TopNavBar from "../../../shared/topNavBar.js";

const InvoiceContainer = () => {
  return (
    <div>
      <TopNavBar/>
      <InvoiceComponent />
    </div>
  );
};

export default InvoiceContainer;
