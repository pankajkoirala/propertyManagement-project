import React,{useState,useEffect} from "react"
import MaintananceCompanyViews from "../../../component/view/maintananceCompany/maintananceCompany"
import { base_URL } from "../../../const/base_URL";
import Axios from "axios"
import {connect} from 'react-redux'



const MaintananceCompanyView=(props)=>{
    const [MaintananceCompany,setMaintananceCompany]=useState([])

    useEffect(()=>{
        AllMaintananceCompany()
    },[])

    let AllMaintananceCompany=()=>{
        Axios({
            method: 'get',
            url: base_URL+"/api/maintananceCompany",
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
            }).then((res)=>{
                setMaintananceCompany(res.data);
                props.redux_Add_maintananceCompany(res.data)
          }).catch((err)=>{
            console.log(err);
          })
    
    }
    

    return(
        <div><MaintananceCompanyViews
        MaintananceCompany={MaintananceCompany}
        /></div>
    )
}

const mapStateToProps = (state) => ({
  });
  
  const mapDispatchToProps = (dispatch) => ({
    redux_Add_maintananceCompany: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
  
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(MaintananceCompanyView);
