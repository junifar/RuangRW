import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

// const Homev1 = () => {
//   return <div>Hello</div>;
// };

class Homev1 extends Component {
  render() {
    return (
      <Menu size="massive" stackable>
        <Menu.Item>
          <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="Logo" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Homev1;
