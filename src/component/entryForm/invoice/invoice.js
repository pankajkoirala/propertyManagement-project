import React from "react";
import { Formik } from "formik";
import { Form, Input, Label } from "reactstrap";
import moment from "moment";

let InvoiceComponent = (props) => {
  console.log("pankaj koirala", props);
  let initialvalue = {
    chequeMongoId: props.Cheque._id,
    invoicePhoto: "",
    invoiceIssueDate: moment().format("YYYY-MM-DD"),
    chequeNumber: props?.Cheque?.cheque_number,
    lease_id: props?.Cheque?.lease_property.LeaseId,
  };
  return (
    <div>
      <div>
        <div className="PropertyFormEntry">
          <div>
            <Formik
              initialValues={initialvalue}
              onSubmit={(values) => {
                props.invoicePost(values);
                console.log(values);
              }}
              // validationSchema={TenantEntryFormValidation}
            >
              {({
                touched,
                errors,
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                isSubmitting,
              }) => (
                <Form className="">
                  <div className="col-md-6 text-left mb-2 mt-4">
                    <Label className="float-left">Upload Scan Copy</Label>
                    <Input
                      type="file"
                      name="invoicePhoto"
                      accept="image/*"
                      onChange={(event) => {
                        setFieldValue(
                          "invoicePhoto",
                          event.currentTarget.files[0]
                        );
                      }}
                    />

                    {touched.invoicePhoto && values.invoicePhoto && (
                      <img
                        src={URL.createObjectURL(values.invoicePhoto)}
                        alt="no file"
                        height="20"
                      />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => props.setPrintInvoice(!props.printInvoice)}
                  >
                    cancle
                  </button>
                  <button
                    style={
                      props?.redux_InvoiceData?.some(
                        (invoice) =>
                          invoice?.chequeMongoId === props?.Cheque?._id
                      ) === true
                        ? { visibility: "hidden" }
                        : { visibility: "visible" }
                    }
                    type="submit"
                    onClick={handleSubmit}
                  >
                    save
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InvoiceComponent;
