import React, { useState, useEffect } from "react";
import { Label, Input } from "reactstrap";
//name props bata aayo
//full array data
//set attribute
//searching data

let RegexConponent = (props) => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const [match, setmatch] = useState("");

  const { setFieldValue, name, filteringData, searchingData } = props;

  let filterArray = (e) => {
    const regex = new RegExp(`^${e}`, "gi");

    let selectedOptions =
      e === ""
        ? setOptions([])
        : filteringData.filter((option) => regex.test(option.property_type));
    setOptions(selectedOptions);
    console.log(e);
  };
  console.log(options);

  return (
    <div>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={(e) => {
          return filterArray(e.target.value), setValue(e.target.value);
        }}
      ></Input>
      {options?.length > 0
        ? options.map((arg, i) => {
            return (
              <div
                onClick={() => {
                  return (
                    setFieldValue(name, arg._id),
                    setValue(arg.property_type),
                    setOptions([])
                  );
                }}
                key={i}
              >
                {arg.property_type}
              </div>
            );
          })
        : ""}
    </div>
  );
};
export default RegexConponent;
