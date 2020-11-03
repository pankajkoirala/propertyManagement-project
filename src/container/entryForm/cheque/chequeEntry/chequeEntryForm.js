import React from "react";
import ChequeEntryComponent from "../../../../component/entryForm/cheque/chequeEntry/chequeEntryForm.js"
import {connect} from 'react-redux'
import { base_URL } from "../../../../const/base_URL";
import Axios from "axios";




const ChequeEntryContainer=(props)=> {

  const ChequeeData=(data)=>{
    const formData = new FormData();
 
    formData.append("cheque_issueDate", data.cheque_issueDate);
    formData.append("cheque_status", data.cheque_status);
    formData.append("cheque_remarks", data.cheque_remarks);
    formData.append("cheque_amount", data.cheque_amount);
    formData.append("cheque_picture", data.cheque_picture);
    formData.append("lease_property", data.lease_property);
    formData.append("cheque_number", data.cheque_number);
    formData.append("cheque_entryDate", data.cheque_entryDate);

    

 

    Axios({
        method: 'post',
        url: base_URL+"/api/cheque",
        data: formData,
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
        }).then((res)=>{
    console.log(res);
      }).catch((err)=>{
        console.log(err);
      })

  }
  return(<div>
    <ChequeEntryComponent
    Redux_propertyData={props.Redux_propertyData.property}
    ChequeeData={ChequeeData}
    />
  </div>)
}

const mapStateToProps = (state) => ({
  Redux_propertyData: state.property,

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChequeEntryContainer);
