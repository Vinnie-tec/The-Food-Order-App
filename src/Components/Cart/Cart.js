import React from "react";
import Modal from "../UI/Modal";
import styling from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styling['cart-items']}>
      {[{ id: "c1", name: "Vin", amount: 3, price: 12.2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={styling.total}>
        <span>Total Amount</span>
        <span>35.67</span>
      </div>
      <div className={styling.actions}> 
        <button className={styling['button--alt']} onClick={props.onCloseCart}>Close</button>
        <button className={styling.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
