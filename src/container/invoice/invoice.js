import React from "react";
import InvoiceComponent from "./../../component/invoice/invoice";
import { connect } from "react-redux";

let Invoice = (props) => {
  let propertyFilter = props.Redux_propertyData.property.filter(
    (arg) => arg._id === props?.Cheque?.lease_property?.property
  );
  let tenentFilter = props.redux_tenantData.tenant.filter(
    (arg) => arg._id === props?.Cheque?.lease_property?.tenants
  );

  console.log(tenentFilter);

  return (
    <div>
      <InvoiceComponent {...props} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_propertyData: state.property,
  redux_tenantData: state.tenant,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
