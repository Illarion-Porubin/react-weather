import React, { useState } from "react";
import { GlobalSvgSelecotr } from "../../../../assets/icons/global/GlobalSvgSelecotr";
import s from "./Days.module.scss";
import { usePopup } from "../../../../provider/PopupProvider";

interface Props {
  day: any;
}

export const Card = ({ day }: Props) => {
  const popup = usePopup();
  const time = new Date(day.dt * 1000);
  const checTemp = Math.floor(Math.floor(day.main.temp)) >= 0 ? "+" : "-";
  


  return (
    <>
      <div
        className={s.card}
         onClick={() => popup.dayValue(day)}
        >
        <div className={s.day__info}>
          {time.toLocaleTimeString().slice(0, 5)}
        </div>
        <div className={s.day}>{time.toLocaleDateString()}</div>
        <div className={s.img}>
          <GlobalSvgSelecotr id={day.weather[0].main} />
        </div>
        <div className={s.temp__day}>
          {checTemp}
          {Math.floor(day.main.temp)}°
        </div>
        <div className={s.temp__night}></div>
        <div className={s.info}>{day.weather[0].description}</div>
      </div>
    </>
  );
};
