import { GET_QUOTE, CLEAR_QUOTE, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        quote: action.payload,
        loading: false
      };
    case CLEAR_QUOTE:
      return {
        ...state,
        quote: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
