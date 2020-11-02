import React,{useState,useEffect} from "react"
import Axios from "axios"
import LeaseProperty from "../../../component/view/lease/leaseProperty"
import { base_URL } from "../../../const/base_URL";
import { propTypes } from "react-bootstrap/esm/Image";
import {connect} from 'react-redux'



const LeasePropertyView=(props)=>{
    const [lease,setLease]=useState([])


    useEffect(()=>{
     
        leaseData()
    },[])





let leaseData=()=>{
    Axios({
        method: 'get',
        url: base_URL+"/api/lease",
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
        }).then((res)=>{
            setLease(res.data);
            props.redux_Add_Lease(res.data)
      }).catch((err)=>{
        console.log(err);
      })

}


    return(
        <div><LeaseProperty
      
        lease={lease}
        /></div>
    )
}

const mapStateToProps = (state) => ({
    nameMatra_number: state.number,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    redux_Add_Lease: (arg) => dispatch({ type:"ADD_ALL_LEASE", payload:arg }),
  
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(LeasePropertyView);
