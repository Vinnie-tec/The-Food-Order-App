import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styling from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  
  const {items} = cartCtx;

  const numberOfCartItem = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);


  const btnClasses = `${styling.button} ${buttonHighlighted ? styling.bump : ''}`;

  useEffect(() => {
    if (items.length === 0 ) {
      return;
    }
    setButtonHighlighted(true)
    const timer = setTimeout(()=> {
      setButtonHighlighted(false)
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styling.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styling.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
