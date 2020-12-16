import React from "react";
import DeveloperCompanyViewComp from "../../../component/view/DevelopementCompany/DeveloperCompanyDetail";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const DeveloperCompanyDetailViewCont = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedDeveloperCompany = props?.redux_DeveloperCompanyData?.DeveloperCompany?.filter(
    (arg) => arg._id === id
  );

  //developerCompany update
  const DeveloperCompanyUpdate = (data, ID, file) => {
    const formData = new FormData();
    if (typeof file[0].file !== "string") {
      file.forEach((element) => {
        formData.append(element.fileName, element.file);
      });
    } else {
      formData.append("files_list", data.files_list);
    }
    formData.append("Developer_area", data.Developer_area);
    formData.append("Developer_city", data.Developer_city);
    formData.append("Developer_country", data.Developer_country);
    formData.append("DeveloperCompany_phoneNo", data.DeveloperCompany_phoneNo);
    formData.append("DeveloperCompany_Name", data.DeveloperCompany_Name);
    formData.append(
      "DeveloperCompany_RegisterationDate",
      data.DeveloperCompany_RegisterationDate
    );
    formData.append(
      "DeveloperCompany_RegisterationNumber",
      data.DeveloperCompany_RegisterationNumber
    );

    formData.append("DeveloperCompany_email", data.DeveloperCompany_email);
    formData.append(
      "DeveloperCompany_MobileNumber",
      data.DeveloperCompany_MobileNumber
    );

    Axios.put(base_URL + "/api/DeveloperCompany/" + ID, formData, {
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

  const DeveloperCompanyDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/DeveloperCompany/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
        props.history.push("/developerCompanyList");

        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <DeveloperCompanyViewComp
        selectedDeveloperCompany={selectedDeveloperCompany}
        DeveloperCompanyUpdate={DeveloperCompanyUpdate}
        DeveloperCompanyDelete={DeveloperCompanyDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_DeveloperCompanyData: state.DeveloperCompany,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperCompanyDetailViewCont);
