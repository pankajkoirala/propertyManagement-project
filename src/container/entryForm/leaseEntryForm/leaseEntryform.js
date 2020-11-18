import React from "react";
import LeaseEntryFormComponent from "../../../component/entryForm/lease/lease";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";

const LeaseEntry = (props) => {
  const leaseData = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });
    formData.append("lease_enterDate", data.lease_enterDate);
    formData.append("tenants", data.tenants);
    formData.append("lease_Term", data.lease_Term);
    formData.append("commenceDate", data.commenceDate);
    formData.append("expirationDate", data.expirationDate);
    formData.append("rentAmount", data.rentAmount);
    formData.append("firstDueDate", data.firstDueDate);
    formData.append("frequency", data.frequency);

    formData.append("securityDeposite", data.securityDeposite);
    formData.append("securityfirstDueDate", data.securityfirstDueDate);
    formData.append("property", data.property);

    Axios({
      method: "post",
      url: base_URL + "/api/lease",
      data: formData,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("Created successfully", "SUCCESS");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  //property remove which are in lease from all property
  let reserveProperty = [];
  let unReserveProperty = [];

  props.Redux_LeaseData.lease.forEach((arg) => {
    reserveProperty.push(arg.property._id);
  });
  unReserveProperty = props.Redux_propertyData.property.filter(
    (arg) => !reserveProperty.includes(arg._id)
  );

  return (
    <div>
      <LeaseEntryFormComponent
        leaseData={leaseData}
        unReserveProperty={unReserveProperty}
        redux_tenantData={props.redux_tenantData}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  Redux_propertyData: state.property,
  redux_tenantData: state.tenant,
  Redux_LeaseData: state.lease,
});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_invoice: (arg) =>
    dispatch({ type: "ADD_ALL_INVOICE", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaseEntry);
