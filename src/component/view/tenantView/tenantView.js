import React from 'react'
import "./tenantView.css"
import { Table } from 'react-bootstrap';


const TenantView=(props)=>{
  console.log(props.tenant);
  return( 
  
  <div className="tenantview"> Tenant/Occupants View
  
  <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Contact Number</th>
                  <th>Contact Email</th>
                  <th>Role</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td></td>
                  <td>Otto</td>
                  <td>98446454545</td>
                  <td>abc@email.com</td>
                  <td>Tenant</td>
                  <td><button className="success ml-3">View Detail</button><button className="danger ml-2">Delete</button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>123456</td>
                  <td>cccc@email.com</td>
                  <td>Occupant</td>
                  <td><button className="success ml-3">View Detail</button><button className="danger ml-2">Delete</button></td>
                </tr>
                <tr>
                <td>3</td>
                  <td>Jony</td>
                  <td>Hilton</td>
                  <td>Hanry</td>
                  <td>4454445</td>
                  <td>hamro@email.com</td>
                  <td>Occupant</td>
                  <td><button className="success ml-3">View Detail</button><button className="danger ml-2">Delete</button></td>
                </tr>
                <tr>
                <td>4</td>
                  <td>Jony</td>
                  <td>Hilton</td>
                  <td>Hanry</td>
                  <td>4454445</td>
                  <td>timro@email.com</td>
                  <td>Tenant</td>
                  <td><button className="success ml-3">View Detail</button><button className="danger ml-2">Delete</button></td>
                </tr>
                <tr>
                <td>5</td>
                  <td>Jony</td>
                  <td>Hilton</td>
                  <td>Hanry</td>
                  <td>4454445</td>
                  <td>xyz@email.com</td>
                  <td>Tenant</td>
                  <td><button className="success ml-3">View Detail</button><button className="danger ml-2">Delete</button></td>
                </tr>
              </tbody>
            </Table>
  
  
  
  </div>
    
    )
}


export default TenantView