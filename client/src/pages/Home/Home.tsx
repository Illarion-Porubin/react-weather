import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";
import { Days } from "./components/Days/Days";
import { Tabs } from "./components/Tabs/Tabs";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";

import s from "./Home.module.scss";

interface Props {}

export const Home = (props: Props) => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { filter } = useCustomSelector(selectCurrentWeatherData);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Tabs />
      {filter ? (
        <Days weather={weather}/>
      ) : (
        <></> // можно на отмену повесть фильтр и закрывать дни
      )}
    </div>
  );
};
