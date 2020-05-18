import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Help from "./Help";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/help" exact component={Help} />
      </BrowserRouter>
    </div>
  );
};

export default App;
