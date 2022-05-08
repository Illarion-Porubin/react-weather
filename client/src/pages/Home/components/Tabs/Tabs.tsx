import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Tabs.module.scss";
import { currentWeatherSlice } from "../../../../store/slices/currentWeatherSlice";

interface Props {}

export const Tabs = (props: Props) => {
  let [filter, setFilter] = useState('week');
  const dispatch = useDispatch();
  const tabs = [
    {
      value: "На неделю",
      mode: "week",
    },
    {
      value: "На месяц",
      mode: "month",
    },
    {
      value: "На 10 дней",
      mode: "tenDays",
    },
  ];
  
  const filterSelect = (mode: string) => {
    setFilter(mode)
    dispatch(currentWeatherSlice.actions.filter(mode));
  };


  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div
            className={filter === tab.mode ? `${s.tab} + ${s.active}` : `${s.tab}`}
            key={tab.value}
            onClick={() => filterSelect(tab.mode)}
          >
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.concel}>Отменить</div>
    </div>
  );
};
