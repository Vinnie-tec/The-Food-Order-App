import React from "react";
import Input from "./Input";
import styling from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={styling.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
