import React from "react";
import s from "./Days.module.scss";
import { Card } from "./Card";

interface Props {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = (props: Props) => {


  const days: Day[] = [
    {
      day: "Сегодня",
      day_info: "22 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Солнечно",
    },
    {
      day: "Завтра",
      day_info: "23 авг",
      icon_id: "small_rain",
      temp_day: "+15",
      temp_night: "+10",
      info: "небольшой дождь",
    },
    {
      day: "Ср",
      day_info: "24 авг",
      icon_id: "small_rain_sun",
      temp_day: "+14",
      temp_night: "+16",
      info: "небольшой дождь и солнце",
    },
    {
      day: "Чт",
      day_info: "25 авг",
      icon_id: "mainly_cloudy",
      temp_day: "+17",
      temp_night: "+12",
      info: "Облачно",
    },
    {
      day: "Пт",
      day_info: "26 авг",
      icon_id: "sun",
      temp_day: "+22",
      temp_night: "+12",
      info: "Солнечно",
    },
    {
      day: "Сб",
      day_info: "27 авг",
      icon_id: "sun",
      temp_day: "+14",
      temp_night: "+19",
      info: "Солнечно",
    },
    {
      day: "Вс",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+17",
      temp_night: "+17",
      info: "Солнечно",
    },
  ];
  return (
    <>
      <div className={s.days}>
        {days.map((day: Day, index) => (
          <Card day={day} key={index} />
        ))}
      </div>
    </>
  );
};
