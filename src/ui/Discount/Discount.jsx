import React from 'react'
import './Discount.css'

export const Discount = ({ discount, className }) => {
  
  const innerClassName = ['Discount', className]

  return (
    <div className={innerClassName.join(" ")}>
      <span>{`-${discount}%`}</span>
    </div>
  );
}
