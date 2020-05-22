import React from "react";
import { Link } from "react-router-dom";

// const menuItems = ["Home", "About"];
const menuItems = [
  { menuId: 1, menuName: "Home", menuUrl: "/home", active: "active" },
  { menuId: 2, menuName: "About", menuUrl: "/about", active: "" },
  { menuId: 3, menuName: "Help", menuUrl: "/help", active: "" },
];

class MenuOther extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: 1 };
  }

  _handleClick(menuItem) {
    this.setState({ active: menuItem });
  }

  render() {
    console.log(this.state);
    return (
      <div className="ui blue top fixed inverted menu">
        <Link to="/home" className="header item">
          <img
            className="logo"
            alt="logo"
            src={process.env.PUBLIC_URL + "/logo512.png"}
          />
          Ruang RW
        </Link>
        {menuItems.map((data) => (
          <Link
            key={data.menuId}
            className={`item ${
              this.state.active === data.menuId ? "active" : ""
            }`}
            to="#"
            onClick={this._handleClick.bind(this, data.menuId)}
          >
            {data.menuName}
          </Link>
        ))}
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <Link to="/about" className="ui item">
            Logout
          </Link>
        </div>
      </div>

      // <div>
      //   {menuItems.map((data) => (
      //     <Link
      //       key={data.menuId}
      //       to=""
      //       className={`item ${
      //         this.state.active === data.menuId ? "active" : ""
      //       }`}
      //       onClick={this._handleClick.bind(this, data.menuId)}
      //     >
      //       {data.menuName}
      //     </Link>
      //   ))}
      // </div>
    );
  }
}

export default MenuOther;
