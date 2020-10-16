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
import Dashboard from "../component/view/dashboardView/dashboardView.js"
import Chequeentry from "../component/entryForm/chequeEntry/chequeEntryForm.js"
import OnePropertyView from "../container/view/propertyDetailView"
import Lease from "../container/leaseEntryForm/leaseEntryform"
import TanentDetailView from "../container/view/tanentDetailView"
const RouterPage = () => {
    return (
        <div>
            <Router>
               
                <Switch>
                <PrivateRouter exact path="/" component={Homepage} />  
                <PrivateRouter exact path="/propertentry" component={PropertyEntry} />  
                <PrivateRouter exact path="/tenantentry" component={TenantEntry} /> 
                <PrivateRouter exact path="/employeeentry" component={EmployeeEntry} />
                <PrivateRouter exact path="/employeeview" component={EmployeeView} />
                <PrivateRouter exact path="/tenantview" component={TenantView} />
                <PrivateRouter exact path="/propertyview" component={PropertyView} />
                <PrivateRouter exact path="/chequeentry" component={Chequeentry} />
                <PrivateRouter exact path="/dashboard" component={Dashboard} />
                <PrivateRouter exact path="/lease" component={Lease} />
                <Route exact path="/login" component={LoginComponent} />
                <PrivateRouter exact path="/propertyDetail/:id" component={OnePropertyView} />
                <PrivateRouter exact path="/tanent/:id" component={TanentDetailView} />


                </Switch>
            </Router>
            </div>
    )
}
export default RouterPage