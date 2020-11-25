import React from "react";
import "./../component/homepage/homepage.css";
import SearchIcon from "@material-ui/icons/Search";

const TopNavBar = () => {
  return (
    <div className="dashboard-top">
      <div className="form-group has-search">
        <span className="form-control-feedback">
          <SearchIcon />
        </span>
        <input type="text" className="form-control" placeholder="Search" />
      </div>
      <div className="dashboard-link">
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
