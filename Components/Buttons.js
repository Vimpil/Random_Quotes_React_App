import React from "react";

const Buttons = ({ randomQuote }) => {
  return (
    <div id="container">
      <a href="twitter.com/intent/tweet">
        <button id="tweet-quote">Tweet</button>
      </a>
      <button id="new-quote" onClick={() => randomQuote()}>
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
