import {
  propertyError,
  propertyPending,
  propertySuccess
  } from "../const/ReduxAction";
  let initialState = {
    property: [],
    error: null,
    pending: false,
  };
  
  export const personalDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case propertySuccess:
        return {
          ...state,
          pending: false,
          property: action.payload,
        };
      case propertyPending:
        return {
          ...state,
          pending: true,
        };
      case propertyError:
        return {
          ...state,
          error: action.error,
        };
      default:
        return state;
    }
  };