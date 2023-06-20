import React from "react";
import "./Button.css";

export const Button = ({ children, className, handler, isDisabled }) => {
  const innerClassName = ["Button", className];

  return (
    <button disabled={isDisabled} className={innerClassName.join(" ")}>
      {children}
    </button>
  );
};
