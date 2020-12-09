import * as Yup from "yup";

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
