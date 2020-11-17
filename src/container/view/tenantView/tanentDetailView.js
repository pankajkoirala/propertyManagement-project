import React from "react";
import TanentViewComp from "../../../component/view/tenantView/tenantDetailView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";

const TanentDetailViewCont = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedTenantone = props?.redux_tenantData?.tenant?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const tenentUpdate = (data, ID, file) => {
    console.log(data);
    const formData = new FormData();
    if (typeof file[0].file !== "string") {
      file.forEach((element) => {
        formData.append(element.fileName, element.file);
      });
    } else {
      formData.append("files_list", data.files_list);
    }

    formData.append("area", data.area);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("tenant_Name", data.tenant_Name);
    formData.append("company_Name", data.company_Name);
    formData.append("tenant_phoneNo", data.tenant_phoneNo);
    formData.append("tenant_email", data.tenant_email);

    formData.append("tenant_GovIdNo", data.tenant_GovIdNo);
    formData.append(
      "DateOfBirth_registrationDate",
      data.DateOfBirth_registrationDate
    );
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
