import React from "react";
import TanentViewComp from "../../../component/view/tenantView/tenantDetailView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const TanentDetailViewCont = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedTenantone = props?.redux_tenantData?.tenant?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const tenentUpdate = (data, ID, file) => {
    const formData = new FormData();
    if (typeof file[0].file !== "string") {
      file.forEach((element) => {
        formData.append(element.fileName, element.file);
      });
    } else {
      formData.append("files_list", data.files_list);
    }


    if (data.TenentType === "Person") {
      formData.append("TenentType", data.TenentType);
      formData.append("tenant_Name", data.tenant_Name);
      formData.append("tenant_phoneNo", data.tenant_phoneNo);
      formData.append(
        "DateOfBirth_registrationDate",
        data.DateOfBirth_registrationDate
      );
      formData.append("tenant_email", data.tenant_email);
      formData.append("city", data.city);
      formData.append("area", data.area);
      formData.append("country", data.country);
      if (data.tenant_GovIdNo) {
        formData.append("tenant_GovIdNo", data.tenant_GovIdNo);
      }
      if (data.tenant_GovIdNo_expireDate) {
        formData.append(
          "tenant_GovIdNo_expireDate",
          data.tenant_GovIdNo_expireDate
        );
      }
      if (data.tenant_passport_expireDate) {
        formData.append(
          "tenant_passport_expireDate",
          data.tenant_passport_expireDate
        );
      }
      if (data.tenant_passportNo) {
        formData.append("tenant_passportNo", data.tenant_passportNo);
      }
      if (data.remark) {
        formData.append("remark", data.remark);
      }
    } else {
      formData.append(
        "tenant_companyTradeLicenseIssuingAuthority",
        data.tenant_companyTradeLicenseIssuingAuthority
      );
      formData.append("TenentType", data.TenentType);
      formData.append("tenant_companyName", data.tenant_companyName);
      formData.append(
        "tenant_companyAuthorizePerson",
        data.tenant_companyAuthorizePerson
      );
      formData.append(
        "tenant_companyIssuingDate",
        data.tenant_companyIssuingDate
      );
      formData.append(
        "tenant_companyExpireDate",
        data.tenant_companyExpireDate
      );
      formData.append(
        "tenant_companyAuthorizePersonDesignation",
        data.tenant_companyAuthorizePersonDesignation
      );
      formData.append(
        "tenant_companyTradeLicenseNo",
        data.tenant_companyTradeLicenseNo
      );
      formData.append("tenant_email", data.tenant_email);
      formData.append("city", data.city);
      formData.append("area", data.area);
      formData.append("country", data.country);
      if (data.tenant_GovIdNo) {
        formData.append("tenant_GovIdNo", data.tenant_GovIdNo);
      }
      if (data.tenant_GovIdNo_expireDate) {
        formData.append(
          "tenant_GovIdNo_expireDate",
          data.tenant_GovIdNo_expireDate
        );
      }
      if (data.tenant_passport_expireDate) {
        formData.append(
          "tenant_passport_expireDate",
          data.tenant_passport_expireDate
        );
      }
      if (data.tenant_passportNo) {
        formData.append("tenant_passportNo", data.tenant_passportNo);
      }

      if (data.remark) {
        formData.append("remark", data.remark);
      }
    }

    Axios.put(base_URL + "/api/tenant/" + ID, formData, {
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
        props.history.push("/tenantList");

        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };
  //id taken from leased tanent
  let leasedTanentId = [];
  props.redux_leaseData.lease.map((arg) =>
    leasedTanentId.push(arg?.tenants?._id)
  );

  return (
    <div>
      <TanentViewComp
        selectedTenantone={selectedTenantone}
        tenentUpdate={tenentUpdate}
        tenentDelete={tenentDelete}
        leasedTanentId={leasedTanentId}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_tenantData: state.tenant,
  redux_leaseData: state.lease,
});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_TENANT", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TanentDetailViewCont);
