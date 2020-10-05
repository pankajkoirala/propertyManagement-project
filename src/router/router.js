import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "../container/login/login ";
import PrivateRouter from "./privateRouter"
import Homepage from "../container/homepage/homepage"
import PropertyEntry from "../container/propertyEntryForm/PropertyEntryForm"
import TenantEntry from "../container/tenantEntryForm/tenantEntryForm.js"
import EmployeeEntry from "../container/employeeEntryForm/employeeEntryForm.js"
import EmployeeView from "../container/view/employeeView.js"
import PropertyView from "../container/view/propertyView.js"
import TenantView from "../container/view/tenantView.js"

const RouterPage = () => {
    return (
            <Router>
               
                <Switch>
                <PrivateRouter exact path="/" component={Homepage} />  
                <PrivateRouter exact path="/entry" component={PropertyEntry} />  
                <PrivateRouter exact path="/tenantentry" component={TenantEntry} /> 
                <PrivateRouter exact path="/employeeentry" component={EmployeeEntry} />
                <PrivateRouter exact path="/employeeview" component={EmployeeView} />
                <PrivateRouter exact path="/tenantview" component={TenantView} />
                <PrivateRouter exact path="/propertyview" component={PropertyView} />
                
                <Route exact path="/login" component={LoginComponent} />
                </Switch>
            </Router>
    )
}
export default RouterPage