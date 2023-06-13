import classes from "./HeaderCartButton.module.css";
import React, { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.bump}>My Cart</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
