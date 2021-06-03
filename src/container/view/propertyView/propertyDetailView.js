import React from "react";
import PropertyDetailViewComp from "../../../component/view/propertyView/propertyDetailView";
import Axios from "axios";
import { base_URL } from "../../../const/base_URL";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

let PropertyDetailView = (props) => {
  const { id } = useParams();

  let selectedone = props?.Redux_propertyData?.property?.filter(
    (arg) => arg._id === id
  );

  const propertyUpdate = (data, ID, file) => {
    const formData = new FormData();
    if (typeof file[0].file !== "string") {
      file.forEach((element) => {
        formData.append(element.fileName, element.file);
      });
    } else {
      formData.append("files_list", data.files_list);
    }
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("property_type", data.property_type);
    formData.append("property_price", data.property_price);
    formData.append("facilities", data.facilities);
    formData.append("property_community", data.property_community);
    formData.append("plot_no", data.plot_no);
    formData.append("building_Number", data.building_Number);
    formData.append("building_floorNumber", data.building_floorNumber);
    if (data.Makani_Number) {
      formData.append("Makani_Number", data.Makani_Number);
    }
    formData.append("Property_Area", data.Property_Area);
    formData.append("Property_Premise_Number", data.Property_Premise_Number);
    formData.append("area", data.area);
    formData.append("Property_ownerName", data.Property_ownerName);
    formData.append("developerCompany", data.developerCompany);
    formData.append("managementCompany", data.managementCompany);
    formData.append("unitNo", data.unitNo);
    if (data.remark) {
      formData.append("remark", data.remark);
    }

    Axios.put(base_URL + "/api/property/" + ID, formData, {
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
  let DeleteProperty = (Id) => {
    Axios.delete(base_URL + `/api/property/${Id}`)
      .then((data) => {
        notification("successfully Deleted", "SUCCESS");
        props.history.push("/propertyList");

        reloadFunction();
      })
      .catch((err) => notification("error", "ERROR"));
  };

  //lease id
  let leaseid = props.Redux_leaseData.lease.map((arg) => arg.property._id);

  return (
    <div>
      <PropertyDetailViewComp
        Redux_OwnerData={props.Redux_OwnerData.owner}
        propertyUpdate={propertyUpdate}
        selectedone={selectedone}
        DeleteProperty={DeleteProperty}
        leaseIdList={leaseid}
        Redux_ManagementCompanyData={
          props.Redux_ManagementCompanyData.managementCompany
        }
        redux_DeveloperCompanyData={
          props.redux_DeveloperCompanyData.DeveloperCompany
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_propertyData: state.property,
  Redux_leaseData: state.lease,
  Redux_ManagementCompanyData: state.managementCompany,
  redux_DeveloperCompanyData: state.DeveloperCompany,
  Redux_OwnerData: state.owner,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetailView);
