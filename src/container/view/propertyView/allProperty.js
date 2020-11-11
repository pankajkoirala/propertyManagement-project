import React, { useState, useEffect } from "react";
import AllPropertyViews from "../../../component/view/propertyView/allProperty";
import Axios from "axios";
import { base_URL } from "../../../const/base_URL";
import { connect } from "react-redux";

const PropertyView = (props) => {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    serverData();
  }, []);

  let serverData = () => {
    Axios({
      method: "get",
      url: base_URL + "/api/property",
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        setPropertyData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //lease all property
  let LeasePropertyId = [];

  props.leaseData_redux.lease.map((arg) =>
    LeasePropertyId.push(arg?.property?._id)
  );

  return (
    <div>
      <AllPropertyViews
        propertyData={propertyData}
        LeasePropertyId={LeasePropertyId}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  leaseData_redux: state.lease,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyView);
