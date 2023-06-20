import React from "react";

export const ProductSelect = ({ children, selectValue, handler }) => {
  return (
    <select onChange={handler} value={selectValue}>
      {children}
    </select>
  );
};
