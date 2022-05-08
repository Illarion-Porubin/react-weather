import React from "react";
// import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
// import Select from "react-select";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import s from "./Popup.module.scss";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";

interface Props {}

export const Popup = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Среда</div>
          <div className={s.img}>
            <GlobalSvgSelecotr id='sun'/>
          </div>
          <div className={s.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.day__time}>
            Город: <span>Санкт-Петербург</span>
          </div>
        </div>
        <div className={s.this__day_info_item}>
          {items.map((item: Item, index) => (
            <ThisDayItem item={item} key={index} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelecotr id="close" />
        </div>
      </div>
    </>
  );
};
