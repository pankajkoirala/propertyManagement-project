import React from "react"
import PropertyEntryFormComponent from "../../component/PropertyEntryForm/PropertyEntryForm"
import { base_URL } from "../../const/base_URL";
import Axios from "axios";


const PropertyEntry=()=>{
    const propertySend = (data) => {
        console.log(data);
        Axios.post(base_URL+"/api/property",data)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    return(
        <div><PropertyEntryFormComponent
        propertySend={propertySend}
        /></div>
    )
}

export default PropertyEntry