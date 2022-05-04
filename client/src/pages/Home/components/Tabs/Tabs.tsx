import React from "react";
import { useDispatch } from "react-redux";
import s from "./Tabs.module.scss";
import { currentWeatherSlice } from '../../../../store/slices/currentWeatherSlice';


interface Props {}



export const Tabs = (props: Props) => {
  const dispatch = useDispatch()
  const tabs = [
    {
      value: 'На неделю',
      mode: 'week'
    },
    {
      value: 'На месяц',
      mode: 'month'
    },
    {
      value: 'На 10 дней',
      mode: 'tenDays'
    },
  ]

  const filterSelect = (e: any) => {
    dispatch(currentWeatherSlice.actions.filter(e))
  }

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>{
        tabs.map(tab => (
          <div className={s.tab + ' ' + s.active} key={tab.value} onClick={() => filterSelect(tab.mode)}>
            {tab.value}
          </div>
        ))}
        </div>
        <div className={s.concel}>Отменить</div>
    </div>
  );
};
