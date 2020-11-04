import React,{useEffect,useState} from "react"
import LeaseDetailViewComp from "../../../component/view/lease/leaseDetailView"
import Axios from "axios"
import { base_URL } from "../../../const/base_URL";
import {useParams} from "react-router-dom"
import {connect} from 'react-redux'





let LeaseDetailView=(props)=>{
    
    const { id } = useParams();
    
    let selecteOneLease=props?.Redux_LeaseData?.lease?.filter((arg)=>arg._id===id)



const LeaseUpdate=(data,ID)=>{
    const formData = new FormData();
    formData.append("chequeList", data.chequeList);
    formData.append("lease_enterDate", data.lease_enterDate);
    formData.append("tenants", data.tenants);
    formData.append("lease_Term", data.lease_Term);
    formData.append("commenceDate", data.commenceDate);
    formData.append("expirationDate", data.expirationDate);
    formData.append("rentAmount", data.rentAmount);
    formData.append("firstDueDate", data.firstDueDate);
    formData.append("frequency", data.frequency);
    formData.append("gracePeriod", data.gracePeriod);
    formData.append("late_feeType", data.late_feeType);
    formData.append("lateFeeAmount", data.lateFeeAmount);
    formData.append("securityDeposite", data.securityDeposite);
    formData.append("securityfirstDueDate", data.securityfirstDueDate);
    formData.append("property", data.property);

    formData.append("photo", data.photo);
     
    Axios({
      method: 'put',
      url: base_URL+"/api/lease/"+ID,
      data: formData,
      config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
      }).then((res)=>{
  console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const LeaseDelete=(ID)=>{
  
    Axios({
      method: 'delete',
      url: base_URL+"/api/lease/"+ID,
      config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
      }).then((res)=>{
  console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  //property remove which are in lease from all property
  let reserveProperty = [];
  let unReserveProperty = [];

  props.Redux_LeaseData.lease.forEach((arg) => {
    reserveProperty.push(arg.property._id);
  });
  unReserveProperty = props.Redux_propertyData.property.filter(
    (arg) => !reserveProperty.includes(arg._id)
  );
  
  //cheque remove which are in checklist from all cheque
  let chequeUsed = [];
  let UnchequeUsed = [];
  props.Redux_LeaseData.lease.forEach((arg) => {
    arg.chequeList.map((arg1) => {
      chequeUsed.push(arg1._id);
    });
  });

  UnchequeUsed = props.redux_ChequeData.cheque.filter(
    (arg) => !chequeUsed.includes(arg._id)
  );



    return(
<div><LeaseDetailViewComp
selecteOneLease={selecteOneLease}
LeaseDelete={LeaseDelete}
LeaseUpdate={LeaseUpdate}
//try
unReserveProperty={unReserveProperty}
redux_tenantData={props.redux_tenantData}
UnchequeUsed={UnchequeUsed}
/></div>
    )
}

const mapStateToProps = (state) => ({
  Redux_LeaseData: state.lease,
  Redux_propertyData: state.property,
  redux_tenantData: state.tenant,
  redux_ChequeData: state.cheque,
 });
 
 const mapDispatchToProps = (dispatch) => ({
 });
 
 export default connect(mapStateToProps, mapDispatchToProps)(LeaseDetailView);

                