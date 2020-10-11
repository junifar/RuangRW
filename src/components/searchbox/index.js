import React, { Component } from "react";
import classes from "./index.module.css";
import Magnifier from "./magnifier";

class SearchBox extends Component {
  render() {
    return (
      <div className={classes.box}>
        <div className={classes.searchbox}>
          <input type="text" className={classes.input}/>
          <Magnifier/>
        </div>
      </div>
    );
  }
}

export default SearchBox;
