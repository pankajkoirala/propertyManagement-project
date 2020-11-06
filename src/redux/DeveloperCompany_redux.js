let initialState = { DeveloperCompany: [] };
export const DeveloperCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_DEVELOPEMENT_COMPANY":
      return { ...state, DeveloperCompany: action.payload };

    default:
      return { ...state };
  }
};
