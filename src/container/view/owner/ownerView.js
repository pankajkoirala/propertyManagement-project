import React from "react";
import OwnerView from "../../../component/view/owner/ownerView";
import { connect } from "react-redux";

const OwnerViews = (props) => {
  return (
    <div>
      <OwnerView ownersData={props.redux_OwnerData.owner} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_OwnerData: state.owner,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnerViews);
