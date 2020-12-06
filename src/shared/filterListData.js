import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

const ModalExample = (props) => {
  const { filteringData, setFilteredData, allData } = props;

  let filterByName_Id_Number = (input) => {
    const splittedWord = input.toLowerCase().split("");

    let filterArray = filteringData?.filter((arg) =>
      splittedWord.every((letter) => {
        return (
          arg.search1?.toString()?.toLowerCase()?.includes(letter) ||
          arg.search2?.toString()?.toLowerCase()?.includes(letter) ||
          arg.search3?.toString()?.toLowerCase()?.includes(letter) ||
          arg.search4?.toString()?.toLowerCase()?.includes(letter)
        );
      })
    );
    let selectedID = [];
    let selectedObject = [];
    filterArray.forEach((arg) => {
      selectedID.push(arg.ID);
    });
    selectedObject = allData?.filter((arg) => selectedID?.includes(arg._id));
    setFilteredData(selectedObject);
  };

  return (
    <div>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="text"
            onChange={(e) => filterByName_Id_Number(e.target.value)}
            placeholder="search!"
          />
        </FormGroup>
      </Form>
    </div>
  );
};
export default ModalExample;
