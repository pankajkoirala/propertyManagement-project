import React from 'react'
import "./tenantView.css"
import { Table } from 'react-bootstrap';
import {Link} from "react-router-dom"


const TenantView=(props)=>{
  console.log(props.tenant);
  return( 
  
  <div className="tenantview"> Tenant/Occupants View
  
  <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Contact Number</th>
                  <th>Contact Email</th>
               
                  <th>Remarks</th>
                </tr>
              </thead>
              {props.tenant.map((arg,index)=>{
                return(
                  <tbody key={index}>
                  <tr>
                <td>{index+1}</td>
                <td>{arg.tenant_firstName}</td>
                <td>{arg.tenant_middleName}</td>
                <td>{arg.tenant_lastName}</td>
                <td>{arg.tenant_phoneNo}</td>
                <td>{arg.tenant_email}</td>
                    
                    <td><Link to={`/tanent/${arg._id}`}> <button className="success ml-3">View Detail</button></Link> <button className="danger ml-2">Delete</button></td>
                  </tr>
                  
                </tbody>
                  )
              })}
           
            </Table>
  
  
  
  </div>
    
    )
}


export default TenantView