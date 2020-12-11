import React from "react";
import InvoiceComponent from "../../../component/entryForm/invoice/invoice";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import { connect } from "react-redux";

let Invoice = (props) => {
  let propertyFilter = props.Redux_propertyData.property.filter(
    (arg) => arg._id === props?.Cheque?.lease_property?.property
  );
  let tenentFilter = props.redux_tenantData.tenant.filter(
    (arg) => arg._id === props?.Cheque?.lease_property?.tenants
  );

  // invoice send
  const invoicePost = (data) => {
    const formData = new FormData();

    formData.append("chequeMongoId", data.chequeMongoId);
    formData.append("invoicePhoto", data.invoicePhoto);
    formData.append("invoiceIssueDate", data.invoiceIssueDate);
    formData.append("chequeNumber", data.chequeNumber);
    formData.append("lease_id", data.lease_id);
    formData.append("InvoiceId", data.InvoiceId);
    formData.append("propertyId", data.propertyId);

    Axios({
      method: "post",
      url: base_URL + "/api/invoice",
      data: formData,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("Updated successfully", "SUCCESS");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <InvoiceComponent
        {...props}
        property={propertyFilter[0]}
        tenant={tenentFilter[0]}
        invoicePost={invoicePost}
        redux_InvoiceData={props.redux_InvoiceData.invoice}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_propertyData: state.property,
  redux_tenantData: state.tenant,
  redux_InvoiceData: state.invoice,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
