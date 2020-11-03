import React,{useState,useEffect} from "react"

import ChequeViewsComponent from "../../../component/view/cheque/cheque"
import {connect} from 'react-redux'



const ChequeViewCont=(props)=>{
   


    return(
        <div><ChequeViewsComponent
        redux_ChequeData={props.redux_ChequeData.cheque}
        /></div>
    )
}
const mapStateToProps = (state) => ({
    redux_ChequeData: state.cheque,
  });
  
  const mapDispatchToProps = (dispatch) => ({
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChequeViewCont)

