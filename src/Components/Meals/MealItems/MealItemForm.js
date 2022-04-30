import React, { useRef, useState } from "react";
import Input from "./Input";
import styling from "./MealItemForm.module.css";

const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);


  const amountInputRefs = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRefs.current.value; //the value is always a string
    const enteredAmountToNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountToNum < 1 ||
      enteredAmountToNum > 5
    ) {
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountToNum);
  };

  return (
    <form className={styling.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRefs}
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
      {!amountIsValid && <p>Please enter a valid amount (1 - 5)</p>}
    </form>
  );
};

export default MealItemForm;
