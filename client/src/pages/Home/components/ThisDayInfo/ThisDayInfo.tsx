import s from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import { Weather } from "../../../../store/tipes/tipes";
import { ThisDayItem } from "./ThisDayItem";


interface Props {
  weather: Weather;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = ({weather}: Props) => {
  let checkWind;
  Math.ceil(weather.wind.speed) < 5 ? checkWind = 'м/с - легкий ветер' : checkWind = 'м/с - сильный ветер';

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `Ощущается как ${Math.floor(weather.main.temp)}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${weather.main.pressure} мм ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `${weather.weather[0].description}`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${Math.ceil(weather.wind.speed)} ${checkWind}`,
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_item}>
        {items.map((item: Item, index) => (
          <ThisDayItem item={item} key={index} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};
