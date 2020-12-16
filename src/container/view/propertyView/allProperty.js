import React from "react";
import AllPropertyViews from "../../../component/view/propertyView/allProperty";

import { connect } from "react-redux";

const PropertyView = (props) => {
  //lease all property
  let LeasePropertyId = [];

  props.leaseData_redux.lease.map((arg) =>
    LeasePropertyId.push(arg?.property?._id)
  );

  return (
    <div>
      <AllPropertyViews
        propertyData={props.leaseProperty_redux.property}
        LeasePropertyId={LeasePropertyId}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  leaseData_redux: state.lease,
  leaseProperty_redux: state.property,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyView);
