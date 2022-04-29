import React from 'react'
import Input from './Input'
import styling from './MealItemForm.module.css'


const MealItemForm = (props) => {
  return (
    <form className={styling.form}>
      <Input label='Amount' />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm