import React from "react";

const Quotes = ({ curQuote, curAuth }) => {
  return (
    <div id="container">
      <p id="text">{curQuote}</p>
      <p id="author">{curAuth}</p>
    </div>
  );
};

export default Quotes;
