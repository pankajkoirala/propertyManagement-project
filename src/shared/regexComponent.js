import React, { useState, useEffect } from "react";
import { Label, Input } from "reactstrap";
//name props bata aayo
//full array data
//set attribute
//searching data

let RegexConponent = (props) => {
  const [updatedOptions, setUpdatedOptions] = useState([]);
  const [value, setValue] = useState("");

  const { setFieldValue, name, options } = props;

  let filterArray = (e) => {
    const regex = new RegExp(`^${e}`, "gi");

    let selectedOptions =
      e === ""
        ? setUpdatedOptions([])
        : options.filter((option) => regex.test(option.name));
    setUpdatedOptions(selectedOptions);
  };

  return (
    <div style={{ position: "absolute", marginTop: "0", marginBottom: "0" }}>
      <Input
        style={{
          position: "relative",
          top: "0",
          bottom: "0",
          zIndex: "999",
          width: "400px",
        }}
        type="text"
        //  onClick={() => setUpdatedOptions(options)}
        value={value}
        onChange={(e) => {
          filterArray(e.target.value);
          setValue(e.target.value);
        }}
      ></Input>

      {updatedOptions?.length > 0
        ? updatedOptions.map((arg, i) => {
            return (
              <div
                style={{
                  position: "relative",
                  top: "0",
                  bottom: "0",
                  zIndex: "11",
                }}
                className="bg-danger"
                onClick={() => {
                  console.log(arg._id);
                  setFieldValue(name, arg.id);

                  setValue(arg.name);
                  setUpdatedOptions([]);
                }}
                key={i}
              >
                {arg.name}
              </div>
            );
          })
        : ""}
    </div>
  );
};
export default RegexConponent;
