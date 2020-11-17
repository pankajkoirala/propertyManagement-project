import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";

const OwnerView = (props) => {
  return (
    <div className="tenantview">
      <h1 className="text-center">owner List</h1>
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
            <th>SN</th>
            <th>Ticket id</th>
            <th>Name</th>
            <th>contact no</th>
            <th>email ID</th>
            <th>property</th>
            <th>detail view</th>
          </tr>
        </thead>
        {props.ownersData.map((arg, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{arg?.owner_ID}</td>
                <td>
                  {arg?.owner_firstName +
                    " " +
                    arg?.owner_middleName +
                    " " +
                    arg?.owner_lastName}
                </td>

                <td>{arg?.owner_phoneNo}</td>
                <td>{arg?.owner_email}</td>
                <td>
                  {arg?.owner_property?.property_type +
                    "-" +
                    arg?.owner_property?.referenceNO}
                </td>

                <td>
                  <Link to={`/ownerDetail/${arg._id}`}>
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

export default OwnerView;
