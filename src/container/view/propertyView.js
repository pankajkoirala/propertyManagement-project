import React,{useState,useEffect} from "react"
import PropertyViews from "../../component/view/propertyView/propertyView.js"
import Axios from "axios"
import { base_URL } from "../../const/base_URL";



const PropertyView=()=>{
    const [propertyData,setPropertyData]=useState([])

    useEffect(()=>{
        serverData()
    },[])

let serverData=()=>{
    Axios({
        method: 'get',
        url: base_URL+"/api/property",
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
        }).then((res)=>{
            setPropertyData(res.data);
      }).catch((err)=>{
        console.log(err);
      })

}
let DeletProperty=(Id)=>{
    Axios.delete(base_URL+`/api/property/${Id}`).then((data)=>console.log(data)).catch((err)=>console.log(err))
}

    return(
        <div><PropertyViews
        propertyData={propertyData}
        DeletProperty={DeletProperty}
        /></div>
    )
}

export default PropertyView