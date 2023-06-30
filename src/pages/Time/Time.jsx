import React, { useEffect, useState } from "react";
import { Layout } from "../../layout/Layout";
import { TimeSection } from "../../components/TimeSection/TimeSection";

export const Time = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleString("ru-RU"));
      console.log(date.toLocaleString("ru-RU"));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <TimeSection time={time} />;
};
