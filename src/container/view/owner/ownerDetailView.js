import React from "react";
import OwnerViewComp from "../../../component/view/owner/ownerDetailView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";

const OwnerViewCont = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedOwner = props?.redux_ownerData?.owner?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const ownerUpdate = (data, ID) => {
    const formData = new FormData();
    // if (typeof file[0].file !== "string") {
    //   file.forEach((element) => {
    //     formData.append(element.fileName, element.file);
    //   });
    // } else {
    //   formData.append("files_list", data.files_list);
    // }

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
      method: "put",
      url: base_URL + "/api/owner/" + ID,
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

  const ownerDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/owner/" + ID,
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
      <OwnerViewComp
        selectedOwner={selectedOwner}
        ownerUpdate={ownerUpdate}
        ownerDelete={ownerDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_ownerData: state.owner,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OwnerViewCont);
