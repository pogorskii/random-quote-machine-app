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
        <figure className="d-flex flex-column h-100">
          {" "}
          <blockquote className="blockquote fs-4" id="text">
            {quote.quote}
          </blockquote>
          <figcaption className="blockquote-footer text-end" id="author">
            <cite className="fs-6" title="Quote Author">
              {quote.author}
            </cite>
          </figcaption>
          <div className="d-flex justify-content-between mt-auto">
            <a
              className="btn btn-dark"
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
              <i
                className="bi-twitter-x d-flex align-content-center p-2"
                style={{ fontSize: "1.4rem" }}
              ></i>
            </a>
            <button
              className="btn btn-primary fw-bold"
              onClick={this.getQuote}
              id="new-quote"
            >
              New quote
            </button>
          </div>
        </figure>
      );
    }
  }
}

export default Quote;
