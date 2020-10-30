export const addAction = { type: "ADDONE", payload: 1 };
export const SubtractAction = { type: "SUBONE", payload: 1 };
export const AddFive = { type: "ADDFIVE", payload: 5 };
export const SubFive = { type: "SUBFIVE", payload: 5 };

let initialState = { number: 0,name:'testname' };
export const  reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDONE":
      return { ...state, number: state.number + action.payload };
      break;
    case "SUBONE":
      return { ...state, number: state.number - action.payload };
      break;
    case "ADDFIVE":
      return { ...state, number: state.number + action.payload };
      break;
    case "SUBFIVE":
      return { ...state, number: state.number - action.payload };
      break;

    default:
      return { ...state };
  }
};
