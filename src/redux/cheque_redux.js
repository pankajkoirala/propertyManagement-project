let initialState = { cheque: [] };
export const chequeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_CHEQUE":
      return { ...state, cheque: action.payload };

    default:
      return { ...state };
  }
};
