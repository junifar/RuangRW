import React from "react";
import Menu from "../pkg/Menu";
import Content from "./Content";

const Home = () => {
  return (
    <div>
      <Menu urlHome="/Home" />
      <Content />
    </div>
  );
};

export default Home;
