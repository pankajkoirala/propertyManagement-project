import React, { useState } from "react";
import HomepageComponent from "../../component/homepage/homepage";
import { connect } from "react-redux";
import { incomeCalc } from "../../shared/commonFunction";

const HomepageContainer = (props) => {
  const [next_preYear, setNext_preYear] = useState(new Date().getFullYear());

  //income calculation
  let rentalIncome = 0;
  let vatIncome = 0;
  let miscellaneousIncome = 0;
  let clearedCheque = props?.redux_ChequeData?.cheque?.filter(
    (arg) => arg.cheque_status === "Cleared"
  );
  for (let index = 0; index < clearedCheque.length; index++) {
    rentalIncome = rentalIncome + clearedCheque[index].cheque_amount;
    vatIncome = vatIncome + clearedCheque[index].vat_amount;
    miscellaneousIncome =
      miscellaneousIncome + clearedCheque[index].miscellaneous_amount;
  }

  //bardiagram data calculation

  let barData = [];
  incomeCalc(clearedCheque, barData, "01", next_preYear);
  incomeCalc(clearedCheque, barData, "02", next_preYear);
  incomeCalc(clearedCheque, barData, "03", next_preYear);
  incomeCalc(clearedCheque, barData, "05", next_preYear);
  incomeCalc(clearedCheque, barData, "06", next_preYear);
  incomeCalc(clearedCheque, barData, "07", next_preYear);
  incomeCalc(clearedCheque, barData, "08", next_preYear);
  incomeCalc(clearedCheque, barData, "09", next_preYear);
  incomeCalc(clearedCheque, barData, "10", next_preYear);
  incomeCalc(clearedCheque, barData, "04", next_preYear);
  incomeCalc(clearedCheque, barData, "11", next_preYear);
  incomeCalc(clearedCheque, barData, "12", next_preYear);

  return (
    <div>
      <HomepageComponent
        totalProperty={props.redux_propertyData?.property?.length}
        leaseProperty={props?.redux_leaseData?.lease.length}
        rentalIncome={rentalIncome}
        vatIncome={vatIncome}
        miscellaneousIncome={miscellaneousIncome}
        setNext_preYear={setNext_preYear}
        next_preYear={next_preYear}
        barData={barData}
        //clearedCheque={clearedCheque}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  redux_propertyData: state.property,
  redux_leaseData: state.lease,
  redux_ChequeData: state.cheque,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer);
