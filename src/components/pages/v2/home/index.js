import React, { Component } from "react";
import SearchBox from "../../../searchbox";
import classes from "./index.module.css"

class Coba extends Component {
  render() {
    return (
      <div className={classes.centerbox}>
        <SearchBox/>
      </div>
    );
  }
}

export default Coba;
