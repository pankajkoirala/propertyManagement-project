import React from "react";
import ManagementCompanyViews from "../../../component/view/managementCompany/managementCompany";
import { connect } from "react-redux";

const ManagementCompanyView = (props) => {
  return (
    <div>
      <ManagementCompanyViews
        ManagementCompany={props.redux_ManagementCompanyData.managementCompany}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_ManagementCompanyData: state.managementCompany,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagementCompanyView);
