import React, { useState, useEffect } from "react";
import MintananceTicketViews from "../../../component/view/maintananceTicket/maintananceTicket";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";

const MaintananceTicketView = (props) => {
  const [maintananceTicket, setMaintananceTicket] = useState([]);

  useEffect(() => {
    AllManagementCompany();
  }, []);

  let AllManagementCompany = () => {
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
        setMaintananceTicket(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <MintananceTicketViews maintananceTicket={maintananceTicket} />
    </div>
  );
};

export default MaintananceTicketView;
