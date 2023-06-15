import React from 'react'
import './Button.css'

export const Button = ({ children, className, handler }) => {
  
  const innerClassName = ['Button', className];

  return (
    <button className={innerClassName.join(" ")}>{ children }</button>
  )
}
