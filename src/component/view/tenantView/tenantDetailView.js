import React from "react";
import "./tenantView.css"

import moment from "moment";
import LOGO from "../../../assets/logo.png"
import PRINTERLOGO from "../../../assets/printer.jpg"
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Table
} from "reactstrap";


const TanentDetailView = (props) => {
  // console.log(props.selectedTenantone);
  // let selectedselectedMember = props.selectedTenantone;
  return (
    <div className="row pbox">
   {/* {selectedselectedMember.map((arg,index)=>{
     return(
      <div className="selectedMemberDisplayFullpage">
      

      <div className="row">
        <div className="col-sm-3">
          <img className="personimage" src="" alt="" />
          <div className="my-4">
       

            <h4>Office Detail</h4>
            <div className="my-2"> <span className="font-weight-bold h6">Name: </span>  hello </div>
            <div className="my-2"> <span className="font-weight-bold h6">address: </span>ok</div>
            <div className="my-2"> <span className="font-weight-bold h6">phone No: </span> oooooosssss</div>
            <div className="my-2"> <span className="font-weight-bold h6">post: </span> dfsf</div></div>

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
   })} */}





                        <div className="col-12 bg-primary">
                        <div className="row m">
                              <div className="col-8 bg-success text-left"><b>Application Date:</b><br/> January 21, 2020
                              <br/><br/>
                              <b>Property Occupied: <br/> 412 B, Tripureshwor</b>
                              </div>
                              <div className="col-4"><img className="logo" src={LOGO} alt="" /></div>
                               <div className="col-4"><img className="printer" src={PRINTERLOGO} alt="" /></div>
                 
                          </div>
                        </div>

                      <div className="col-12">
                        <div className="text-center">
                         <img className="tenantImg" src="https://www.unicef.org/nepal/sites/unicef.org.nepal/files/styles/hero_mobile/public/NIBINA%20TIMAKSINA-IMG_9476.jpg?itok=VnPlq-xm" alt="" />
                         <h3>Sulochana Poudel</h3>
                        </div>
                      </div>

              <div className="col-12 bg-secondary">
              <div className="row">
                    <div className="col-6 bg-success"><h5>PRIMARY APPLICANT</h5>
                    <table class="table">
                              <thead>
                                <tr>
                                  
                                  <th scope="col">Email</th>
                                  <th scope="col">abc@email.com</th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">Phone No. </th>
                                  <td>9834759302</td>
                                
                                </tr>
                                <tr>
                                  <th scope="row">Cell No. </th>
                                  <td>01112838484</td>
                                  
                                </tr>
                                <tr>
                                  <th scope="row">Work No.</th>
                                  <td>445335</td>
                                </tr>
                                <tr>
                                  <th scope="row">Vehicle</th>
                                  <td>Ba5Cha 554, Suzuki</td>
                                  
                                </tr>
                              </tbody>
                            </table>
                    </div>
                    <div className="col-6 bg-danger">
                      
                    <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Birthdate</th>
                                  <th scope="col">2020/02/02</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">Passport No. </th>
                                  <td>99302</td>
                                </tr>
                                <tr>
                                  <th scope="row">Driver's Licence </th>
                                  <td>011484</td>
                                </tr>
                                <tr>
                                  <th scope="row">Government ID NO.</th>
                                  <td>AA135</td>
                                </tr>
                                
                                <tr>
                                  <th scope="row">Additional Occupant</th>
                                  <td>Ram</td>
                                </tr>
                                <tr>
                                  <th scope="row">Additional Occupant</th>
                                  <td>Shyam</td>
                                </tr>
                                <tr>
                                  <th scope="row">Additional Occupant</th>
                                  <td>Hary</td>
                                </tr>
                                
                                <tr>
                                  <th scope="row">Pet</th>
                                  <td>Cat- Tiger</td>
                                </tr>
                                <tr>
                                  <th scope="row">Other Info</th>
                                  <td>Some text here</td>
                                </tr>
                              </tbody>
                            </table>



                    </div>
                 
</div>
              </div>











     
    </div>
  );
};

export default TanentDetailView;
