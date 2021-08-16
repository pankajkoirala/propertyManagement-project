import React from "react";
import FMC from "./../../../component/view/fmc/fmc";
import { connect } from "react-redux";
import { base_URL, token_key } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";
import { getLocalStorage } from "../../../const/tokenStorage";

let FMCContainer = (props) => {
  const fmcDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/fmc/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
        props.history.push("/invoiceList");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  const fmcUpdate = (data, id) => {
    const formData = new FormData();
    formData.append("property", data.property);
    formData.append("management_Companies", data.management_Companies);
    formData.append("totalAmount", data.totalAmount);
    formData.append("quarter", data.quarter);
    formData.append("entry_date", data.entry_date);
    formData.append("remark", data.remark);
    formData.append("file1", data.file1);
    formData.append("file2", data.file2);
    formData.append("fmcInvoice_Date", data.fmcInvoice_Date);

    Axios.put(base_URL + `/api/fmc/${id}`, formData, {
      headers: {
        [token_key]: getLocalStorage(token_key),
      },
    })
      .then((res) => {
        notification("Updated successfully", "SUCCESS");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };


  return (
    <div>
      <FMC
        fmcList={props.redux_fmc.fmc}
        fmcDelete={fmcDelete}
        fmcUpdate={fmcUpdate}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  redux_fmc: state.fmc,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FMCContainer);
