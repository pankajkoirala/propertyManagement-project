import React from "react";
import MaintananceTicketComponent from "../../../component/entryForm/maintananceTicket/maintananceTicket";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";

const MaintananceTicketContainer = () => {
  const MaintananceTicketData = (data) => {
    Axios({
      method: "post",
      url: base_URL + "/api/MaintananceTicket",
      data: data,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <MaintananceTicketComponent
        MaintananceTicketData={MaintananceTicketData}
      />
    </div>
  );
};

export default MaintananceTicketContainer;
