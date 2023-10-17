import logo from "./logo.svg";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Container className="p-2 bg-light rounded-3">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="header">Weee Wooo Weee Wooo Weee Wooo</h1>
          <p>First React app – here we gooooo!</p>
        </Container>
      </header>
      <body>
        <Card className="m-4 p-4">
          <Card.Body>
            <Card.Title>
              <h2>Quote of the Minute</h2>
            </Card.Title>
            <Card.Text className="mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="p-2 bg-black rounded-3" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </body>
    </div>
  );
}

export default App;
