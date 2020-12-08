import React, { useState, useEffect, useRef } from "react";
import { Input } from "reactstrap";
//name props bata aayo
//full array data
//set attribute
//searching data

let RegexConponent = (props) => {
  const [updatedOptions, setUpdatedOptions] = useState([]);
  const [value, setValue] = useState("");
  const [optionDisplay, setOptionDisplay] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { setFieldValue, name, options, OwnerFunction } = props;

  let filterArray = (e) => {
    const splittedWord = e.toLowerCase().split("");

    let filterArray = options?.filter((arg) =>
      splittedWord.every((letter) => {
        return arg.name?.toString()?.toLowerCase()?.includes(letter);
      })
    );
    setUpdatedOptions(filterArray);
    // const regex = new RegExp(`^${e}`, "gi");

    // let selectedOptions =
    //   e === ""
    //     ? setUpdatedOptions([])
    //     : options?.filter((option) => regex.test(option.name));
    // setUpdatedOptions(selectedOptions);
  };

  //remove list on click on other place
  const wrapperref = useRef(null);
  let handleClickOutside = (event) => {
    const { current: wrap } = wrapperref;
    if (wrap && !wrap.contains(event.target)) {
      setOptionDisplay(false);
      setUpdatedOptions([]);
    }
  };
  return (
    <div
      ref={wrapperref}
      style={{ position: "absolute", marginTop: "0", marginBottom: "0" }}
    >
      <Input
        style={{
          position: "relative",
          top: "0",
          bottom: "0",
          zIndex: "999",
          width: "90%",
        }}
        type="text"
        placeholder={name}
        onClick={() => {
          setOptionDisplay(!optionDisplay);
          optionDisplay === true
            ? setUpdatedOptions([])
            : setUpdatedOptions(options);
        }}
        value={value}
        onChange={(e) => {
          filterArray(e.target.value);

          setValue(e.target.value);
        }}
      ></Input>

      {updatedOptions?.map((arg, i) => {
        return (
          <div
            style={{
              position: "relative",
              top: "0",
              bottom: "0",
              zIndex: "11",
              border: "plain",
              borderColor: "beige",
              padding: "5px",
            }}
            key={i}
            className="bg-secondary text-white font-weight-bold"
            onClick={() => {
              setFieldValue(name, arg.id);
              setValue(arg.name);
              if (OwnerFunction) {
                OwnerFunction(arg.id);
              }
              setUpdatedOptions([]);
            }}
            key={i}
          >
            {arg.name}
          </div>
        );
      })}
    </div>
  );
};
export default RegexConponent;
