import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import s from "./Popup.module.scss";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import { GlobalSvgSelecotr } from "../../assets/icons/global/GlobalSvgSelecotr";
import { usePopup } from "../../provider/PopupProvider"
import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";


interface Props {}

export const Popup = (props: Props) => {
  const popup = usePopup()
  const { payloadDay } = useCustomSelector(selectCurrentWeatherData);
  const checkWind = Math.ceil(payloadDay.wind.speed) < 5 ? 'м/с - легкий ветер' : 'м/с - сильный ветер';

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(payloadDay.main.temp)}° - ощущается как ${Math.floor(payloadDay.main.feels_like)}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${payloadDay.main.pressure} мм ртутного столба`,

    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `${payloadDay.weather[0].description}`,

    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${Math.ceil(payloadDay.wind.speed)} ${checkWind}`,
    },
  ];

  if(!popup.state) return null

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
        <div className={s.close} onClick={popup.changeState}>
          <GlobalSvgSelecotr id="close" />
        </div>
      </div>
    </>
  );
};
