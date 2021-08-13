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


    Axios.put(base_URL + `/api/fmc/${id}`, data, {
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
