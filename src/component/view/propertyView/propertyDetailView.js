import React,{useEffect,useState} from "react"



let PropertyDetailViewComponent=(props)=>{

    return(
<div>{props.selectedone.map((arg,index)=>{
    return(
        <div key={index} className="property-card">
        <div className="card-contents">
          <button onClick={() => props.DeletProperty(arg._id)}>
            delet property
          </button>
          <div className="image">
            <img src={arg.photo} alt="recently added" />
          </div>
          <div className="property-desc">
    <h5>{arg.property_type}</h5>
    <p>For: {arg.property_status}</p>
            <p>
              <i className="fa fa-map-marker"></i> {arg.country},{arg.city}
            </p>
            <p>
    Rs. <b>{arg.property_price}</b> per Month
            </p>
            {/* <Link to={link + "/" + id}> */}

         

            {/* </Link> */}
          </div>
        </div>
      </div>
    )
})}</div>
    )
}
export default PropertyDetailViewComponent
