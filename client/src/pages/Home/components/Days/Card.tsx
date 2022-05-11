import React, { useState } from "react";
import { GlobalSvgSelecotr } from "../../../../assets/icons/global/GlobalSvgSelecotr";
import s from "./Days.module.scss";
import { Popup } from "../../../../shared/Popup/Popup";
import { match } from "assert";

interface Props {
  day: any;
}

export const Card = ({ day }: Props) => {
  const time = new Date(day.dt * 1000);
  const newTime = `${time.getHours()}:${time.getMinutes()}${time.getSeconds()}`
  let checTemp = Math.floor(Math.floor(day.main.temp)) >= 0 ? "+" : "-";

  console.log()
  return (
    <>
      {/* {popup ? <Popup/> : <></>} */}
      <div className={s.card}>
        <div className={s.day}>{day.dt_txt.slice(5, 10)}</div>
        <div className={s.day__info}>{newTime}</div>
          <div className={s.img}>
          <GlobalSvgSelecotr id={day.weather[0].main}/>
        </div>
        <div className={s.temp__day}>{checTemp}{Math.floor(day.main.temp)}°</div>
        <div className={s.temp__night}></div>
        <div className={s.info}>{day.weather[0].description}</div>
      </div>
    </>
  );
};
