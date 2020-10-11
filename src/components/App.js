import React from "react";
import Home from "./pages/v2/home";
// import { BrowserRouter, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Help from "./pages/help/Help";
// import Homev1 from "./pages/v1/home";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/help" exact component={Help} />
        <Route path="/v1/" exact component={Homev1} />
      </BrowserRouter> */}
      <Home />
    </div>
  );
};

export default App;
