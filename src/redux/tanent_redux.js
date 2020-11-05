let initialState = { tenant: [] };
export const TenantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_TENANT":
      return { ...state, tenant: action.payload };

    default:
      return { ...state };
  }
};
