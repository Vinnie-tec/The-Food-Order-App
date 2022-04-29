import React from 'react'
import styling from './Input.module.css'

const Input = (props) => {
  return (
    <div className={styling.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  )
}

export default Input