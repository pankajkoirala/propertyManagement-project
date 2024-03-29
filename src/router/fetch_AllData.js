import React, { useEffect } from "react";
import { base_URL } from "./../const/base_URL";
import Axios from "axios";
import { connect } from "react-redux";
import { getLocalStorage } from "./../const/tokenStorage";
import { token_key } from "./../const/base_URL";


let FetchData = (props) => {
  useEffect(() => {
    Invoice();
    Owner();
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
    ExpensesData();
    FMC()
    // eslint-disable-next-line
  }, []);

  let BrokerCompanyData = () => {
    Axios.get(base_URL + "/api/brokerCompany", {
      headers: {
        [token_key]: getLocalStorage(token_key),
      },
    })
      .then((res) => {
        props.redux_Add_BrokerCompany(res.data);
      })
      .catch((err) => {
        localStorage.clear()
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
    Axios.get(base_URL + "/api/lease", {
      headers: {
        [token_key]: getLocalStorage(token_key),
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
    Axios.get(base_URL + "/api/maintananceCompany", {
      headers: {
        [token_key]: getLocalStorage(token_key),
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
    Axios.get(base_URL + "/api/managementCompany", {
      headers: {
        [token_key]: getLocalStorage(token_key),
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
    Axios.get(base_URL + "/api/property", {
      headers: {
        [token_key]: getLocalStorage(token_key),
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
    Axios.get(base_URL + "/api/tenant", {
      headers: {
        [token_key]: getLocalStorage(token_key),
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
    Axios.get(base_URL + "/api/cheque", {
      headers: {
        [token_key]: getLocalStorage(token_key),
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
    Axios.get(base_URL + "/api/DeveloperCompany", {
      headers: {
        [token_key]: getLocalStorage(token_key),
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
    Axios.get(base_URL + "/api/MaintananceTicket", {
      headers: {
        [token_key]: getLocalStorage(token_key),
      },
    })
      .then((res) => {
        props.redux_Add_MaintananceTicket(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let ExpensesData = () => {
    Axios.get(base_URL + "/api/expense", {
      headers: {
        [token_key]: getLocalStorage(token_key),
      },
    })
      .then((res) => {
        props.redux_Add_expense(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let Owner = () => {
    Axios.get(base_URL + "/api/owner", {
      headers: {
        [token_key]: getLocalStorage(token_key),
      },
    })
      .then((res) => {
        props.redux_Add_owner(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let Invoice = () => {
    Axios.get(base_URL + "/api/invoice", {
      headers: {
        [token_key]: getLocalStorage(token_key),
      },
    })
      .then((res) => {
        props.redux_Add_invoice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let FMC = () => {
    Axios.get(base_URL + "/api/fmc", {
      headers: {
        [token_key]: getLocalStorage(token_key),
      },
    })
      .then((res) => {
        props.redux_Add_fmc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div></div>;
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
  redux_Add_expense: (arg) =>
    dispatch({ type: "ADD_ALL_EXPENSE", payload: arg }),
  redux_Add_invoice: (arg) =>
    dispatch({ type: "ADD_ALL_INVOICE", payload: arg }),
  redux_Add_fmc: (arg) =>
    dispatch({ type: "ADD_ALL_FMC", payload: arg }),
  redux_Add_owner: (arg) => dispatch({ type: "ADD_ALL_OWNER", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);
