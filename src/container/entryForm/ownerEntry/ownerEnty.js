import React, { useState } from "react";
import OwnerContainer from "../../../component/entryForm/ownerEntry/ownerEnty.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";

const OwnerEntryContainer = () => {
  const [url, setUrl] = useState("");

  const ownerData = (data, feldName) => {
    console.log(feldName);
    for (var i = 0; i < feldName.length; i++) {
      const formData = new FormData();
      formData.append(`"${feldName[i]}", ${data}.${feldName[i]}`);

      Axios({
        method: "post",
        url: base_URL + "/api/upload",
        data: formData,
        config: {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
          },
        },
      })
        .then((res) => {
          notification("Created successfully", "SUCCESS");
          console.log(res.data.image);
          setUrl(res.data.image);
        })
        .catch((err) => {
          notification("error", "ERROR");
        });
    }
  };
  console.log(ownerData);
  return (
    <div>
      <OwnerContainer ownerData={ownerData} url={url} />
    </div>
  );
};

export default OwnerEntryContainer;
