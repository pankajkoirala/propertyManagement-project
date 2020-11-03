import { combineReducers } from "redux";
import { propertyReducer } from "./property_redux";
import { TenantReducer } from "./tanent_redux";
import { employeeReducer } from "./employee_redux";
import { leaseReducer } from "./lease_property_redux";
import { maintananceCompanyReducer } from "./maintananceCompany_redux";
import { managementCompanyReducer } from "./managementCompany_redux";
import { brokerCompanyReducer } from "./broker_company";
import { chequeReducer } from "./cheque_redux";



export let rootReducer = combineReducers({
  property: propertyReducer,
  tenant: TenantReducer,
  employee: employeeReducer,
  lease: leaseReducer,
  maintananceCompany: maintananceCompanyReducer,
  managementCompany: managementCompanyReducer,
  brokerCompany: brokerCompanyReducer,
  cheque:chequeReducer
});
