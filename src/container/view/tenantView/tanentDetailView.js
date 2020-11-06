import React, { useEffect, useState } from "react";
import TanentViewComp from "../../../component/view/tenantView/tenantDetailView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";

const TanentDetailViewCont = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedTenantone = props?.redux_tenantData?.tenant?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const tenentUpdate = (data, ID) => {
    const formData = new FormData();
    formData.append("street", data.street);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("provience", data.provience);
    formData.append("ZipCode", data.ZipCode);
    formData.append("tenant_firstName", data.tenant_firstName);
    formData.append("tenant_lastName", data.tenant_lastName);
    formData.append("tenant_middleName", data.tenant_middleName);
    formData.append("tenant_phoneNo", data.tenant_phoneNo);
    formData.append("tenant_email", data.tenant_email);
    formData.append("tenant_photo", data.tenant_photo);
    formData.append("tenant_EId_photo", data.tenant_EId_photo);
    formData.append(
      "tenant_TradeLicense_photo",
      data.tenant_TradeLicense_photo
    );
    formData.append(
      "tenant_IdentityLetter_photo",
      data.tenant_IdentityLetter_photo
    );
    formData.append(
      "tenant_SK_Properties_photo",
      data.tenant_SK_Properties_photo
    );
    formData.append("tenant_POA_photo", data.tenant_POA_photo);
    formData.append("tenant_GovIdNo", data.tenant_GovIdNo);
    formData.append("tenant_DateOfBirth", data.tenant_DateOfBirth);
    formData.append("tenant_DrivingLicenceNo", data.tenant_DrivingLicenceNo);

    Axios({
      method: "put",
      url: base_URL + "/api/tenant/" + ID,
      data: formData,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("Updated successfully", "SUCCESS");
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  const tenentDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/tenant/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <TanentViewComp
        selectedTenantone={selectedTenantone}
        tenentUpdate={tenentUpdate}
        tenentDelete={tenentDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_tenantData: state.tenant,
});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_TENANT", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TanentDetailViewCont);
