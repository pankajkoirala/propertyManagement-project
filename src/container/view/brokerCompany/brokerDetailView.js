import React from "react";
import BrokerCompanyViewComp from "../../../component/view/brokerCompany/brokerDetailView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const BrokerDetailViewCont = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedBrokerCompany = props?.redux_brokerData?.brokerCompany?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const BrokerUpdate = (data, ID, file) => {
    const formData = new FormData();
    if (typeof file[0].file !== "string") {
      file.forEach((element) => {
        formData.append(element.fileName, element.file);
      });
    } else {
      formData.append("files_list", data.files_list);
    }
    formData.append("area", data.residence);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("broker_phoneNo", data.broker_phoneNo);
    formData.append(
      "broker_RegistrationNumber",
      data.broker_RegistrationNumber
    );
    formData.append("broker_companyName", data.broker_companyName);
    formData.append(
      "broker_companyRegisterDate",
      data.broker_companyRegisterDate
    );
    formData.append("broker_email", data.broker_email);
    formData.append("brokerType", data.brokerType);
    if (data.remark) {
      formData.append("remark", data.remark);
    }
   
    Axios.put(base_URL + "/api/brokerCompany/"+ ID,formData,{
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

  const BrokerDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/brokerCompany/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
        props.history.push("/brokerCompanyList");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <BrokerCompanyViewComp
        selectedBrokerCompany={selectedBrokerCompany}
        BrokerUpdate={BrokerUpdate}
        BrokerDelete={BrokerDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_brokerData: state.brokerCompany,
});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_Tenant: (arg) =>
    dispatch({ type: "ADD_ALL_BROKER_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrokerDetailViewCont);
