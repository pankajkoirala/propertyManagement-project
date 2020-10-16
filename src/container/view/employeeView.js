import React from "react"

import EmployeeViews from "../../component/view/employeeView/employeeView.js"
import Axios from "axios"

const EmployeeView=()=>{
    const [employee,setEmployee]=useState([])
    useEffect(()=>{
        EmployeeData()
    },[])

    et EmployeeData=()=>{
        Axios({
            method: 'get',
            url: base_URL+"/api/employee",
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*", }}
            }).then((res)=>{
                setTenant(res.data);
          }).catch((err)=>{
            console.log(err);
          })
    
    }
    return(
        <div><EmployeeViews
        employee={employee}
        />
        </div>
    )
}

export default EmployeeView