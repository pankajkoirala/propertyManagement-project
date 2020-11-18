import React, { useEffect, useState } from "react";
import LeaseDetailViewComp from "../../../component/view/lease/leaseDetailView";
import Axios from "axios";
import { base_URL } from "../../../const/base_URL";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";

let LeaseDetailView = (props) => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    unreserveProperty();
  }, []);
  const { id } = useParams();

  let selecteOneLease = props?.Redux_LeaseData?.lease?.filter(
    (arg) => arg._id === id
  );

  const LeaseUpdate = (data, ID, file) => {
    const formData = new FormData();
    if (typeof file[0].file !== "string") {
      file.forEach((element) => {
        formData.append(element.fileName, element.file);
      });
    } else {
      formData.append("files_list", data.files_list);
    }
    formData.append("lease_enterDate", data.lease_enterDate);
    formData.append("tenants", data.tenants);
    formData.append("lease_Term", data.lease_Term);
    formData.append("commenceDate", data.commenceDate);
    formData.append("expirationDate", data.expirationDate);
    formData.append("rentAmount", data.rentAmount);
    formData.append("firstDueDate", data.firstDueDate);
    formData.append("frequency", data.frequency);

    formData.append("securityDeposite", data.securityDeposite);
    formData.append("securityfirstDueDate", data.securityfirstDueDate);
    formData.append("property", data.property);

    Axios({
      method: "put",
      url: base_URL + "/api/lease/" + ID,
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

  const LeaseDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/lease/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
        props.history.push("/leasePropertyList");

        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  //property remove which are in lease from all property
  let unreserveProperty = () => {
    let reserveProperty = [];
    let unReserveProperty = [];

    props.Redux_LeaseData.lease.forEach((arg) => {
      reserveProperty.push(arg?.property?._id);
    });
    unReserveProperty = props.Redux_propertyData.property.filter(
      (arg) => !reserveProperty.includes(arg._id)
    );
    setProperty(unReserveProperty);
  };

  return (
    <div>
      <LeaseDetailViewComp
        selecteOneLease={selecteOneLease}
        LeaseDelete={LeaseDelete}
        LeaseUpdate={LeaseUpdate}
        //try
        unReserveProperty={property}
        redux_tenantData={props.redux_tenantData}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_LeaseData: state.lease,
  Redux_propertyData: state.property,
  redux_tenantData: state.tenant,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LeaseDetailView);
