import React from "react";
import ChequeEntryComponent from "../../../../component/entryForm/cheque/chequeEntry/chequeEntryForm.js";
import { connect } from "react-redux";
import { base_URL } from "../../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../../shared/notification.js";
import { reloadFunction } from "../../../../shared/commonFunction.js";
import { getLocalStorage } from "./../../../../const/tokenStorage";
import { token_key } from "./../../../../const/base_URL";

const ChequeEntryContainer = (props) => {
  const ChequeeData = (data) => {
  console.log("🚀 ~ file: chequeEntryForm.js ~ line 13 ~ ChequeeData ~ data", data)
    const formData = new FormData();
    if (data.Transaction_Type==='Cash') {
      formData.append("Transaction_Type", data.Transaction_Type);
      formData.append("miscellaneous_amount", data.miscellaneous_amount);
      formData.append("vat_amount", data.vat_amount);
      formData.append("entryDate", data.entryDate);
      if (data.cheque_remarks) {
        
        formData.append("cheque_remarks", data.cheque_remarks);
      }      formData.append("cheque_amount", data.cheque_amount);
      formData.append("lease_property", data.lease_property);
      formData.append("property_id", data.property_id);
      formData.append("securityDeposite", data.securityDeposite);
      formData.append("depositeBank", data.depositeBank);
      formData.append("cheque_status", "Cleared");
      formData.append("total_amount", data.total_amount);


    }else{
      formData.append("miscellaneous_amount", data.miscellaneous_amount);
      formData.append("vat_amount", data.vat_amount);
      formData.append("cheque_bankName", data.cheque_bankName);
      formData.append("cheque_issueDate", data.cheque_issueDate);
      formData.append("entryDate", data.entryDate);
      formData.append("cheque_status", data.cheque_status);
      if (data.cheque_remarks) {
        
        formData.append("cheque_remarks", data.cheque_remarks);
      }
      formData.append("cheque_amount", data.cheque_amount);
      formData.append("cheque_number", data.cheque_number);
      formData.append("lease_property", data.lease_property);
      formData.append("cheque_depositeDate", data.cheque_depositeDate);
      formData.append("cheque_clearDate", data.cheque_clearDate);
      formData.append("cheque_bouncedDate", data.cheque_bouncedDate);
      formData.append("cheque_holdDate", data.cheque_holdDate);
      formData.append("cheque_recivedDate", data.cheque_recivedDate);
      formData.append("property_id", data.property_id);
      formData.append("cheque_picture_back", data.cheque_picture_back);
      formData.append("cheque_picture_front", data.cheque_picture_front);
      formData.append("securityDeposite", data.securityDeposite);
      formData.append("depositeBank", data.depositeBank);
      formData.append("Transaction_Type", data.Transaction_Type);
      formData.append("total_amount", data.total_amount);

    }

   


 
  
     Axios.post( base_URL + "/api/cheque",formData,{
        headers: {
          [token_key]: getLocalStorage(token_key),
        },
      })
      .then((res) => {
        notification("Created successfully", "SUCCESS");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };
  return (
    <div>
      <ChequeEntryComponent
        Redux_leaseData={props.Redux_leaseData.lease}
        ChequeeData={ChequeeData}
        Redux_propertyData={props.Redux_propertyData.property}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_leaseData: state.lease,
  Redux_propertyData: state.property,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChequeEntryContainer);
