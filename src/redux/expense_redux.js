let initialState = { expense: [] };
export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_EXPENSE":
      return { ...state, expense: action.payload };

    default:
      return { ...state };
  }
};
