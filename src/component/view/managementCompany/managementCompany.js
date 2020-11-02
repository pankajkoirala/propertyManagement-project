import React from 'react'
import { Table } from 'react-bootstrap';
import {Link} from "react-router-dom"


const ManagementCompanyView=(props)=>{
    console.log('ManagementCompany',props.ManagementCompany);

  return( 
  
  <div className="tenantview"> 
      <h1 className='text-center'>Management Company List</h1> 
  
  <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID Number</th>
                  <th>company id</th>
                  <th>company name</th>
                  <th>registration num</th>
                  <th>Contact Number</th>
                  <th>Contact Email</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              {props.ManagementCompany.map((arg,index)=>{
                return(
                  <tbody key={index}>
                  <tr>
                <td>{index+1}</td>
                <td>{arg.managementCompany_companyID}</td>
                <td>{arg.managementCompany_name}</td>
                <td>{arg.managementCompany_Registeration_Number}</td>
                <td>{arg.managementCompany_phoneNo}</td>
                <td>{arg.managementCompany_email}</td>
                    
                    <td><Link to={`/managementCompany/${arg._id}`}> <button className="success ml-3">View Detail</button></Link> </td>
                  </tr>
                  
                </tbody>
                  )
              })}
          
            </Table>
           
  </div>
    
    )
}


export default ManagementCompanyView;


