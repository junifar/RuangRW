import React, { Component } from "react";
import { Menu as SMenu } from "semantic-ui-react";

class Menu extends Component {
  render() {
    return (
      <SMenu size="massive" stackable>
        <SMenu.Item>
          <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="Logo" />
        </SMenu.Item>
      </SMenu>
    );
  }
}

export default Menu;
