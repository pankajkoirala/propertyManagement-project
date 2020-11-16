import React, { useState } from "react";
import OwnerContainer from "../../../component/entryForm/ownerEntry/ownerEnty.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";

const OwnerEntryContainer = (props) => {
  const ownerData = (data) => {
    const formData = new FormData();

    formData.append("owner_area", data.owner_area);
    formData.append("owner_city", data.owner_city);
    formData.append("owner_country", data.owner_country);
    formData.append("owner_DOB", data.owner_DOB);
    formData.append("owner_photo", data.owner_photo);
    formData.append("owner_phoneNo", data.owner_phoneNo);
    formData.append("owner_firstName", data.owner_firstName);
    formData.append("owner_middleName", data.owner_middleName);
    formData.append("owner_lastName", data.owner_lastName);
    formData.append("owner_email", data.owner_email);
    formData.append("owner_property", data.owner_property);

    Axios({
      method: "post",
      url: base_URL + "/api/owner",
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
      <OwnerContainer
        ownerData={ownerData}
        Redux_propertyData={props.Redux_propertyData.property}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_propertyData: state.property,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnerEntryContainer);
