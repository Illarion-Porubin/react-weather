// import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";
import { RootState } from "../../store/store";
// import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { Days } from "./components/Days/Days";
import { Tabs } from "./components/Tabs/Tabs";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";

interface Props {}

export const Home = (props: Props) => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  // const [text, setState] = useState('Moscow')
  // const dispatch = useCustomDispatch();

  const filter = useSelector((state: RootState) => {
    return state.currentWeatherSliceReducer.filter
  })

  // useEffect(() => {
  //   dispatch(fetchCurrentWeather(text));
  // }, []);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Tabs />
      {
      filter === "week" ? 
      <Days />:
      filter === "month" ?  
      "На месяц":
      filter === "tenDays" ?
      "На 10 дней" : <></>
      }
    </div>
  );
};
