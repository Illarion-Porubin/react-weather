import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCustomSelector } from "../../../../hooks/store";
import { selectCurrentWeatherData } from "../../../../store/selectors";
import { currentWeatherSlice } from "../../../../store/slices/currentWeatherSlice";
import s from "./Tabs.module.scss";

interface Props {}

export const Tabs = (props: Props) => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { filter } = useCustomSelector(selectCurrentWeatherData);
  
  
  const payloadDay = Array.from(new Set(weather.list.map(item => new Date(item.dt * 1000).toJSON().split("T")[0].slice(8, 10)).map(item => Number(item))))

  
  const dispatch = useDispatch();



  const filterSelect = (day: any) => {
    dispatch(currentWeatherSlice.actions.filter(day));
  };

  console.log(filter, 'tabs');

  
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {payloadDay.map((day: any, index) => (
          <div
            className={filter === day ? `${s.tab} + ${s.active}` : `${s.tab}`}
            key={index}
            onClick={() => filterSelect(day)}
          >
            {day}
          </div>
        ))}
      </div>
      <div className={s.concel}>Отменить</div>
    </div>
  );
};
