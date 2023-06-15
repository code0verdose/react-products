import React from "react";
import './CardPrice.css'

export const CardPrice = ({ priceCount, currency, type }) => {

  const innerClassName = ["CardPrice__value"];

  if (type === 'card') {
    innerClassName.push('card')
  }
  if (type === 'basic') {
    innerClassName.push('basic')
  }

  return (
    <div className="CardPrice">
      <strong className={innerClassName.join(" ")}>{priceCount}</strong>
      <strong className={innerClassName.join(" ")}>{currency}</strong>
    </div>
  );
};
