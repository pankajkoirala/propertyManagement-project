import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const {
    isOpen,
    className,
    isClose,
    CRUD_Function,
    id,
    message,
    buttonName,
  } = props;

  return (
    <div>
      <Modal isOpen={isOpen} className={className}>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => CRUD_Function(id)}>
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
