import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const MenuSeed = [
  { menuId: 1, menuName: "Home", menuUrl: "/home", active: "active" },
  { menuId: 2, menuName: "About", menuUrl: "/about", active: "" },
  { menuId: 3, menuName: "Help", menuUrl: "/help", active: "" },
];

const MenuList = (props) => {
  return (
    <Link to={props.menuUrl} className={`${props.active} item`}>
      {props.menuName}
    </Link>
  );
};

class MenuSTF extends React.Component {
  // const menuList = MenuSeed.map((data) => (
  //     <MenuList
  //       key={data.menuId}
  //       menuName={data.menuName}
  //       menuUrl={data.menuUrl}
  //       active={this.state.active === data.menuId ? "active" : ""}
  //     />
  //   ));
  constructor(props) {
    super(props);
    this.state = { currentPath: window.location.pathname };
  }

  getMenuList() {
    return MenuSeed.map((data) => (
      <MenuList
        key={data.menuId}
        menuName={data.menuName}
        menuUrl={data.menuUrl}
        active={this.state.currentPath === data.menuUrl ? "active" : ""}
      />
    ));
  }

  render() {
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
        {this.getMenuList()}
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"/>
            </div>
          </div>
          <Link to="/about" className="ui item">
            Logout
          </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default MenuSTF;
