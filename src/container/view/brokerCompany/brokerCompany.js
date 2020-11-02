import React,{useState,useEffect} from "react"

import BrokerCompanyViews from "../../../component/view/brokerCompany/brokerCompany"
import Axios from "axios"
import {base_URL} from "../../../const/base_URL"
import {connect} from 'react-redux'



const BrokerCompany=(props)=>{
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

  
  export default BrokerCompany;
