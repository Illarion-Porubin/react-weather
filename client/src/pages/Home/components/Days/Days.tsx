import React from "react";
import s from "./Days.module.scss";
import { Card } from "./Card";
import { useCustomSelector } from "../../../../hooks/store";
import { selectCurrentWeatherData } from "../../../../store/selectors";
import { Weather } from "../../../../store/tipes/tipes";

interface Props {
  weather: Weather;
}


export const Days = ({ weather }: Props) => { 
  const { filter } = useCustomSelector(selectCurrentWeatherData);
  const sortDays = weather.list.filter(item => new Date(item.dt * 1000).toLocaleDateString().slice(0, 2) === filter.slice(0, 2))
  

  return (
      <div className={s.days}>
        {sortDays.map((day: any, index) => (
          <Card day={day} key={index} />
        ))}
      </div>
  );
};
