import React, { useState } from "react";
import SearchInput from "./../../../shared/filterListData";
import moment from "moment";
import "./invoiceList.css";
import PoopUp from "./../../../shared/popup";

let InvoiceListComponent = (props) => {
  let [invoice, SetInvoice] = useState([]);
  const [showPopup, setShowPopUp] = useState(false);

  let invoiceList = props.invoiceList.slice().reverse();

  if (invoice.length === 0) {
    invoice = invoiceList;
  } else {
    invoiceList = invoice;
  }

  return (
    <>
      <div className="tenantview">
        <div className="page-title">
          <h1>Invoice List</h1>
        </div>
        <SearchInput
          filteringData={props?.invoiceList?.map((arg) => {
            return {
              search1: arg.InvoiceId,
              search2: arg.chequeNumber,
              search3: arg.lease_id,
              ID: arg._id,
            };
          })}
          setFilteredData={SetInvoice}
          allData={props.invoiceList.slice().reverse()}
        />

        <table id="invoice-table">
          <thead>
            <tr>
              <th>SN</th>
              <th>ID Number</th>
              <th>Invoice Issue Date</th>
              <th> lease id</th>
              <th>Property</th>
              <th>Cheque No</th>
              <th>Invoice Photo</th>
              {/* <th> edit</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          {invoiceList.map((arg, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{arg.InvoiceId}</td>
                  <td>{moment(arg.invoiceIssueDate).format("YYYY-MM-DD")}</td>
                  <td>{arg.lease_id}</td>
                  <td>{arg.propertyId}</td>
                  <td>{arg.chequeNumber}</td>
                  <td>
                    <a target={arg?.invoicePhoto} href={arg?.invoicePhoto}>
                      Download
                    </a>
                  </td>

                  {/* <td>
                    <Link to={`/invoice/${arg._id}`}>
                      {" "}
                      <button className="view-btn">View Detail</button>
                    </Link>{" "}
                  </td> */}
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => setShowPopUp(true)}
                    >
                      Delete
                    </button>
                    <PoopUp
                      isOpen={showPopup}
                      isClose={setShowPopUp}
                      CRUD_Function={props.InvoiceDelete}
                      id={arg._id}
                      buttonName={"Delete"}
                      message={"are you sure want to delete"}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};
export default InvoiceListComponent;
