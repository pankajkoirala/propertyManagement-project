import React, { useState, useEffect } from "react";
import ChequeInfoComponent from "./../../../../component/entryForm/cheque/chequeEntry/chequeInfoEntry";
import { base_URL } from "../../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../../shared/notification.js";
import { reloadFunction } from "../../../../shared/commonFunction.js";
import { getLocalStorage } from "./../../../../const/tokenStorage";
import { token_key } from "./../../../../const/base_URL";

let ChequeInfoContainer = () => {
  const [allCheckInfo, setAllChequeInfo] = useState([]);

  useEffect(() => {
    ChequeeInfo();
  }, []);

  const ChequeeInfoData = (data) => {
    Axios.post(base_URL + "/api/chequeInfo", data, {
      headers: {
        [token_key]: getLocalStorage(token_key),
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
    Axios.get(base_URL + "/api/chequeInfo", {
      headers: {
        [token_key]: getLocalStorage(token_key),
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
