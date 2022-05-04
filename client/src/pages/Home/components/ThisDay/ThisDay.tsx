import { GlobalSvgSelecotr } from "../../../../assets/icons/global/GlobalSvgSelecotr";
import { Weather } from "../../../../store/tipes/tipes";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}> 
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}<span>°</span></div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelecotr id="sun"/>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this__time}>
          Город: <span>Санкт-Петербург</span>
        </div>
      </div>
    </div>
  );
};
