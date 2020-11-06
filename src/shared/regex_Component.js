import React, { useState, useEffect } from "react";
import { Label, Input } from "reactstrap";
//name props bata aayo
//full array data
//set attribute

let sampleArray = [
  { name: "pankaj", value: "123" },
  { name: "koirala", value: "1223233" },
  { name: "sushant", value: "987" },
];

let RegexConponent = (props) => {
  const [options, setOptions] = useState([]);
  const [character, setCharacter] = useState("");

  const { setFieldValue, name, samplearray } = props;

  let filterArray = (e) => {
    const regex = new RegExp(`^${e}`, "gi");

    let selectedOptions = sampleArray.filter((option) =>
      regex.test(option.name)
    );
    setOptions(selectedOptions);
    console.log(e);
  };
  console.log(options);
  // //autocomplete
  // let onTextChange = (e) => {
  //   let suggestions = [];

  //   const regex = new RegExp(`^${e}`, "gi");
  //   e == ""
  //     ? (suggestions = [])
  //     : (suggestions = props?.unReserveProperty?.filter((v) =>
  //         regex.test(v.property_type || v.TenantId)
  //       ));
  //   setPropSuggestion(suggestions);
  //   console.log("hello", suggestions);
  // };

  // console.log(props);
  return (
    <div>
      {/* {" "}
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
      </div> */}
      <Input
        type="text"
        onChange={(e) => {
          return setCharacter(e.target.value), filterArray(e.target.value);
        }}
      ></Input>
      {options.map((arg, i) => {
        return (
          <div onclick={() => setFieldValue(name, arg.value)} key={i}>
            {arg.name}
          </div>
        );
      })}
    </div>
  );
};
export default RegexConponent;
