let initialState = { employee: [] };
export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_EMPLOYEE":
      return { ...state, employee: action.payload };

    default:
      return { ...state };
  }
};
