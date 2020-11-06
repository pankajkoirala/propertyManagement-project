import React from "react";
import RegexConponent from "../../../shared/regex_Component";
import "./ownerEntry.css";

// import {  FormGroup, Label, Input, Form } from "reactstrap";
// import { Formik } from "formik";
//import {employeeEntryFormValidation} from "../../../utility/validation/employeeEntryFormValidation.js"

const OwnerEntry = () => {
  let array = [0, 1, 2, 3, 4, 5, 6, 7];
  let p = array.splice(0, 3);
  array.shift(4);
  console.log(p);
  console.log(array);

  return (
    <div>
      <RegexConponent />
    </div>
  );
};

export default OwnerEntry;
