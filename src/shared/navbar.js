import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import ExploreIcon from "@material-ui/icons/Explore";
import HouseIcon from "@material-ui/icons/House";
import PersonIcon from "@material-ui/icons/Person";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SubjectIcon from "@material-ui/icons/Subject";
import BugReportIcon from "@material-ui/icons/BugReport";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import BusinessIcon from "@material-ui/icons/Business";
import DevicesIcon from "@material-ui/icons/Devices";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AddBoxIcon from "@material-ui/icons/AddBox";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { motion } from "framer-motion";

import "./navbar.css";

const NavbarPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -280 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut" }}
      style={{ backgroundColor: "#3B4AFF", height: "100%" }}
      className="menu "
    >
      <div className="branding-section" style={{}}>
        <h4>
          <EmojiTransportationIcon fontSize="large" />
          &nbsp;GRAPHENE
        </h4>
      </div>
      <div className="user-avatar">
        {/* <Avatar
          alt="user-avatar"
          variant="rounded"
          style={{ height: "90px", width: "150px" }}
        >
          <AccountCircleIcon fontSize="large" />
        </Avatar> */}
        {/* <p className="user-name">John</p> */}
      </div>
      <Accordion style={{ marginTop: "10px" }} defaultActiveKey="">
        <Card
          style={{
            border: "none",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Link to="/">
              <Accordion.Toggle
                style={{
                  border: "none",
                  // backgroundColor: "#66b2ff",
                  // borderRadius: "50px",
                }}
                as={Card.Header}
                variant="link"
              >
                <b className="text-white">
                  <ExploreIcon className="nav-icons" />
                  Dashboard
                </b>
              </Accordion.Toggle>
            </Link>
          </Card.Header>
        </Card>
        <Card
          style={{ border: "none", backgroundColor: "#022B39", height: "auto" }}
        >
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="0"
            >
              <b>
                <HouseIcon className="nav-icons" />
                Property
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Link to="/propertentry">
                <Button variant="primary" className="button-size">
                  <AddBoxIcon />
                  Create Property
                </Button>
              </Link>

              <Link to="/propertyList">
                <Button variant="success" className="button-size">
                  <VisibilityIcon />
                  View Property
                </Button>
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="1"
            >
              <b>
                <PersonIcon className="nav-icons" />
                Tenant
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Link to="/tenantentry">
                <Button variant="primary" className="button-size">
                  <AddBoxIcon />
                  Add Tenant
                </Button>
              </Link>

              <Link to="/tenantList">
                <Button variant="success" className="button-size">
                  <VisibilityIcon />
                  View Tenant
                </Button>
              </Link>
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="3"
            >
              <b>
                <AssignmentIcon className="nav-icons" />
                Lease
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Link to="/lease">
                <Button variant="primary" className="button-size">
                  <AddBoxIcon />
                  Lease entry
                </Button>
              </Link>

              <Link to="/leasePropertyList">
                <Button variant="success" className="button-size">
                  <VisibilityIcon />
                  Leased Property
                </Button>
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                backgroundColor: "#66b2ff",
                borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="2"
            >
              <b>
                <GroupsIcon /> Employee
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Link to="/employeeentry">
                {" "}
                <Button variant="primary" className="button-size">
                  <AddBoxIcon />
                  Add Employee
                </Button>
              </Link>

              <Link to="/employeeList">
                {" "}
                <Button variant="success" className="button-size">
                  <VisibilityIcon />
                  View Employee
                </Button>
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card> */}
        <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="5"
            >
              <b>
                <LocalAtmIcon className="nav-icons" />
                Cheque
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <Link to="/chequeentry">
                {" "}
                <Button variant="primary" className="button-size">
                  <AddBoxIcon className="nav-icons" />
                  Cheque Entry
                </Button>
              </Link>
              <br />

              <Link to="/chequeList">
                {" "}
                <Button variant="success" className="button-size">
                  <VisibilityIcon className="nav-icons" />
                  Cheque View
                </Button>
              </Link>
              <br />
              <Link to="/chequeUpdateInfo">
                <Button variant="success" className="button-size">
                  <VisibilityIcon className="nav-icons" />
                  Cheque Info
                </Button>
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="6"
            >
              <b>
                <BugReportIcon className="nav-icons" />
                Maintainance Ticket
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <Link to="/maintananceTicket">
                {" "}
                <Button variant="primary" className="button-size">
                  <AddBoxIcon className="nav-icons" />
                  Maintanance Ticket Form
                </Button>
              </Link>
              <br />

              <Link to="/maintananceTicketList">
                {" "}
                <Button variant="success" className="button-size">
                  <VisibilityIcon />
                  Maintanance Ticket List{" "}
                </Button>
              </Link>
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="7"
            >
              <b>
                <PermIdentityIcon className="nav-icons" />
                Owner
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <Link to="/ownerEntry">
                {" "}
                <Button variant="primary" className="button-size">
                  <AddBoxIcon />
                  Owner Entry{" "}
                </Button>
              </Link>
              <br />

              <Link to="/ownerList">
                {" "}
                <Button variant="success" className="button-size">
                  <VisibilityIcon className="nav-icons" />
                  Owner List{" "}
                </Button>
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="8"
            >
              <b>
                <BusinessIcon className="nav-icons" />
                Broker Company{" "}
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              <Link to="/brokerEntryForm">
                {" "}
                <Button variant="primary" className="button-size">
                  <AddBoxIcon />
                  Broker Company Entry{" "}
                </Button>
              </Link>
              <br />

              <Link to="/brokerCompanyList">
                {" "}
                <Button variant="success" className="button-size">
                  <VisibilityIcon className="nav-icons" />
                  Broker Company List{" "}
                </Button>
              </Link>
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="9"
            >
              <b>
                <DevicesIcon className="nav-icons" />
                Developer Company{" "}
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              <Link to="/developerDetail">
                {" "}
                <Button variant="primary" className="button-size">
                  <AddBoxIcon className="nav-icons" />
                  Developer Company Entry
                </Button>
              </Link>
              <br />

              <Link to="/developerCompanyList">
                {" "}
                <Button variant="success" className="button-size">
                  <VisibilityIcon className="nav-icons" />
                  Developer Company List
                </Button>
              </Link>
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>{" "}
        <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="10"
            >
              <b>
                <SettingsApplicationsIcon className="nav-icons" />
                Maintanance Company{" "}
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="10">
            <Card.Body>
              <Link to="/maintainanceCompanyForm">
                {" "}
                <Button variant="primary" className="button-size">
                  <AddBoxIcon className="nav-icons" />
                  Maintanance Company Entry
                </Button>
              </Link>
              <br />

              <Link to="/maintananceCompanyList">
                {" "}
                <Button variant="success" className="button-size">
                  <VisibilityIcon className="nav-icons" />
                  Maintanance Company List
                </Button>
              </Link>
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="11"
            >
              <b>
                <SubjectIcon className="nav-icons" />
                Management Company{" "}
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="11">
            <Card.Body>
              <Link to="/managementCompany">
                {" "}
                <Button variant="primary" className="button-size">
                  <AddBoxIcon />
                  Management Company Entry
                </Button>
              </Link>
              <br />

              <Link to="/managementCompanyList">
                {" "}
                <Button variant="success" className="button-size">
                  <VisibilityIcon className="nav-icons" />
                  Maintanance Company List
                </Button>
              </Link>
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none", backgroundColor: "#022B39" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Accordion.Toggle
              style={{
                border: "none",
                // backgroundColor: "#66b2ff",
                // borderRadius: "50px",
              }}
              as={Card.Header}
              variant="link"
              eventKey="12"
            >
              <b>
                <AttachMoneyIcon className="nav-icons" />
                Expense{" "}
              </b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="12">
            <Card.Body>
              <Link to="/expenseEntryForm">
                {" "}
                <Button variant="primary" className="button-size">
                  <AddBoxIcon className="nav-icons" />
                  Expense Entry
                </Button>
              </Link>
              <br />

              <Link to="/expensesList">
                {" "}
                <Button variant="success" className="button-size">
                  <VisibilityIcon className="nav-icons" /> Expense List
                </Button>
              </Link>
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: "none" }}>
          <Card.Header style={{ backgroundColor: "#3B4AFF", padding: "0px" }}>
            <Link to="/invoiceList">
              <Accordion.Toggle
                style={{
                  border: "none",
                  // backgroundColor: "#66b2ff",
                  // borderRadius: "50px",
                }}
                as={Card.Header}
                variant="link"
              >
                <b className="text-white">
                  <ExploreIcon className="nav-icons" />
                  Invoice Detail
                </b>
              </Accordion.Toggle>
            </Link>
          </Card.Header>
        </Card>
      </Accordion>
    </motion.div>
  );
};

export default NavbarPage;
