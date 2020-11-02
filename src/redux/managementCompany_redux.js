



let initialState = { managementCompany: [] };
export const  managementCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_MANAGEMENT_COMPANY":
      return { ...state, managementCompany: action.payload };

    default:
      return { ...state };
  }
};
