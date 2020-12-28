import React from "react";
import OwnerContainer from "../../../component/entryForm/ownerEntry/ownerEnty.js";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction.js";
import { connect } from "react-redux";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const OwnerEntryContainer = (props) => {
  const ownerData = (data, file) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append(element.fileName, element.file);
    });

    formData.append("owner_residence", data.owner_residence);
    formData.append("owner_city", data.owner_city);
    formData.append("owner_country", data.owner_country);
    formData.append("owner_DOB", data.owner_DOB);
    formData.append("owner_phoneNo", data.owner_phoneNo);
    formData.append("owner_Name", data.owner_Name);
    formData.append("owner_Type", data.owner_Type);
    formData.append("owner_GovID_RegNo", data.owner_GovID_RegNo);
    formData.append("owner_email", data.owner_email);


    
      Axios.post( base_URL + "/api/owner",formData,{
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
