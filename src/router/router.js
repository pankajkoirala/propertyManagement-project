import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "../container/login/login ";
import PrivateRouter from "./privateRouter"
import Homepage from "../container/homepage/homepage"
import PropertyEntry from "../container/propertyEntryForm/PropertyEntryForm"
import TenantEntry from "../container/tenantEntryForm/tenantEntryForm.js"
import EmployeeEntry from "../container/employeeEntryForm/employeeEntryForm.js"
import EmployeeView from "../container/view/employeeView.js"
import TenantView from "../container/view/tenantView.js"
import Dashboard from "../component/view/dashboardView/dashboardView.js"
import Chequeentry from "../container/entryForm/cheque/chequeEntry/chequeEntryForm.js"
import OnePropertyView from "../container/view/propertyView/propertyDetailView"
import Lease from "../container/leaseEntryForm/leaseEntryform"
import TanentDetailView from "../container/view/tanentDetailView"
import OwnerEntry from "../container/entryForm/ownerEntry/ownerEnty.js"
import BankDetail  from "../container/entryForm/bankAccountEntryForm/bankAccountContainer.js"
import BrokerDetail  from "../container/entryForm/brokerEntryForm/brokerDetailContainer.js"
import DeveloperDetail  from "../container/entryForm/developersCompanyEntryContainer/developerContainer.js"
import InvoiceDetail from "../container/entryForm/invoiceEntryContainer/invoice.js"
import MaintainanceCompany from "../container/entryForm/maintainanceCompanyEntryForm/maintainanceCompanyContainer.js"
import ManagementCompany from "../container/entryForm/managementCompanyEntryForm/managementCompanyContainer.js"
import ChequeBounce from "../container/entryForm/cheque/chequeBounce/chequeBounceEntry.js"
import ChequeHold from "../container/entryForm/cheque/chequeHold/chequeHoldEntry.js"
import BrokerPerson from "../container/entryForm/broker_Person/broker_PersonContainer.js"

import AllProperty from "../container/view/propertyView/allProperty.js"

const RouterPage = () => {

    return (
        <div>
            <Router>
               
                <Switch>
                <PrivateRouter exact path="/propertyView" component={AllProperty} />  
                <PrivateRouter exact path="/" component={Homepage} />  
                <PrivateRouter exact path="/propertentry" component={PropertyEntry} />  
                <PrivateRouter exact path="/tenantentry" component={TenantEntry} /> 
                <PrivateRouter exact path="/employeeentry" component={EmployeeEntry} />
                <PrivateRouter exact path="/employeeview" component={EmployeeView} />
                <PrivateRouter exact path="/tenantview" component={TenantView} />
                <PrivateRouter exact path="/chequeentry" component={Chequeentry} />
                <PrivateRouter exact path="/dashboard" component={Dashboard} />
                <PrivateRouter exact path="/lease" component={Lease} />
                <Route exact path="/login" component={LoginComponent} />
                <PrivateRouter exact path="/propertyDetail/:id" component={OnePropertyView} />
                <PrivateRouter exact path="/tanent/:id" component={TanentDetailView} />
                <PrivateRouter exact path="/ownerEntry" component={OwnerEntry} />
                <PrivateRouter exact path="/bankDetail" component={BankDetail} />
                <PrivateRouter exact path="/brokerDetail" component={BrokerDetail} />
                <PrivateRouter exact path="/developerDetail" component={DeveloperDetail} />
                <PrivateRouter exact path="/invoiceDetail" component={InvoiceDetail} />
                <PrivateRouter exact path="/maintainanceCompany" component={MaintainanceCompany} />
                <PrivateRouter exact path="/managementCompany" component={ManagementCompany} />
                <PrivateRouter exact path="/chequeBounce" component={ChequeBounce} />
                <PrivateRouter exact path="/chequeHold" component={ChequeHold} />
                <PrivateRouter exact path="/brokerPerson" component={BrokerPerson} />
                
                </Switch>
            </Router>
            </div>
    )
}
export default RouterPage