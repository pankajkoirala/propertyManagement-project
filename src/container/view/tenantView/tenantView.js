import React from "react";
import TenantViews from "../../../component/view/tenantView/tenantView.js";
import { connect } from "react-redux";

const TenantView = (props) => {
  return (
    <div>
      <TenantViews tenant={props.redux_TenantData.tenant} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_TenantData: state.tenant,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TenantView);
