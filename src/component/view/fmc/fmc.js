import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchInput from "./../../../shared/filterListData";
import FMCEntryForm from "./../../../component/entryForm/FMC/fmc";

const FMCDisplay = (props) => {
  let [fmc, setFmc] = useState([]);
  let [edit, setEdit] = useState(false);
  let [id, setId] = useState('');
  let fmcList = props?.fmcList?.slice()?.reverse();

  if (fmc.length === 0) {
    fmc = fmcList;
  } else {
    fmcList = fmc;
  }
  return (
    <>
      {!edit && <div className="leaseProperty">
        <div className="page-title">
          <h1>lease list</h1>
        </div>
        <SearchInput
          filteringData={props?.fmc?.map((arg) => {
            return {
              search1: arg?.tenants?.tenant_Name,
              search2:
                arg?.property?.property_type + "/" + arg.property?.referenceNO,
              search3: arg?.LeaseId,
              ID: arg._id,
            };
          })}
          setFilteredData={setFmc}
          allData={props?.fmc?.slice()?.reverse()}
        />

        <div style={{ overflowX: "auto" }}>
          <table id="lease-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>Date</th>
                <th>Property</th>
                <th>Management Company</th>
                <th>Quarter</th>
                <th> Amount</th>
                <th> Detail</th>
              </tr>
            </thead>
            {fmcList.map((arg, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{moment(arg?.date).format("YYYY-MM-DD")}</td>
                    <td>{arg?.property?.property_type +
                      "/" +
                      arg.property?.unitNo}</td>
                    <td>{arg.management_Companies.managementCompany_name}</td>
                    <td>{arg.quarter}</td>
                    <td>
                      {'AED.' + arg.totalAmount}
                    </td>

                    <td>

                      <button onClick={() => {
                        setId(arg._id)
                        setEdit(!edit)
                      }} className="view-btn">Edit</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      }
      {edit && <FMCEntryForm
        {...props}
        selectedFMC={props?.fmcList.filter((arg) => arg._id === id)[0]}
        property={props.Redux_propertyData.property}
        Redux_ManagementCompanyData={
          props.Redux_ManagementCompanyData.managementCompany
        } />}
    </>
  );
};
const mapStateToProps = (state) => ({
  Redux_propertyData: state.property,
  Redux_ManagementCompanyData: state.managementCompany,

});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FMCDisplay);





