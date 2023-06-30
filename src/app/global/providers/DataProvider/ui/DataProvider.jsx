import React, { useEffect, useState } from "react";
import { DataContext } from "../lib/DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const req = fetch(
      `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PRODUCTS_ALL}`
    );
    req
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((er) => console.log(er));
  }, []);


  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
