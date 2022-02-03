import React from "react"
import { BrowserRouter as Router, Route, Switch } from react-router-dom
import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
