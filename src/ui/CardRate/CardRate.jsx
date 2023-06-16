import React from "react";
import "./CardRate.css";
import filledStar from "./assets/filled-star.svg";
import emptyStar from "./assets/empty-star.svg";

export const CardRate = ({ rate = 3, className }) => {
  const starArr = [];

  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      starArr.push(filledStar);
    } else {
      starArr.push(emptyStar);
    }
  }

  return (
    <div className={className}>
      {starArr.map((el, i) => (
        <img key={i} src={el} alt="*" />
      ))}
    </div>
  );
};
