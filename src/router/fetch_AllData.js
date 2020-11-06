import React, { useState, useEffect } from "react";
import RouterPage from "./router";
import { base_URL } from "./../const/base_URL";
import Axios from "axios";
import { connect } from "react-redux";

let FetchData = (props) => {
  useEffect(() => {
    BrokerCompanyData();
    EmployeeData();
    leaseData();
    AllMaintananceCompany();
    AllManagementCompany();
    propertyData();
    TenantData();
    ChequeData();
    DevelopementCompanyData();
    MaintananceTicketData();
  }, []);

  let BrokerCompanyData = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/brokerCompany",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        props.redux_Add_BrokerCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let EmployeeData = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/employee",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        props.redux_Add_employee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let leaseData = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/lease",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        props.redux_Add_Lease(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let AllMaintananceCompany = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/maintananceCompany",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        props.redux_Add_maintananceCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let AllManagementCompany = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/managementCompany",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        props.redux_Add_ManagementCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let propertyData = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/property",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        props.redux_Add_Property(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let TenantData = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/tenant",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        props.redux_Add_Tenant(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let ChequeData = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/cheque",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        props.redux_Add_Cheque(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let DevelopementCompanyData = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/DeveloperCompany",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        props.redux_Add_DevelopementCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let MaintananceTicketData = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/MaintananceTicket",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        props.redux_Add_MaintananceTicket(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <RouterPage />
    </div>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_BrokerCompany: (arg) =>
    dispatch({ type: "ADD_ALL_BROKER_COMPANY", payload: arg }),
  redux_Add_employee: (arg) =>
    dispatch({ type: "ADD_ALL_EMPLOYEE", payload: arg }),
  redux_Add_Lease: (arg) => dispatch({ type: "ADD_ALL_LEASE", payload: arg }),
  redux_Add_maintananceCompany: (arg) =>
    dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
  redux_Add_ManagementCompany: (arg) =>
    dispatch({ type: "ADD_ALL_MANAGEMENT_COMPANY", payload: arg }),
  redux_Add_Property: (arg) =>
    dispatch({ type: "ADD_ALL_PROPRRTY", payload: arg }),
  redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_TENANT", payload: arg }),
  redux_Add_Cheque: (arg) => dispatch({ type: "ADD_ALL_CHEQUE", payload: arg }),
  redux_Add_DevelopementCompany: (arg) =>
    dispatch({ type: "ADD_ALL_DEVELOPEMENT_COMPANY", payload: arg }),
  redux_Add_MaintananceTicket: (arg) =>
    dispatch({ type: "ADD_ALL_MAINTANANCE_TICKET", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);
