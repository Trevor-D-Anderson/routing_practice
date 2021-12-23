import "./App.css";
import Home from "./components/Home";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Home path="/:input" />
        <Home path="/:input/:color/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
