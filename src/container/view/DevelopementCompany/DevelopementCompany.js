import React from "react";

import DevelopementCompanyComponent from "../../../component/view/DevelopementCompany/DevelopementCompany";

import { connect } from "react-redux";

const DevelopementCompany = (props) => {
  return (
    <div>
      <DevelopementCompanyComponent
        allDevelopementCompany={
          props.DeveloperCompanyData_redux.DeveloperCompany
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  DeveloperCompanyData_redux: state.DeveloperCompany,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevelopementCompany);
