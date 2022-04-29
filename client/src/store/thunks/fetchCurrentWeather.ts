import { currentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherService } from './../../services/WeatherService';
import { AppDispath } from './../store';

export const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispath) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather)
      const res = await WeatherService.getCurrentWeather(payload);
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.
          fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(currentWeatherSlice.actions.
          fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error)
    }
  }