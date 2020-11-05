let initialState = { property: [] };
export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_PROPRRTY":
      return { ...state, property: action.payload };

    default:
      return { ...state };
  }
};
