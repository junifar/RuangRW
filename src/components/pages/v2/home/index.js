import React, { Component } from "react";
import SearchBox from "../../../searchbox";
import classes from "./index.module.css"
import Aux from "../../../hoc/aux";
import Header from "../../../header";

class Coba extends Component {
  render() {
    return (
        <Aux>
          <Header/>
          <main className={classes.main}>
              <div className={classes.centerbox}>
                  <SearchBox/>
              </div>
          </main>
        </Aux>
    );
  }
}

export default Coba;
