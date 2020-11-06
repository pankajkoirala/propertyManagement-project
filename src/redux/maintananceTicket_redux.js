let initialState = { maintananceTicket: [] };
export const maintananceTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_MAINTANANCE_TICKET":
      return { ...state, maintananceTicket: action.payload };

    default:
      return { ...state };
  }
};
