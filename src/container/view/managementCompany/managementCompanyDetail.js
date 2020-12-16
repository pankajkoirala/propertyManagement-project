import React from "react";
import ManagementCompanyViewComp from "../../../component/view/managementCompany/managementCompanyDetail";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const ManagementCompanyDetailView = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedManagementCompany = props?.redux_ManagementCompanyData?.managementCompany?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const managementCompanyUpdate = (data, ID, file) => {
    const formData = new FormData();
    if (typeof file[0].file !== "string") {
      file.forEach((element) => {
        formData.append(element.fileName, element.file);
      });
    } else {
      formData.append("files_list", data.files_list);
    }
    formData.append("managementCompany_area", data.managementCompany_area);
    formData.append("managementCompany_city", data.managementCompany_city);

    formData.append(
      "managementCompany_country",
      data.managementCompany_country
    );

    formData.append(
      "managementCompany_phoneNo",
      data.managementCompany_phoneNo
    );
    formData.append(
      "managementCompany_Registeration_Number",
      data.managementCompany_Registeration_Number
    );
    formData.append("managementCompany_name", data.managementCompany_name);
    formData.append(
      "managementCompany_Registeration_Date",
      data.managementCompany_Registeration_Date
    );
    formData.append("managementCompany_email", data.managementCompany_email);
    formData.append(
      "managementCompany_MobileNumber",
      data.managementCompany_MobileNumber
    );

    Axios.put(base_URL + "/api/managementCompany/" + ID, formData, {
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
  const managementCompanyDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/managementCompany/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
        props.history.push("/managementCompanyList");

        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  //management company id taken from maintanance ticket
  let managementCompanyIDs = [];
  props.redux_maintananceTicketData.maintananceTicket.map((arg) =>
    managementCompanyIDs.push(arg?.managementCompanyId?._id)
  );

  return (
    <div>
      <ManagementCompanyViewComp
        selectedManagementCompany={selectedManagementCompany}
        managementCompanyUpdate={managementCompanyUpdate}
        managementCompanyDelete={managementCompanyDelete}
        managementCompanyIDs={managementCompanyIDs}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_ManagementCompanyData: state.managementCompany,
  redux_maintananceTicketData: state.maintananceTicket,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagementCompanyDetailView);
