import React from "react";
import styling from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `# ${props.price.toFixed(2)}`

  return (
    <li className={styling.meal}>
      <div>
        <h3 className={styling.h3}>{props.name}</h3>
        <div className={styling.description}>{props.description}</div>
        <div className={styling.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
