import React from "react";
import "./Discount.css";

export const Discount = ({ discount, className, isHidden }) => {
  const innerClassName = ["Discount", className];

  if (!isHidden) {
    return (
      <div className={innerClassName.join(" ")}>
        <span>{`-${discount}%`}</span>
      </div>
    );
  } else {
    return null;
  }
};
