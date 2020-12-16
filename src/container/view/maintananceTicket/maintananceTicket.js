import React from "react";
import MintananceTicketViews from "../../../component/view/maintananceTicket/maintananceTicket";
import { connect } from "react-redux";

const MaintananceTicketView = (props) => {
  return (
    <div>
      <MintananceTicketViews
        maintananceTicket={props.redux_maintananceTicketData.maintananceTicket}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_maintananceTicketData: state.maintananceTicket,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaintananceTicketView);
