import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../app/global/providers/DataProvider";
import { useMemo } from "react";

export const TimeSection = ({ time }) => {
  
  const data = useContext(DataContext)

  console.log(data);

  return (
    <div>
      TimeSection
      <Link to="/">MAIN</Link>
      <h1>{ time }</h1>
    </div>
  );
};
