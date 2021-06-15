import React, { useState } from "react";
import { Label, Input, Table } from "reactstrap";
import PoopUp from "./../../../../shared/popup";
import moment from "moment";

let ChequeInfo = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [date, setDate] = useState("");
  const [updateInfo, setUpdateInfo] = useState("");
  const [remark, setRemark] = useState("");

  let reverseArray = props.allCheckInfo.slice().reverse();

  let InfoData = () => {
    props.ChequeeInfoData({
      chequeUpdate_date: date,
      chequeUpdate: updateInfo,
      chequeUpdate_remarks: remark,
    });
    setLoadingState(true);
  };

  return (
    <div style={{ margin: "20px" }}>
      {/* Cheque Update Information */}
      <div className="m-2 text-center">
        <h3>Cheque Update Information</h3>
      </div>
      <div className="row">
        <div className="mt-4 col-3">
          <Label for="exampleName">Date</Label>
          <Input
            type="date"
            name="chequeUpdate_date"
            placeholder="Enter Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mt-4 col-3">
          <Label for="exampleName">Update</Label>
          <Input
            type="textarea"
            name="chequeUpdate"
            placeholder="Update"
            onChange={(e) => setUpdateInfo(e.target.value)}
          />
        </div>
        <div className="mt-4 col-3">
          <Label for="exampleName">Remarks</Label>
          <Input
            type="textarea"
            name="chequeUpdate_remarks"
            placeholder="Remarks"
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>
        <button
          className=" btn btn-primary cheque-btn"
          type="button"
          disabled={date && updateInfo && remark ? false : true}
          onClick={() => {
            setShowPopUp(true);
          }}
        >
          Update Information
        </button>
        <PoopUp
          loadingIconState={loadingState}
          isOpen={showPopup}
          isClose={setShowPopUp}
          CRUD_Function={InfoData}
          buttonName={"Create"}
          message={"Are you sure you want to create"}
        />
      </div>

      <Table style={{ marginTop: "20px" }} striped>
        <thead>
          <tr>
            <th>SN</th>
            <th>Date</th>
            <th>Update Info</th>
            <th>Remark</th>
            <th>Delete</th>
          </tr>
        </thead>
        {reverseArray.map((arg, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{moment(arg.chequeUpdate_date).format("YYYY-MM-DD")}</td>
                <td>{arg.chequeUpdate}</td>
                <td>{arg.chequeUpdate_remarks}</td>
                <td>
                  <button onClick={() => props.ChequeeInfoDelete(arg._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default ChequeInfo;
