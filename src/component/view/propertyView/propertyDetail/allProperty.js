import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import AllpropertyList from "./allPropertylist";
import FreeProperty from "./freeProperty";
import LeaseProperty from "./leaseProperty";

const AllProperty = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="p-0">
      <h1>All property info</h1>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            All property
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            free Property
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            lease Property
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              {/* property all */}
              <AllpropertyList
                propertyData={props.propertyData}
                DeletProperty={props.DeletProperty}
              />
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
          <Row>
            <FreeProperty
            lease={props.lease}
              propertyData={props.propertyData}
              DeletProperty={props.DeletProperty}
            />
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <LeaseProperty lease={props.lease} />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default AllProperty;
