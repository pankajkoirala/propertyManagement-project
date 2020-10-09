import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './navbar.css'


const NavbarPage = () => {
 

  return (
    <div>
<Accordion defaultActiveKey="" className="menu">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
    
       <b>Property</b>

      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>

      <Link to="/propertentry"><Button variant="primary" className="button-size">Create Property</Button></Link><br/> 
      <Link to="/propertyedit"><Button variant="secondary" className="button-size">Edit Property</Button></Link><br/>
      <Link to="/propertyview"><Button variant="success" className="button-size">View Property</Button></Link><br/>
      <Link to="/propertydelete"><Button variant="danger" className="button-size">Delete Property</Button></Link><br/>
      
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
        <b>Tenant</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body><Link to="/tenantentry"><Button variant="primary" className="button-size">Add Tenant</Button></Link><br/> 
      <Link to="/tenantedit"><Button variant="secondary" className="button-size">Edit Tenant</Button></Link><br/>
                <Link to="/tenantview"><Button variant="success" className="button-size">View Tenant</Button></Link><br/>
                <Link to="/tenantassigned"><Button variant="warning" className="button-size">Assign property</Button></Link><br/>
                <Link to="/tenantdelete"><Button variant="danger" className="button-size">Delete Tenant</Button></Link><br/></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
       <b> Employee</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body><Link to="/employeeentry"> <Button variant="primary" className="button-size">Add Employee</Button></Link><br/> 
      <Link to="/employeeedit">  <Button variant="secondary" className="button-size">Edit Employee</Button></Link><br/>
                <Link to="/employeeview"> <Button variant="success" className="button-size">View Employee</Button></Link><br/>
                <Link to="/employeedelete"> <Button variant="danger" className="button-size">Delete Employee</Button></Link><br/></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
       <b> Payment</b>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body><Link to="/paymententry"> <Button variant="primary" className="button-size">Add Payment</Button></Link><br/> 
      <Link to="/paymentupdate">  <Button variant="secondary" className="button-size">Update</Button></Link><br/>
                <Link to="/paymentview"> <Button variant="success" className="button-size">View Payment</Button></Link><br/>
                </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Others
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Hello! </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="6">
      <Link to="/dashboard"> <b>Dashboard</b> </Link>
      </Accordion.Toggle>
    </Card.Header>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        <b>Logout </b>
      </Accordion.Toggle>
    </Card.Header>
  </Card>
</Accordion>
    </div>
  );
}

export default NavbarPage;