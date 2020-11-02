import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "../container/login/login ";
import PrivateRouter from "./privateRouter"
import Homepage from "../container/homepage/homepage"
import PropertyEntry from "../container/entryForm/propertyEntryForm/PropertyEntryForm"
import TenantEntry from "../container/entryForm/tenantEntryForm/tenantEntryForm.js"
import EmployeeEntry from "../container/entryForm/employeeEntryForm/employeeEntryForm"
import EmployeeView from "../container/view/employeeView/employeeView.js"
import TenantView from "../container/view/tenantView/tenantView.js"
import Dashboard from "../component/view/dashboardView/dashboardView.js"
import Chequeentry from "../container/entryForm/cheque/chequeEntry/chequeEntryForm.js"
import OnePropertyView from "../container/view/propertyView/propertyDetailView"
import Lease from "../container/entryForm/leaseEntryForm/leaseEntryform"
import TanentDetailView from "../container/view/tenantView/tanentDetailView"
import EmployeeDetailView from "../container/view/employeeView/emoloyeeViewDetail"
import LeaseDetailView from "../container/view/lease/leaseDetailView"



import OwnerEntry from "../container/entryForm/ownerEntry/ownerEnty.js"
import BankDetail  from "../container/entryForm/bankAccountEntryForm/bankAccountContainer.js"
import BrokerDetail  from "../container/entryForm/brokerEntryForm/brokerDetailContainer.js"
import BrokerPersonDetail  from "../container/entryForm/broker_Person/broker_PersonContainer.js"
import DeveloperDetail  from "../container/entryForm/developersCompanyEntryContainer/developerContainer.js"
import InvoiceDetail from "../container/entryForm/invoiceEntryContainer/invoice.js"
import MaintainanceCompanyEntryForm from "../container/entryForm/maintainanceCompanyEntryForm/maintainanceCompanyContainer.js"
import ManagementCompany from "../container/entryForm/managementCompanyEntryForm/managementCompanyContainer.js"
import AllManagementCompany from "../container/view/managementCompany/managementCompany"

import ChequeBounce from "../container/entryForm/cheque/chequeBounce/chequeBounceEntry.js"
import ChequeHold from "../container/entryForm/cheque/chequeHold/chequeHoldEntry.js"
import LeaseProperty from "../container/view/lease/leaseproperty"

import AllProperty from "../container/view/propertyView/allProperty.js"
import AllMaintainanceCompany from "../container/view/maintananceCompany/maintananceCompany"
import MaintainanceCompanyDetail from "../container/view/maintananceCompany/maintananceCompanyDetail"
import ManagementCompanyDetail from "../container/view/managementCompany/managementCompanyDetail"





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
                <PrivateRouter exact path="/leaseProperty" component={LeaseProperty} />
                <PrivateRouter exact path="/maintananceCompanyList" component={AllMaintainanceCompany} />
                <PrivateRouter exact path="/managementCompanyList" component={AllManagementCompany} />


               

                <Route exact path="/login" component={LoginComponent} />
                <PrivateRouter exact path="/ownerEntry" component={OwnerEntry} />
                <PrivateRouter exact path="/bankDetail" component={BankDetail} />
                <PrivateRouter exact path="/brokerDetail" component={BrokerDetail} />
                <PrivateRouter exact path="/brokerPersonDetail" component={BrokerPersonDetail} />
                
                <PrivateRouter exact path="/developerDetail" component={DeveloperDetail} />
                <PrivateRouter exact path="/invoiceDetail" component={InvoiceDetail} />
                <PrivateRouter exact path="/maintainanceCompanyForm" component={MaintainanceCompanyEntryForm} />
                <PrivateRouter exact path="/managementCompany" component={ManagementCompany} />
                <PrivateRouter exact path="/chequeBounce" component={ChequeBounce} />
                <PrivateRouter exact path="/chequeHold" component={ChequeHold} />
                <PrivateRouter exact path="/propertyDetail/:id" component={OnePropertyView} />
                <PrivateRouter exact path="/tanent/:id" component={TanentDetailView} />
                <PrivateRouter exact path="/employee/:id" component={EmployeeDetailView} />
                <PrivateRouter exact path="/lease/:id" component={LeaseDetailView} />
                <PrivateRouter exact path="/maintainanceCompany/:id" component={MaintainanceCompanyDetail} />
                <PrivateRouter exact path="/managementCompany/:id" component={ManagementCompanyDetail} />


                


                </Switch>
            </Router>
            </div>
    )
}
export default RouterPage