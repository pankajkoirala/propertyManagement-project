import React,{useState,useEffect} from "react"
import AllPropertyViews from "../../../component/view/propertyView/allProperty"
import Axios from "axios"
import { base_URL } from "../../../const/base_URL";
import {connect} from 'react-redux'




const PropertyView=(props)=>{
    const [propertyData,setPropertyData]=useState([])
    const [lease,setLease]=useState([])

    useEffect(()=>{
        serverData()
        leaseData()
    },[])

let serverData=()=>{
    Axios({
        method: 'get',
        url: base_URL+"/api/property",
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
        }).then((res)=>{
            setPropertyData(res.data);
            props.redux_Add_Property(res.data)
      }).catch((err)=>{
        console.log(err);
      })

}
let DeletProperty=(Id)=>{
    Axios.delete(base_URL+`/api/property/${Id}`).then((data)=>console.log(data)).catch((err)=>console.log(err))
}


let leaseData=()=>{
    Axios({
        method: 'get',
        url: base_URL+"/api/lease",
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
        }).then((res)=>{
            setLease(res.data);
      }).catch((err)=>{
        console.log(err);
      })

}


    return(
        <div><AllPropertyViews
        propertyData={propertyData}
        DeletProperty={DeletProperty}
        lease={lease}
        /></div>
    )
}
const mapStateToProps = (state) => ({
    nameMatra_number: state.number,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    redux_Add_Property: (arg) => dispatch({ type:"ADD_ALL_PROPRRTY", payload:arg }),
  
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(PropertyView);

