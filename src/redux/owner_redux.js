let initialState = { owner: [] };
export const ownerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_OWNER":
      return { ...state, owner: action.payload };

    default:
      return { ...state };
  }
};
