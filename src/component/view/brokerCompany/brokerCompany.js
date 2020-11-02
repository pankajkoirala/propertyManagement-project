import React from 'react'
import { Table } from 'react-bootstrap';
import {Link} from "react-router-dom"


const BrokerCompanyView=(props)=>{
  return( 
  <div className="tenantview"> broker Company List
  
  <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID Number</th>
                  <th>broker company id</th>
                  <th>broker company name</th>
                  <th>broker registration num</th>
                  <th>broker Contact Number</th>
                  <th>broker Contact Email</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              {props.allBrokerCompany.map((arg,index)=>{
                return(
                  <tbody key={index}>
                  <tr>
                <td>{index+1}</td>
                <td>{arg.brokerId}</td>
                <td>{arg.broker_companyName}</td>
                <td>{arg.broker_RegistrationNumber}</td>
                <td>{arg.broker_phoneNo}</td>
                <td>{arg.broker_email}</td>
                    
                    <td><Link to={`/brokerCompany/${arg._id}`}> <button className="success ml-3">View Detail</button></Link> <button className="danger ml-2">Delete</button></td>
                  </tr>
                  
                </tbody>
                  )
              })}
          
            </Table>
           
  </div>
    
    )
}


export default BrokerCompanyView;


