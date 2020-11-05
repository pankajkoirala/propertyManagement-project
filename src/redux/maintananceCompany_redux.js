let initialState = { maintananceCompany: [] };
export const maintananceCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_MAINTANANCE_COMPANY":
      return { ...state, maintananceCompany: action.payload };

    default:
      return { ...state };
  }
};
