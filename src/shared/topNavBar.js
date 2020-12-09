import React from "react";
import "./../component/homepage/homepage.css";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "@material-ui/core";

const TopNavBar = () => {
  let logout = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="dashboard-top">
      <div style={{ marginTop: "12px" }} className="form-group has-search">
        <span className="form-control-feedback">
          <SearchIcon />
        </span>
        <input type="text" className="form-control" placeholder="Search" />
      </div>
      <div className="dashboard-link">
        <ul>
          <li style={{ margin: "15px" }}>
            <div>Profile</div>
          </li>
          <li style={{ margin: "15px" }}>
            <Link href="" onClick={() => logout()}>
              <ExitToAppIcon />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
