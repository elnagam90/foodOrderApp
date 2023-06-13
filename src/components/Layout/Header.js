import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h3>Food Meal</h3>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="this is delicious food app" />
      </div>
    </Fragment>
  );
};

export default Header;
