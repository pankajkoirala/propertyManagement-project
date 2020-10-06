import React from "react"
import "./homepage.css"
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
        <div className="bck-color">
        {/* <div><Navbar/></div> */}
       <button className="m-5"onClick={()=>logout()}>Logout</button>

        <div>
<ButtonGroup size="lg" className="m-2 d-flex justify-content-around">
<Link to="/propertentry"><Button color="primary" size="lg" block className="buttonProperty"> Create Property</Button></Link>
  <Link to="/tenantentry"><Button color="success" size="lg" block className="buttonProperty"> Create Tenant</Button> </Link>
  <Link to="/employeeentry"><Button color="secondary" size="lg" block className="buttonProperty"> Create Employee</Button></Link>
</ButtonGroup>
</div>
<br/>
<br/>
<div>
<ButtonGroup  size="lg" className=" d-flex justify-content-around">
<Link to="/propertyview"><Button color="danger" size="lg" block className="buttonProperty" >View Property</Button></Link>
<Link to="/tenantview"> <Button color="warning" size="lg" block className="buttonProperty">View Tenant</Button></Link>
<Link to="/employeeview"><Button color="info" size="lg" block className="buttonProperty" >View Employee</Button></Link>
</ButtonGroup>
</div>
</div>
    )
}
export default Homepage