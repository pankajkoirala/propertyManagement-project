import React from "react";
import "./tenantView.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";

const TenantView = (props) => {
  return (
    <div className="tenantview">
      <h1 className="text-center">Tenant View</h1>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="search"
            name="password"
            id="search"
            placeholder="search!"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID Number</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
            <th>Contact Email</th>
            <th>Remarks</th>
          </tr>
        </thead>
        {props.tenant.map((arg, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{arg.tenant_firstName}</td>
                <td>{arg.tenant_middleName}</td>
                <td>{arg.tenant_lastName}</td>
                <td>{arg.tenant_phoneNo}</td>
                <td>{arg.tenant_email}</td>

                <td>
                  <Link to={`/tanent/${arg._id}`}>
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
  );
};

export default TenantView;
