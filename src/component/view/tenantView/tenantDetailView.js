import React from "react";
import { Table } from "reactstrap";
import moment from "moment";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const TanentDetailView = (props) => {
  console.log(props.selectedTenantone);
  let selectedselectedMember = props.selectedTenantone;
  return (
    <div className="">
   {selectedselectedMember.map((arg,index)=>{
     return(
      <div className="selectedMemberDisplayFullpage">
      

      <div className="row">
        <div className="col-sm-3">
          <img className="personimage" src="" alt="" />
          <div className="my-4">
       

            <h4>Office Detail</h4>
            <div className="my-2"> <span className="font-weight-bold h6">Name: </span>  {} </div>
     <div className="my-2"> <span className="font-weight-bold h6">address: </span>{}</div>
     <div className="my-2"> <span className="font-weight-bold h6">phone No: </span> {}</div>
     <div className="my-2"> <span className="font-weight-bold h6">post: </span>{}</div></div>

        </div>

        <div className="col-md-9">

          <h2>about me</h2>

          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-6">
                  <div className="font-weight-bold h6 my-4">Name:</div>
                  <div className="font-weight-bold h6 my-4">permanent Address:</div>
                  <div className="font-weight-bold h6 my-4">Gender:</div>
                  <div className="font-weight-bold h6 my-4">Nationality:</div>
                  <div className="font-weight-bold h6 my-4">Email:</div>

                </div>
                <div className="col-6">
                  <div className="font-weight-bold h6 my-4">selectedMember?s?.permanent?.city,</div>
                  <div className="font-weight-bold h6 my-4">selectedMember</div>
                  <div className="font-weight-bold h6 my-4">selectedMember</div>
                  <div className="font-weight-bold h6 my-4">selectedMember</div>
                  <div className="font-weight-bold h6 my-4">selectedMember</div>

                </div>
              </div>


            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-6">
                  <div className="font-weight-bold h6 my-4">selectedMembershipNo:</div>
                  <div className="font-weight-bold h6 my-4">selectedMembership Type:</div>
                  <div className="font-weight-bold h6 my-4">phone Number:</div>
                  <div className="font-weight-bold h6 my-4">date Of Birth:</div>
                </div>
                <div className="col-6">
                  <div className="font-weight-bold h6 my-4">selectedMember?.selectedMembershipNo ? selectedMember?.selectedMembershipNo  </div>
                  <div className="font-weight-bold h6 my-4">selectedMember?.selectedMembershipType</div>
                  <div className="font-weight-bold h6 my-4">selectedMember?.phoneNumber</div>
                  <div className="font-weight-bold h6 my-4">moment(selectedMember?.dateOfBirth).format("YYYY-MM-DD")</div>
                </div>
              </div>

            </div>
          </div>
      
        </div>
      </div>
    </div>

     )
   })}
     
    </div>
  );
};

export default TanentDetailView;
