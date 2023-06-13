import React, { Fragment } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <Fragment>
      <div className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            max: "6",
            min: "1",
            step: "1",
            defaultValue: "1"
          }}
        />
        <button>+ Add</button>
      </div>
    </Fragment>
  );
};

export default MealItemForm;
