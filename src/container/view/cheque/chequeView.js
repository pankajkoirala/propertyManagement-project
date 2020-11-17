import React from "react";
import moment from "moment";
import ChequeViewsComponent from "../../../component/view/cheque/cheque";
import { connect } from "react-redux";

const ChequeViewCont = (props) => {
  let sortChequeByDate = props.redux_ChequeData.cheque.sort(
    (a, b) =>
      new moment(b.cheque_issueDate).format("YYYYMMDD") -
      new moment(a.cheque_issueDate).format("YYYYMMDD")
  );
  return (
    <div>
      <ChequeViewsComponent sortChequeByDate={sortChequeByDate} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  redux_ChequeData: state.cheque,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ChequeViewCont);
