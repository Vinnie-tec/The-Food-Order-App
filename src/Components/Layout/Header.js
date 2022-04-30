import React, { Fragment } from 'react'

import mealsIMG from '../../Assests/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Vin Meal Order</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsIMG} alt='A meal table'/>
      </div>
    </Fragment>
  )
}

export default Header