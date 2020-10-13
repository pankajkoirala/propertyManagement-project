import React from 'react'
import "./employeeView.css"
import { Table } from 'react-bootstrap';


const EmployeeView=()=>{
  return( 
  
  <div className="view"> 
   
                <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Contact Number</th>
                  <th>Post</th>
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
                  <td>Accountant</td>
                  <td><button className="success ml-3">View Detail</button><button className="danger ml-2">Delete</button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>123456</td>
                  <td>Carpenter</td>
                  <td><button className="success ml-3">View Detail</button><button className="danger ml-2">Delete</button></td>
                </tr>
                <tr>
                <td>3</td>
                  <td>Jony</td>
                  <td>Hilton</td>
                  <td>Hanry</td>
                  <td>4454445</td>
                  <td>Plumber</td>
                  <td><button className="success ml-3">View Detail</button><button className="danger ml-2">Delete</button></td>
                </tr>
                <tr>
                <td>4</td>
                  <td>Jony</td>
                  <td>Hilton</td>
                  <td>Hanry</td>
                  <td>4454445</td>
                  <td>Plumber</td>
                  <td><button className="success ml-3">View Detail</button><button className="danger ml-2">Delete</button></td>
                </tr>
                <tr>
                <td>5</td>
                  <td>Jony</td>
                  <td>Hilton</td>
                  <td>Hanry</td>
                  <td>4454445</td>
                  <td>Plumber</td>
                  <td><button className="success ml-3">View Detail</button><button className="danger ml-2">Delete</button></td>
                </tr>
              </tbody>
            </Table>
    </div>
    
    )
}


export default EmployeeView