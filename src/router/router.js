import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//regex

import LoginComponent from "../container/login/login ";
import PrivateRouter from "./privateRouter";
import Homepage from "../container/homepage/homepage";
import PropertyEntry from "../container/entryForm/propertyEntryForm/PropertyEntryForm";
import TenantEntry from "../container/entryForm/tenantEntryForm/tenantEntryForm.js";
import EmployeeEntry from "../container/entryForm/employeeEntryForm/employeeEntryForm";
import EmployeeView from "../container/view/employeeView/employeeView.js";
import TenantView from "../container/view/tenantView/tenantView.js";
import MaintananceTicket from "../container/entryForm/maintananceTicket/maintananceTicket";
import Chequeentry from "../container/entryForm/cheque/chequeEntry/chequeEntryForm.js";
import OnePropertyView from "../container/view/propertyView/propertyDetailView";
import Lease from "../container/entryForm/leaseEntryForm/leaseEntryform";
import TanentDetailView from "../container/view/tenantView/tanentDetailView";
import EmployeeDetailView from "../container/view/employeeView/emoloyeeViewDetail";
import LeaseDetailView from "../container/view/lease/leaseDetailView";
import OwnerEntry from "../container/entryForm/ownerEntry/ownerEnty.js";
import BrokerDetailEntryForm from "../container/entryForm/brokerEntryForm/brokerDetailContainer.js";
import BrokerPersonDetail from "../container/entryForm/broker_Person/broker_PersonContainer.js";
import DeveloperDetail from "../container/entryForm/developersCompanyEntryContainer/developerContainer.js";
import InvoiceDetail from "../container/entryForm/invoiceEntryContainer/invoice.js";
import MaintainanceCompanyEntryForm from "../container/entryForm/maintainanceCompanyEntryForm/maintainanceCompanyContainer.js";
import ManagementCompany from "../container/entryForm/managementCompanyEntryForm/managementCompanyContainer.js";
import AllManagementCompany from "../container/view/managementCompany/managementCompany";
import LeaseProperty from "../container/view/lease/leaseproperty";
import AllProperty from "../container/view/propertyView/allProperty.js";
import AllBrokerCompany from "../container/view/brokerCompany/brokerCompany";
import ChequeView from "./../container/view/cheque/chequeView";
import AllMaintainanceCompany from "../container/view/maintananceCompany/maintananceCompany";
import MaintainanceCompanyDetail from "../container/view/maintananceCompany/maintananceCompanyDetail";
import ManagementCompanyDetail from "../container/view/managementCompany/managementCompanyDetail";
import BrokerCompanyDetail from "../container/view/brokerCompany/brokerDetailView";
import ChequeDetailView from "../container/view/cheque/ChequeViewDetail";
import AllDevelopementCompany from "../container/view/DevelopementCompany/DevelopementCompany";
import DeveloperCompanyDetailView from "../container/view/DevelopementCompany/DeveloperCompanyDetailView";
import ExpenseEntry from "../container/entryForm/expenseEntryForm/expenseEntryForm";
import ExpensesList from "../container/view/expense/expense";
import OwnerList from "../container/view/owner/ownerView";

import ExpenseDetailView from "../container/view/expense/expenseDetailView";
import MaintananceTicketList from "../container/view/maintananceTicket/maintananceTicket";
import MaintananceTicketDetailView from "../container/view/maintananceTicket/maintananceTicketDetailView";
import OwnerDetailView from "../container/view/owner/ownerDetailView";

const RouterPage = () => {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRouter exact path="/propertyList" component={AllProperty} />
          <PrivateRouter
            exact
            path="/expenseEntryForm"
            component={ExpenseEntry}
          />

          <PrivateRouter exact path="/" component={Homepage} />
          <PrivateRouter exact path="/propertentry" component={PropertyEntry} />
          <PrivateRouter exact path="/tenantentry" component={TenantEntry} />
          <PrivateRouter
            exact
            path="/employeeentry"
            component={EmployeeEntry}
          />
          <PrivateRouter exact path="/employeeList" component={EmployeeView} />
          <PrivateRouter exact path="/tenantList" component={TenantView} />
          <PrivateRouter exact path="/chequeentry" component={Chequeentry} />
          <PrivateRouter exact path="/chequeList" component={ChequeView} />
          <PrivateRouter exact path="/ownerList" component={OwnerList} />

          <PrivateRouter
            exact
            path="/maintananceTicket"
            component={MaintananceTicket}
          />
          <PrivateRouter exact path="/lease" component={Lease} />
          <PrivateRouter
            exact
            path="/leasePropertyList"
            component={LeaseProperty}
          />
          <PrivateRouter
            exact
            path="/maintananceCompanyList"
            component={AllMaintainanceCompany}
          />
          <PrivateRouter
            exact
            path="/managementCompanyList"
            component={AllManagementCompany}
          />
          <PrivateRouter
            exact
            path="/brokerCompanyList"
            component={AllBrokerCompany}
          />
          <PrivateRouter
            exact
            path="/developerCompanyList"
            component={AllDevelopementCompany}
          />
          <PrivateRouter exact path="/expensesList" component={ExpensesList} />
          <PrivateRouter
            exact
            path="/maintananceTicketList"
            component={MaintananceTicketList}
          />

          <Route exact path="/login" component={LoginComponent} />
          <PrivateRouter exact path="/ownerEntry" component={OwnerEntry} />
          <PrivateRouter
            exact
            path="/brokerEntryForm"
            component={BrokerDetailEntryForm}
          />
          <PrivateRouter
            exact
            path="/brokerPersonDetail"
            component={BrokerPersonDetail}
          />
          <PrivateRouter
            exact
            path="/developerDetail"
            component={DeveloperDetail}
          />
          <PrivateRouter
            exact
            path="/invoiceDetail"
            component={InvoiceDetail}
          />
          <PrivateRouter
            exact
            path="/maintainanceCompanyForm"
            component={MaintainanceCompanyEntryForm}
          />
          <PrivateRouter
            exact
            path="/managementCompany"
            component={ManagementCompany}
          />
          <PrivateRouter
            exact
            path="/propertyDetail/:id"
            component={OnePropertyView}
          />
          <PrivateRouter
            exact
            path="/ownerDetail/:id"
            component={OwnerDetailView}
          />

          <PrivateRouter
            exact
            path="/maintananceTicket/:id"
            component={MaintananceTicketDetailView}
          />

          <PrivateRouter
            exact
            path="/tanent/:id"
            component={TanentDetailView}
          />
          <PrivateRouter
            exact
            path="/employee/:id"
            component={EmployeeDetailView}
          />
          <PrivateRouter exact path="/lease/:id" component={LeaseDetailView} />
          <PrivateRouter
            exact
            path="/maintainanceCompany/:id"
            component={MaintainanceCompanyDetail}
          />
          <PrivateRouter
            exact
            path="/managementCompany/:id"
            component={ManagementCompanyDetail}
          />
          <PrivateRouter
            exact
            path="/brokerCompany/:id"
            component={BrokerCompanyDetail}
          />
          <PrivateRouter
            exact
            path="/cheque/:id"
            component={ChequeDetailView}
          />
          <PrivateRouter
            exact
            path="/DeveloperCompany/:id"
            component={DeveloperCompanyDetailView}
          />
          <PrivateRouter
            exact
            path="/expense/:id"
            component={ExpenseDetailView}
          />
        </Switch>
      </Router>
    </div>
  );
};
export default RouterPage;
