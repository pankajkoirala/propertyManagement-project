let initialState = { invoice: [] };
export const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_INVOICE":
      return { ...state, invoice: action.payload };

    default:
      return { ...state };
  }
};
