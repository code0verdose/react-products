import React from 'react'
import './CardLike.css'
import like from './assets/like.svg'

export const CardLike = ({ className }) => {
  
  const innerClassName = ["CardLike", className];

  return (
    <button className={innerClassName.join(" ")}>
      <img src={like} alt="<3" />
    </button>
  );
}
