import React from "react";
import Menu from "../pkg/Menu";
import Content from "./Content";

const Home = () => {
  return (
    <div>
      <Menu url={Home} />
      <Content />
    </div>
  );
};

export default Home;
