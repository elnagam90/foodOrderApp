import React, { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = props.price.toFixed(2);
  return (
    <Card>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <h3 className={classes.description}>{props.description}</h3>
          <div className={classes.price}>{price}</div>
        </div>
        <MealItemForm />
      </li>
    </Card>
  );
};

export default MealItem;
