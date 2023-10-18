import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./App.css";

import Quote from "./components/Quote";

function App() {
  return (
    <Container className="vh-100 d-flex flex-column justify-content-center align-content-center">
      <header>
        <h1 className="header">Get your random quote</h1>
        <p>Better than a fortune cookie!</p>
      </header>
      <main>
        <Card className="p-4" id="quote-box">
          <figure>
            <Quote />
          </figure>
        </Card>
      </main>
    </Container>
  );
}

export default App;
