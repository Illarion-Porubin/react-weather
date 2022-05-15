import { currentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherService } from './../../services/WeatherService';
import { AppDispath } from './../store';

export const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispath) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather)
        const res = await WeatherService.getCurrentWeather(payload);
        console.log(payload, 'payload')
        dispatch(currentWeatherSlice.actions.filter(new Date(res.data.list[0].dt * 1000).toLocaleDateString()))
        dispatch(currentWeatherSlice.actions.payloadDays(Array.from(new Set(res.data.list.map(item => new Date(item.dt * 1000).toLocaleDateString().slice(0, 2))))))
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error)
    }
  }