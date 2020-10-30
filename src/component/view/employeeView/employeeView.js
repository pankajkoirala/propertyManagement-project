

import React from 'react'
import { Table } from 'react-bootstrap';
import {Link} from "react-router-dom"
import {connect} from 'react-redux'


const EmployeeView=(props)=>{
  return( 
  
  <div className="tenantview"> Tenant View
  
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
              {props.allEmployee.map((arg,index)=>{
                return(
                  <tbody key={index}>
                  <tr>
                <td>{index+1}</td>
                <td>{arg.Employee_ID}</td>

                <td>{arg.employee_firstName}</td>
                <td>{arg.employee_middleName}</td>
                <td>{arg.employee_lastName}</td>
                <td>{arg.employee_phoneNo}</td>
                <td>{arg.employee_email}</td>
                    
                <h1>{props. nameMatra_number}</h1>
                    <td><Link to={`/employee/${arg._id}`}> <button className="success ml-3">View Detail</button></Link> <button className="danger ml-2">Delete</button></td>
                  </tr>
                  
                </tbody>
                  )
              })}
          
            </Table>
           
  </div>
    
    )
}

const mapStateToProps = (state) => ({
  nameMatra_number: state.number,
});

const mapDispatchToProps = (dispatch) => ({
 // deletItem: (data) => dispatch({ type: delettoCart, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView);





