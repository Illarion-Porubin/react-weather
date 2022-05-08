import { GlobalSvgSelecotr } from "../../../../assets/icons/global/GlobalSvgSelecotr";
import { Weather } from "../../../../store/tipes/tipes";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  // const currenTime = new Date((weather.sys.sunrise + (weather.sys.sunset - weather.sys.sunrise - weather.timezone ) + weather.timezone )  * 1000) ;

  const currenTime = new Date(weather.dt*1000+(weather.timezone))

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>
            {Math.floor(weather.main.temp)}
            <span>°</span>
          </div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelecotr id={weather.weather[0].main} />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__data}>
          Дата: <span>{currenTime.toISOString().split("T")[0]}</span>
        </div>
        <div className={s.this__time}>
          {/* Время: <span>{currenTime.toLocaleTimeString().slice(0,-3)}</span> */}
        </div>
        <div className={s.this__time}>
          Город: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
};
