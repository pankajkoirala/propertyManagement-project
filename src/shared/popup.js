import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import CircularProgress from "@material-ui/core/CircularProgress";
import { object } from "yup";

const ModalExample = (props) => {
  const {
    isOpen,
    className,
    isClose,
    CRUD_Function,
    id,
    message,
    buttonName,
    loadingIconState,
  } = props;

  return (
    <div>
      <Modal isOpen={isOpen} className={className}>
        <ModalBody
          className="form-head"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          {message}{" "}
        </ModalBody>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            {loadingIconState === true ? (
              <CircularProgress disableShrink />
            ) : (
              ""
            )}
          </div>
        </div>
        <ModalFooter>
          <Button
            color="primary"
            disabled={loadingIconState === true ? true : false}
            onClick={() => CRUD_Function(id)}
          >
            {buttonName}
          </Button>
          <Button color="secondary" onClick={() => isClose(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ModalExample;
