import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import SearchInput from "./../../../shared/filterListData";
import TopNavBar from "./../../../shared/topNavBar";

let InvoiceListComponent = (props) => {
  let [invoice, SetInvoice] = useState([]);
  let invoiceList = props.invoiceList;

  if (invoice.length === 0) {
    invoice = invoiceList;
  } else {
    invoiceList = invoice;
  }
  return (
    <>
      <TopNavBar />
      <div className="tenantview">
        <h1 className="text-center">Invoice list</h1>
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
          allData={props.invoiceList}
        />

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SN</th>
              <th>ID Number</th>
              <th> lease id</th>
              <th>Cheque No</th>
              <th> edit</th>
            </tr>
          </thead>
          {invoiceList.map((arg, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{arg.InvoiceId}</td>

                  <td>{arg.lease_id}</td>
                  <td>{arg.chequeNumber}</td>

                  <td>
                    <Link to={`/invoice/${arg._id}`}>
                      {" "}
                      <button className="success ml-3">View Detail</button>
                    </Link>{" "}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </>
  );
};
export default InvoiceListComponent;
