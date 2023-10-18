import React from "react";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quote: [],
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    fetch(
      `https://dummyjson.com/quotes/${
        1 + Math.floor(Math.random() * (100 - 1 + 1))
      }`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quote: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    const { error, isLoaded, quote } = this.state;
    if (error) {
      return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <figure>
          {" "}
          <blockquote className="blockquote" id="text">
            {quote.quote}
          </blockquote>
          <figcaption className="blockquote-footer" id="author">
            <cite title="Source Title">{quote.author}</cite>
          </figcaption>
          <button
            className="btn btn-primary p-2"
            onClick={this.getQuote}
            id="new-quote"
          >
            New quote
          </button>
          <a
            className="btn btn-primary"
            title="Tweet this quote!"
            target="_top"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${quote.quote
              .replaceAll(" ", "%20")
              .replaceAll(";", "%3B")
              .replaceAll(",", "%2C")}%22%20${quote.author.replaceAll(
              " ",
              "%20"
            )}`}
            id="tweet-quote"
          >
            {/* https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22It’s%20your%20place%20in%20the%20world%3B%20it’s%20your%20life.%20Go%20on%20and%20do%20all%20you%20can%20with%20it%2C%20and%20make%20it%20the%20life%20you%20want%20to%20live.%22%20Mae%20Jemison */}
            {/* It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live. */}
            {/* text=%22You%20can%E2%80%99t%20use%20up%20creativity.%20%20The%20more%20you%20use%2C%20the%20more%20you%20have.%22%20Maya%20Angelou */}
            {/* You can’t use up creativity. The more you use, the more you have. */}
            <i className="bi-twitter-x" style={{ fontSize: "2rem" }}></i>
          </a>
        </figure>
      );
    }
  }
}

export default Quote;
