import React from "react";
import { connect } from "react-redux";
import BrokerCompanyViews from "../../../component/view/brokerCompany/brokerCompany";

const BrokerCompany = (props) => {
  return (
    <div>
      <BrokerCompanyViews
        allBrokerCompany={props.redux_BrokerData.brokerCompany}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  redux_BrokerData: state.brokerCompany,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrokerCompany);
