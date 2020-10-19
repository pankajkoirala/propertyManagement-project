import React from 'react'
import "./employeeView.css"
import { Table } from 'react-bootstrap';
//import {Link} from "react-router-dom"


const EmployeeView=(props)=>{
  console.log(props.tenant);
  return( 
  
  
  <div className="view"> Employee Views
   
                <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Contact Number</th>
                  <th>Post</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
              {/* {props.tenant.map((arg,index)=>{
                return(
              <tbody key={index}>
                <tr>
                  <td>{index+1}</td>
                  <td>{arg.employee_firstName}</td>
                  <td>{arg.employee_middleName}</td>
                  <td>{arg.employee_lastName}</td>
                  <td>{arg.employee_phoneNo}</td>
                  <td>{arg.employee_post}</td>
                  <td><Link to={`/employee/${arg._id}`}> <button className="success ml-3">View Detail</button></Link> <button className="danger ml-2">Delete</button></td>
                  </tr> */}

              </tbody>
              {/* )
            })} */}
            </Table>
    </div>
    
    )
}


export default EmployeeView