import React, { Component } from "react";
import Buttons from "/Components/Buttons";
import Quotes from "/Components/Quotes";

export default class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: "Endure. In enduring, grow strong.",
          name: "Chris Avellone"
        },
        {
          quote:
            "Women were the reason I became a monk - and, ah, the reason I switched back.",
          name: "Chris"
        },
        {
          quote: "You cannot kill hope. Hope remains.",
          name: "Varok Saurfang"
        },
        {
          quote: "No king rules forever, my son.",
          name: "Terenas"
        },
        {
          quote:
            "The darkness surrounds you, the light of Elune is your only salvation.",
          name: "Tyrande Whisperwind"
        },
        {
          quote:
            "To believe in an ideal, is to be willing to betray it. It is something no Sith or Jedi has ever truly learned.",
          name: "Avellone"
        }
      ],
      curQuote: "",
      curAuth: ""
    };
  }
  componentDidMount() {
    this.randomQuote();
  }

  randomQuote = () => {
    const { quotes } = this.state;
    let randIndex = Math.floor(Math.random() * quotes.length);

    this.setState({
      curQuote: quotes[randIndex].quote,
      curAuth: quotes[randIndex].name
    });
  };

  render() {
    const { curQuote, curAuth } = this.state;
    return (
      <div id="quote-box">
        <Quotes curQuote={curQuote} curAuth={curAuth} />
        <Buttons randomQuote={this.randomQuote} />
      </div>
    );
  }
}
