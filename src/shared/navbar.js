import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavbarPage = () => {
  let logout = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <Accordion defaultActiveKey="" className="menu">
      <Card>
        <Card.Header>
          <Link to="/">
            <Accordion.Toggle as={Card.Header} variant="link">
              <b className="text-dark">Dashboard</b>
            </Accordion.Toggle>
          </Link>
        </Card.Header>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            <b>Property</b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Link to="/propertentry">
              <Button variant="primary" className="button-size">
                Create Property
              </Button>
            </Link>

            <Link to="/propertyList">
              <Button variant="success" className="button-size">
                View Property
              </Button>
            </Link>
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
          <Card.Body>
            <Link to="/tenantentry">
              <Button variant="primary" className="button-size">
                Add Tenant
              </Button>
            </Link>

            <Link to="/tenantList">
              <Button variant="success" className="button-size">
                View Tenant
              </Button>
            </Link>
            <br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            <b>Lease</b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <Link to="/lease">
              <Button variant="primary" className="button-size">
                lease entry
              </Button>
            </Link>

            <Link to="/leasePropertyList">
              <Button variant="success" className="button-size">
                leased property
              </Button>
            </Link>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            <b> Employee</b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Link to="/employeeentry">
              {" "}
              <Button variant="primary" className="button-size">
                Add Employee
              </Button>
            </Link>

            <Link to="/employeeList">
              {" "}
              <Button variant="success" className="button-size">
                View Employee
              </Button>
            </Link>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
            <b>Cheque</b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            <Link to="/chequeentry">
              {" "}
              <Button variant="primary" className="button-size">
                Cheque Entry
              </Button>
            </Link>
            <br />

            <Link to="/chequeList">
              {" "}
              <Button variant="success" className="button-size">
                Cheque View
              </Button>
            </Link>
            <br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="6">
            <b>Maintainance Ticket</b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body>
            <Link to="/maintananceTicket">
              {" "}
              <Button variant="primary" className="button-size">
                Maintanance Ticket Form
              </Button>
            </Link>
            <br />

            <Link to="/maintananceTicketList">
              {" "}
              <Button variant="success" className="button-size">
                Maintanance Ticke tList{" "}
              </Button>
            </Link>
            <br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="7">
            <b>Owner </b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="7">
          <Card.Body>
            <Link to="/ownerEntry">
              {" "}
              <Button variant="primary" className="button-size">
                Owner Entry{" "}
              </Button>
            </Link>
            <br />

            <Link to="/ownerList">
              {" "}
              <Button variant="success" className="button-size">
                Owner List{" "}
              </Button>
            </Link>
            <br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="8">
            <b>Broker Company </b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="8">
          <Card.Body>
            <Link to="/brokerEntryForm">
              {" "}
              <Button variant="primary" className="button-size">
                broker Company Entry{" "}
              </Button>
            </Link>
            <br />

            <Link to="/brokerCompanyList">
              {" "}
              <Button variant="success" className="button-size">
                broker Company List{" "}
              </Button>
            </Link>
            <br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="9">
            <b>Developer Company </b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="9">
          <Card.Body>
            <Link to="/developerDetail">
              {" "}
              <Button variant="primary" className="button-size">
                Developer Company Entry
              </Button>
            </Link>
            <br />

            <Link to="/developerCompanyList">
              {" "}
              <Button variant="success" className="button-size">
                Developer Company List
              </Button>
            </Link>
            <br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>{" "}
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="10">
            <b>Maintanance Company </b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="10">
          <Card.Body>
            <Link to="/maintainanceCompanyForm">
              {" "}
              <Button variant="primary" className="button-size">
                Maintanance Company Entry
              </Button>
            </Link>
            <br />

            <Link to="/maintananceCompanyList">
              {" "}
              <Button variant="success" className="button-size">
                Maintanance Company List
              </Button>
            </Link>
            <br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="11">
            <b>Management Company </b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="11">
          <Card.Body>
            <Link to="/managementCompany">
              {" "}
              <Button variant="primary" className="button-size">
                Management Company Entry
              </Button>
            </Link>
            <br />

            <Link to="/managementCompanyList">
              {" "}
              <Button variant="success" className="button-size">
                Maintanance Company List
              </Button>
            </Link>
            <br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="12">
            <b>Expense </b>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="12">
          <Card.Body>
            <Link to="/expenseEntryForm">
              {" "}
              <Button variant="primary" className="button-size">
                Expense Entry
              </Button>
            </Link>
            <br />

            <Link to="/expensesList">
              {" "}
              <Button variant="success" className="button-size">
                Expense List
              </Button>
            </Link>
            <br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="4">
          <b className="m-5" onClick={() => logout()}>
            Logout
          </b>
        </Accordion.Toggle>
      </Card.Header>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="13">
            <Link to="/brokerPersonDetail">
              {" "}
              <b>Broker Person Detail</b>{" "}
            </Link>
          </Accordion.Toggle>
        </Card.Header>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="10">
            <Link to="/invoiceDetail">
              {" "}
              <b>Invoice Detail</b>{" "}
            </Link>
          </Accordion.Toggle>
        </Card.Header>
      </Card>
    </Accordion>
  );
};

export default NavbarPage;
