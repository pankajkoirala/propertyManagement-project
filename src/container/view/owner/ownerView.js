import React, { useState, useEffect } from "react";
import OwnerView from "../../../component/view/owner/ownerView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";

const OwnerViews = (props) => {
  const [ownersData, setOwnersData] = useState([]);

  useEffect(() => {
    Owner();
  }, []);

  let Owner = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/owner",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        setOwnersData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <OwnerView ownersData={ownersData} />
    </div>
  );
};

export default OwnerViews;
