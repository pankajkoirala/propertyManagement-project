import React, { useState } from "react";
import { Table } from "reactstrap";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchInput from "./../../../shared/filterListData";

const EmployeeView = (props) => {
  let [employees, SetEmployees] = useState([]);
  let employeesList = props.allEmployee;

  if (employees.length === 0) {
    employees = employeesList;
  } else {
    employeesList = employees;
  }
  return (
    <>
      <div className="tenantview">
        <h1 className="text-center">Employee list</h1>
        <SearchInput
          filteringData={props.allEmployee.map((arg) => {
            return {
              search1:
                arg.employee_firstName +
                arg.employee_middleName +
                arg.employee_lastName,
              search2: arg.Employee_ID,
              search3: arg.employee_phoneNo,
              ID: arg._id,
            };
          })}
          setFilteredData={SetEmployees}
          allData={props.allEmployee}
        />

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SN</th>
              <th>ID Number</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Contact Number</th>
              <th>Contact Email</th>
              <th>Remarks</th>
            </tr>
          </thead>
          {employeesList.map((arg, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{arg.Employee_ID}</td>

                  <td>{arg.employee_firstName}</td>
                  <td>{arg.employee_middleName}</td>
                  <td>{arg.employee_lastName}</td>
                  <td>{arg.employee_phoneNo}</td>
                  <td>{arg.employee_email}</td>

                  <h1>{props.nameMatra_number}</h1>
                  <td>
                    <Link to={`/employee/${arg._id}`}>
                      {" "}
                      <button className="success ml-3">View Detail</button>
                    </Link>{" "}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  nameMatra_number: state.number,
});

const mapDispatchToProps = (dispatch) => ({
  // deletItem: (data) => dispatch({ type: delettoCart, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView);
