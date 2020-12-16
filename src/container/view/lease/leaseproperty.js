import React from "react";
import LeaseProperty from "../../../component/view/lease/leaseProperty";
import { connect } from "react-redux";

const LeasePropertyView = (props) => {
  return (
    <div>
      <LeaseProperty lease={props.redux_LeaseData.lease} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_LeaseData: state.lease,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeasePropertyView);
