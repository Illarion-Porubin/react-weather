import { AxiosResponse } from 'axios';
import { Weather } from './../tipes/tipes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentWeather = {
  weather: Weather,
  isLoading: boolean,
  response: Response;
  filter: string;
}

type Response = {
  status: number,
  message: string,
}

const initialState: CurrentWeather = {
  weather: {
    weather: {
      0: {
        description: '',
        main: ''
      },
    },
    timezone: 0,
    dt: 0,
    sys: {
      sunrise: 0,
      sunset: 0
    },
    name: '',
    main: {
      temp: 0,
      pressure: 0
    },
    wind: {
      speed: 0
    },
  },

  isLoading: false,
  filter: "week",
  response: {
    status: 0,
    message: ''
  }
}

console.log(initialState.filter, 'state');


export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload
    },
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data; //сразу берем данные из data 
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
  },
});

export default currentWeatherSlice.reducer