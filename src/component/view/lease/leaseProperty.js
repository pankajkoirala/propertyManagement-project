import React from "react"
import moment from "moment";
import {Link} from "react-router-dom"
import { Table } from 'react-bootstrap';


const LeaseDisplay=(props)=>{
    return(
        <div>
             <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>SN</th>
                  <th> lease ID</th>
                  <th>tenent name</th>
                  <th>Lease term</th>
                  <th>commerce date</th>
                  <th>expire date</th>
                  <th>aggrement photo</th>

                </tr>
              </thead>
              {props.lease.map((arg,index)=>{
                return(
                  <tbody key={index}>
                  <tr>
                <td>{index+1}</td>
                <td>{arg.LeaseId}</td>
                <td>{arg?.tenants?.tenant_lastName} {arg?.tenants?.tenant_firstName}</td>
                <td>{arg.lease_Term}</td>
                <td>{moment(arg?.commenceDate).format("YYYY-MM-DD")}</td>
                <td>{moment(arg?.expirationDate).format("YYYY-MM-DD")}</td>
                <td><a href={arg.photo} target={arg.photo}>aggrement photo</a></td>

                    
                    <td><Link to={`/lease/${arg._id}`}> <button className="success ml-3">View Detail</button></Link> <button className="danger ml-2">Delete</button></td>
                  </tr>
                  
                </tbody>
                  )
              })}
           
            </Table>
        </div>
    )
}
 export default LeaseDisplay