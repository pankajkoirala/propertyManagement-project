let initialState = { fmc: [] };
export const fmcReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_FMC":
      return { ...state, fmc: action.payload };

    default:
      return { ...state };
  }
};
