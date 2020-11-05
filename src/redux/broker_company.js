let initialState = { brokerCompany: [] };
export const brokerCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_BROKER_COMPANY":
      return { ...state, brokerCompany: action.payload };

    default:
      return { ...state };
  }
};
