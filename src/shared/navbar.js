import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import HouseIcon from '@material-ui/icons/House';
import PersonIcon from '@material-ui/icons/Person';
import GroupsIcon from '@material-ui/icons/Group';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SubjectIcon from '@material-ui/icons/Subject';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BugReportIcon from '@material-ui/icons/BugReport';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import BusinessIcon from '@material-ui/icons/Business';
import DevicesIcon from '@material-ui/icons/Devices';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import "./navbar.css";

const NavbarPage = () => {
  let logout = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="menu">
      <div className="branding-section">
        <h4><EmojiTransportationIcon fontSize="large"/>&nbsp;Graphine INC.</h4>
      </div>
      <div className="user-avatar">
        <Avatar alt="user-avatar" variant="rounded" style={{height:'70px',width:'100px'}}>
          <AccountCircleIcon fontSize='large'  />
        </Avatar>
        <p className="user-name">John</p>
      </div>
      <Accordion  defaultActiveKey="" >
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Link to="/">
              <Accordion.Toggle style={{borderRadius:'50px',border:'none'}} as={Card.Header} variant="link">
                <b className="text-white"><ExploreIcon/>Dashboard</b>
              </Accordion.Toggle>
            </Link>
          </Card.Header>
        </Card>
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              <b><HouseIcon/>Property</b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
              <b><PersonIcon/>Tenant</b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} style={{border:'none',opacity:'100%'}} variant="link" eventKey="3">
              <b><AssignmentIcon/>Lease</b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
              <b><GroupsIcon/> Employee</b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
              <b><LocalAtmIcon/>Cheque</b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="6">
              <b><BugReportIcon/>Maintainance Ticket</b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="7">
              <b><PermIdentityIcon/>Owner </b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="8">
              <b><BusinessIcon/>Broker Company </b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="9">
              <b><DevicesIcon/>Developer Company </b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="10">
              <b><SettingsApplicationsIcon/>Maintanance Company </b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header >
            <Accordion.Toggle as={Card.Header}  variant="link" eventKey="11">
              <b><SubjectIcon/>Management Company </b>
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
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="12">
              <b><AttachMoneyIcon/>Expense </b>
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
        <Card style={{backgroundColor:'#3B4AFF' ,border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              <b  onClick={() => logout()}>
                <ExitToAppIcon/>Logout
              </b>
            </Accordion.Toggle>
          </Card.Header>
        </Card>
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="13">
              <Link to="/brokerPersonDetail">
                {" "}
                <b><ImportContactsIcon/>Broker Person Detail</b>{" "}
              </Link>
            </Accordion.Toggle>
          </Card.Header>
        </Card>
        <Card style={{backgroundColor:'#3B4AFF',border:'none'}}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="14">
              <Link to="/invoiceDetail">
                {" "}
                <b>Invoice Detail</b>{" "}
              </Link>
            </Accordion.Toggle>
          </Card.Header>
        </Card>
      </Accordion>
    </div>
  );
};

export default NavbarPage;
