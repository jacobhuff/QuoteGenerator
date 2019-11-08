import React, { useReducer } from "react";
import axios from "axios";
import QuoteContext from "./quoteContext";
import QuoteReducer from "./quoteReducer";
import { GET_QUOTE, CLEAR_QUOTE, SET_LOADING } from "../types";

const QuoteState = props => {
  const initialState = {
    quote: [],
    loading: false
  };

  const [state, dispatch] = useReducer(QuoteReducer, initialState);

  // Get Quote
  const getQuote = async () => {
    setLoading();

    const res = await axios.get(
      "https://api.paperquotes.com/apiv1/quotes/?tags=love&random=random&order=?",
      {
        headers: {
          Authorization: "Token 9ac96ac4cebed7433e27cc1dd95c2bf254404f12"
        }
      }
    );

    console.log(res);
  };

  // Clear Quote
  const clearQuote = () => dispatch({ type: CLEAR_QUOTE });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <QuoteContext.Provider
      value={{
        quote: state.quote,
        loading: state.loading,
        getQuote,
        clearQuote
      }}
    >
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteState;
