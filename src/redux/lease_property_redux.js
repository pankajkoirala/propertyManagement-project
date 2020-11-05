let initialState = { lease: [] };
export const leaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_LEASE":
      return { ...state, lease: action.payload };

    default:
      return { ...state };
  }
};
