import React from "react";
import MaintananceCompanyViews from "../../../component/view/maintananceCompany/maintananceCompany";
import { connect } from "react-redux";

const MaintananceCompanyView = (props) => {
  return (
    <div>
      <MaintananceCompanyViews
        MaintananceCompany={
          props.redux_maintananceCompanyData.maintananceCompany
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_maintananceCompanyData: state.maintananceCompany,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaintananceCompanyView);
