import React from 'react'
import { Table } from 'reactstrap';
import moment from "moment";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const TanentDetailView=(props)=>{
  console.log(props.selectedTenantone);
  let member=[]
  return( 
  
    <div className="memberDisplayFullpage">
   {props.selectedTenantone.map((arg,index)=>{
     return(
<div key={index} className="row">
      <div className="col-sm-3">
        <img className="personimage" src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" alt="" />
        <div className="my-4">
         

          <h4>Office Detail</h4>
          <div className="my-2"> <span className="font-weight-bold h6">Name: </span>  member?.office?.name </div>
          <div className="my-2"> <span className="font-weight-bold h6">address: </span> member?.address?.temporary?.city</div>
          <div className="my-2"> <span className="font-weight-bold h6">phone No: </span> member?.office?.contactNumber</div>
          <div className="my-2"> <span className="font-weight-bold h6">post: </span> member?.office?.post</div></div>

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
                <div className="font-weight-bold h6 my-4">{arg.tenant_firstNam}{arg.tenant_middleName} {arg.tenant_lastName} </div>
     <div className="font-weight-bold h6 my-4">{arg.country}</div>
                <div className="font-weight-bold h6 my-4">member?.gender</div>
                <div className="font-weight-bold h6 my-4">member?.nationality</div>
                <div className="font-weight-bold h6 my-4">member?.email</div>

              </div>
            </div>


          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-6">
                <div className="font-weight-bold h6 my-4">membershipNo:</div>
                <div className="font-weight-bold h6 my-4">membership Type:</div>
                <div className="font-weight-bold h6 my-4">phone Number:</div>
                <div className="font-weight-bold h6 my-4">date Of Birth:</div>
              </div>
              <div className="col-6">
                <div className="font-weight-bold h6 my-4">member?.membershipNo ? member?.membershipNo  </div>
                <div className="font-weight-bold h6 my-4">member?.membershipType</div>
                <div className="font-weight-bold h6 my-4">member?.phoneNumber</div>
                <div className="font-weight-bold h6 my-4">moment(member?.dateOfBirth).format("YYYY-MM-DD") </div>
              </div>
            </div>

          </div>
        </div>
         <div>
          <h2 className="">Office history</h2>
          <Table dark>
            <thead>
              <tr>
                <th> name</th>
                <th>Position</th>
                <th>contact no</th>
                <th>Address</th>

              </tr>
            </thead>
    
          </Table>
        </div> 
        <div>
          <h2 className="">Academic history</h2>
          <Table dark>
            <thead>
              <tr>
                <th>institution name</th>
                <th>Level</th>
                <th>passed year</th>
              </tr>
            </thead>
        
          </Table>
        </div>
      </div>
    </div>
     )
   })}

    
  </div>
    
    )
}


export default TanentDetailView