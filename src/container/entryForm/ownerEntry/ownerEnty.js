import React, { useState } from "react";
import OwnerContainer from "../../../component/entryForm/ownerEntry/ownerEnty.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";

const OwnerEntryContainer = () => {
  const [url, setUrl] = useState("");
  let feldName = [1, 2, 3, 4];

  const ownerData = (values, data) => {
    const formData = new FormData();
    data.forEach((element) => {
      formData.append(element.filesType, element.file);
    });
    formData.append("name", values.name);
    console.log(formData);

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
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };
  console.log(ownerData);
  return (
    <div>
      <OwnerContainer ownerData={ownerData} url={url} />
    </div>
  );
};

export default OwnerEntryContainer;
