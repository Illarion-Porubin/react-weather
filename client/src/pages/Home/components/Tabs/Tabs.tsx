import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCustomSelector } from "../../../../hooks/store";
import { selectCurrentWeatherData } from "../../../../store/selectors";
import { currentWeatherSlice } from "../../../../store/slices/currentWeatherSlice";
import s from "./Tabs.module.scss";

interface Props {}

export const Tabs = (props: Props) => {
  const dispatch = useDispatch();
  const { filter } = useCustomSelector(selectCurrentWeatherData);
  const { payloadDay} = useCustomSelector(selectCurrentWeatherData);

  const filterSelect = (day: any) => {
    dispatch(currentWeatherSlice.actions.filter(day));
  };
  
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {payloadDay.map((day: any, index) => (
          <div
            className={filter.slice(0, 2) === day ? `${s.tab} + ${s.active}` : `${s.tab}`}
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
