import React from "react"
import Navbar from "../../shared/navbar"
import{setLocalStorage} from "../../const/tokenStorage"
import { Button, ButtonGroup } from 'reactstrap'; 
import { Link } from "react-router-dom";

const Homepage=()=>{
    let logout=()=>{
        localStorage.clear()
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
    return(
        <div>
        <div><Navbar/></div>
       <button onClick={()=>logout()}>erase/logout</button>

        <div>
<ButtonGroup size="lg">
  <Button className="m-5">Create Property</Button><br/>
  <Button className="m-5"><Link to="/tenantentry"> Create Tenant</Link></Button>
  <Button className="m-5" >Create Employee</Button>
</ButtonGroup>
</div>
<div>
<ButtonGroup className="m-5" size="lg">
  <Button className="m-5">View Property</Button>
  <Button className="m-5">View Tenant</Button>
  <Button className="m-5">View Employee</Button>
</ButtonGroup>
</div>
</div>
    )
}
export default Homepage