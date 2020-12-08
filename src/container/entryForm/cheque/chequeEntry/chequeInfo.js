import React, { useState, useEffect } from "react";
import ChequeInfoComponent from "./../../../../component/entryForm/cheque/chequeEntry/chequeInfoEntry";
import { base_URL } from "../../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../../shared/notification.js";
import { reloadFunction } from "../../../../shared/commonFunction.js";

let ChequeInfoContainer = () => {
  const [allCheckInfo, setAllChequeInfo] = useState([]);

  useEffect(() => {
    ChequeeInfo();
  }, []);

  const ChequeeInfoData = (data) => {
    Axios({
      method: "post",
      url: base_URL + "/api/chequeInfo",
      data: data,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("Created successfully", "SUCCESS");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  const ChequeeInfo = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/chequeInfo",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        setAllChequeInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ChequeeInfoDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/chequeInfo/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");

        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <ChequeInfoComponent
        ChequeeInfoData={ChequeeInfoData}
        allCheckInfo={allCheckInfo}
        ChequeeInfoDelete={ChequeeInfoDelete}
      />
    </div>
  );
};

export default ChequeInfoContainer;
