import React from "react";

import classes from "./index.module.css";

const header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.menu}>MENU</div>
            <div className={classes.logo}>LOGO</div>
            <div className={classes.menuRight}>MENU RIGHT</div>
        </header>
    );
}

export default header;