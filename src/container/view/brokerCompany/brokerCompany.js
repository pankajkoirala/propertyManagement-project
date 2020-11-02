import React,{useState,useEffect} from "react"

import BrokerCompanyViews from "../../../component/view/brokerCompany/brokerCompany"
import Axios from "axios"
import {base_URL} from "../../../const/base_URL"
import {connect} from 'react-redux'



const EmployeeView=(props)=>{
    const [allBrokerCompany,setallBrokerCompany]=useState([])
    useEffect(()=>{
        BrokerCompanyData()
    },[])

    let BrokerCompanyData=()=>{
        Axios({
            method: 'get',
            url: base_URL+"/api/brokerCompany",
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
            }).then((res)=>{
                setallBrokerCompany(res.data);
               props.redux_Add_BrokerCompany(res.data)
          }).catch((err)=>{
            console.log(err);
          })
    
    }
    return(
        <div><BrokerCompanyViews
        allBrokerCompany={allBrokerCompany}
        /></div>
    )
}
const mapStateToProps = (state) => ({
    redux_brokerCompany: state.BrokerCompany,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    redux_Add_BrokerCompany: (arg) => dispatch({ type:"ADD_ALL_BROKER_COMPANY", payload:arg }),
  
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView);
