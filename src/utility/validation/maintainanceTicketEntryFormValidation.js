import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const MaintainanceTicketEntryForm = Yup.object().shape({
  maintananceTicketIssueDate: Yup.date().required("Required Field"),
  maintananceTicketDueDate: Yup.date().required("Required Field"),
  MaintanancePropertyID: Yup.string().required("Required Field"),
  MaintananceCompanyId: Yup.string().required("Required Field"),
  MaintananceCompanyDetailInfo: Yup.string().required("Required Field"),
  maintanance_Amount: Yup.number().required("Required Field"),
  Maintanance_Ticket_picture: Yup.string().required("Required Field"),

  //files_list: Yup.array().required("File Required"),
});
