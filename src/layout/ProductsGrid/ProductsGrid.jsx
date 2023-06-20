import React from "react";
import "./ProductsGrid.css";

export const ProductsGrid = ({ children, className }) => {
  const innerClassName = ["ProductsGrid", className];
  return <div className={innerClassName.join(" ")}>{children}</div>;
};
