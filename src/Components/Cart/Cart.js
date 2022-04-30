import React, { useContext } from "react";
import cartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import styling from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(cartContext);

  const totalAmount = `#${ctx.totalAmount.toFixed(2)}`;
  const unEmptyCart = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    ctx.addItem({...item, amount: 1})
  }

  const cartItems = (
    <ul className={styling["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={styling.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styling.actions}>
        <button className={styling["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {unEmptyCart && <button className={styling.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
