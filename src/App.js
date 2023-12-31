import Card from "react-bootstrap/Card";

import "./App.css";

import Quote from "./components/Quote";

function App() {
  return (
    <div className="container-fluid p-5 vh-100 d-flex flex-column justify-content-center align-items-center text-bg-light">
      <header className="mb-4" style={{ maxWidth: "800px" }}>
        <h1 className="header">Get your random quote</h1>
        <p className="lead">Better than a fortune cookie!</p>
      </header>
      <main style={{ minWidth: "75%", maxWidth: "800px", minHeight: "350px" }}>
        <Card className="h-100 p-5 pb-4" id="quote-box">
          <Quote />
        </Card>
      </main>
    </div>
  );
}

export default App;
