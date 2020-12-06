import React from "react";
import DashboardIncomeComponent from "./../../component/homepage/dashboardIncomeDescription";
import { connect } from "react-redux";

let DashboardIncomeDetail = (props) => {
  let redux_ChequeData = props?.redux_ChequeData.cheque?.filter(
    (arg) => arg?.cheque_status === "Cleared"
  );
  return <DashboardIncomeComponent redux_ChequeData={redux_ChequeData} />;
};
const mapStateToProps = (state) => ({
  redux_ChequeData: state.cheque,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardIncomeDetail);
