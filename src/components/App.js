import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
      </BrowserRouter>
    </div>
  );
};

export default App;
