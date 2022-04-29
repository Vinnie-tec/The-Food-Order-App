import React from 'react'
import CartIcon from '../Cart/CartIcon'
import styling from './HeaderCartButton.module.css'


const HeaderCartButton = () => {
  return (
    <button className={styling.button}>
      <span className={styling.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styling.badge}>
        3
      </span>
    </button>  )
}

export default HeaderCartButton