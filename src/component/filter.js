import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";



const Filter=()=> {
  return(
    <div className="row"> 
    <div className="col-2 text-aligh-right"><Input
                    type="select"
                    name="status"
                    id="exampleSelect"
                    placeholder="Select"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.status}
                  >
                    <option value=""> </option>
                      <option value="Pending">Occupied</option>
                      <option value="Cleared">Free</option>
                      <option value="Pending">Booked</option>
                      <option value="Cleared">Under Maintainanace</option>
                     
                  </Input></div>
    <div className="col-4"> 
    <Button variant="primary">Filter</Button>{' '}
    </div>
             
       </div>               
  
  )
}

export default Filter