import React,{useState,useEffect} from "react"
import Axios from "axios"
import LeaseProperty from "../../../../component/view/propertyView/propertyDetail/leaseProperty"
import { base_URL } from "../../../../const/base_URL";



const PropertyView=()=>{
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

export default PropertyView