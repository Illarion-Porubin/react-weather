import { GlobalSvgSelecotr } from "../../../../assets/icons/global/GlobalSvgSelecotr";
import { Weather } from "../../../../store/tipes/tipes";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {

  const sunriseTime = new Date((weather.city.sunrise ) * 1000);
  const sunsetTime = new Date((weather.city.sunset ) * 1000)
  let checTemp = Math.floor(weather.list[0].main.temp) >= 0 ? "+" : "-";

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>
            <span>{checTemp}{Math.floor(weather.list[0].main.temp)}°</span>
          </div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelecotr id={weather.list[0].weather[0].main} />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__data}>
          {/* Дата: <span>{sunriseTime.toISOString().split("T")[0]}</span> */}
          {/* Дата: <span>{weather.list[0].dt_txt}</span> */}
        </div>
        <div className={s.this__time}>
          Восход: <span>{sunriseTime.toLocaleTimeString().slice(0,-3)}</span>
        </div>
        <div className={s.this__time}>
          Закат : <span>{sunsetTime.toLocaleTimeString().slice(0,-3)}</span>
        </div>
        <div className={s.this__time}>
          Город: <span>{weather.city.name}</span>
        </div>
      </div>
    </div>
  );
};
