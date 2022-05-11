import React from "react";
import s from "./Days.module.scss";
import { Card } from "./Card";
import { useCustomSelector } from "../../../../hooks/store";
import { selectCurrentWeatherData } from "../../../../store/selectors";

interface Props {}

export const Days = (props: Props) => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  
  return (
    <>
      <div className={s.days}>
        {weather.list.map((day, index) => (
          <Card day={day} key={index} />
        ))}
      </div>
    </>
  );
};
