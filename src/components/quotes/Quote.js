import React, { useState, useContext } from "react";
import QuoteContext from "../../context/quote/quoteContext";

const Quote = () => {
  const quoteContext = useContext(QuoteContext);

  const [quote, getQuote] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    quoteContext.getQuote();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='submit'
          value='Search'
          className='btn btn-light btn-block'
        />
      </form>
    </div>
  );
};

export default Quote;
