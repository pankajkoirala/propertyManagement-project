  
import { combineReducers } from "redux";
import { propertyReducer } from "./property_redux";
import { TenantReducer } from "./tanent_redux";
import { employeeReducer } from "./employee_redux";
import { leaseReducer } from "./lease_property_redux";



export let rootReducer = combineReducers({
  property: propertyReducer,
  tenant:TenantReducer,
  employee:employeeReducer,
  lease:leaseReducer
});