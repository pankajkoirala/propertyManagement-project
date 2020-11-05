import React, { useState, useEffect } from "react";
import { Label, Input } from "reactstrap";

let RegexConponent = (props) => {
  const [Propsuggestion, setPropSuggestion] = useState([]);
  const [Propname, setPropName] = useState("");

  //autocomplete
  let onTextChange = (e) => {
    let suggestions = [];

    const regex = new RegExp(`^${e}`, "gi");
    e == ""
      ? (suggestions = [])
      : (suggestions = props?.unReserveProperty?.filter((v) =>
          regex.test(v.property_type || v.TenantId)
        ));
    console.log("hello", suggestions);
    setPropSuggestion(suggestions);
  };

  console.log(props?.unReserveProperty);
  return (
    <div>
      {" "}
      <div className="col-md-5">
        <Label for="exampleSelect">Tenants(s)</Label>
        <Input
          autoComplete=""
          type="text"
          name="tenants"
          id="exampleSelect"
          placeholder="Select Status of Cheque"
          value={Propname}
          onChange={(e) => {
            return setPropName(e.target.value), onTextChange(e.target.value);
          }}
        >
          <option value="">select one </option>
        </Input>
        {Propsuggestion.length !== 0 ? (
          <ul>
            {Propsuggestion.map((item, index) => (
              <option
                className="tanentOption"
                onClick={() => {
                  setPropName(item.property_type);
                  setPropSuggestion([]);
                }}
                value={item._id}
                key={index}
              >
                {item.property_type} - {item.referenceNO}
              </option>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
export default RegexConponent;
