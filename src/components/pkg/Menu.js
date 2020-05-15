import React from "react";
import { Link } from "react-router-dom";
import About from "../About";
import Home from "../home/Home";

const Menu = (state) => {
  return (
    <div className="ui blue top fixed inverted menu">
      <Link to={Home} className="active item">
        Home
      </Link>
      <Link to={About} className="item">
        About
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <Link to={Home} className="ui item">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Menu;
