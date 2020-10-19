import React,{useEffect,useState} from "react"
import PropertyDetailViewComp from "../../../component/view/propertyView/propertyDetail/propertyDetailView"
import Axios from "axios"
import { base_URL } from "../../../const/base_URL";
import {useParams} from "react-router-dom"




let PropertyDetailView=()=>{
    const[serverAllData,setServerAllData]=useState([])

 const { id } = useParams();

    useEffect(()=>{
        serverData()
    },[])

    let selectedone=serverAllData.filter((arg)=>arg._id===id)
let serverData=()=>{
    Axios({
        method: 'get',
        url: base_URL+"/api/property",
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
        }).then((res)=>{
            setServerAllData(res.data);
      }).catch((err)=>{
        console.log(err);
      })

}


    return(
<div><PropertyDetailViewComp
serverAllData={serverAllData}
selectedone={selectedone}
/></div>
    )
}
export default PropertyDetailView
