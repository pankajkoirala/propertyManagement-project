import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

const ChequeView = (props) => {
  return (
    <div className="tenantview">
      <h1 className="text-center">Employee list</h1>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>SN</th>
            <th>property no</th>

            <th>Cheque no</th>
            <th>Cheque Date</th>
            <th>cheque amount</th>
            <th>remark</th>
            <th>cheque cheque_status</th>
          </tr>
        </thead>
        {props.redux_ChequeData.map((arg, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{arg.lease_property.referenceNO}</td>

                <td>cheque number</td>

                <td>{moment(arg.cheque_issueDate).format("YYYY-MM-DD")}</td>
                <td>{arg.cheque_amount}</td>
                <td>{arg.cheque_remarks}</td>
                <td
                  className={
                    arg.cheque_status === "Pending"
                      ? "bg-danger text-white font-weight-bold"
                      :arg.cheque_status==='Cleared'?"bg-success text-white font-weight-bold":"bg-secondary text-white font-weight-bold"
                  }
                >
                  {arg.cheque_status}
                </td>

                <h1>{props.nameMatra_number}</h1>
                <td>
                  <Link to={`/cheque/${arg._id}`}>
              
                    <button className="success ml-3">View Detail</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default ChequeView;
