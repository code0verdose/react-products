import React from "react";

export const ProductOption = ({ text, optionValue }) => {
  return <option value={optionValue}>{text}</option>;
};
