import React, {useContext} from "react";
import MealItemForm from "./MealItemForm";
import cartContext from "../../../store/cart-context";
import styling from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(cartContext)

  const price = `# ${props.price.toFixed(2)}`

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={styling.meal}>
      <div>
        <h3 className={styling.h3}>{props.name}</h3>
        <div className={styling.description}>{props.description}</div>
        <div className={styling.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
