import {
    FETCHING_QOUTES_START,
    FETCHING_QOUTES_SUCCESS,
    FETCHING_QOUTES_ERROR
  } from "../actions/index";
  
  const initialState = {
    isLoading: false,
    qoute: [],
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_QOUTES_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCHING_QOUTES_SUCCESS:
        return {
          ...state,
          qoute: action.payload,
          isLoading: false
        };
      case FETCHING_QOUTES_ERROR:
        return {
          ...state,
          error: "That person has no qoutes",
          isLoading: false
        };
      default:
        return state;
    }
  };
  