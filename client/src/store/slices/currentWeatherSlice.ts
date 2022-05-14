import { fetchCurrentWeather } from './../thunks/fetchCurrentWeather';
import { AxiosResponse } from 'axios';
import { Weather } from './../tipes/tipes';



import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentWeather = {
  weather: Weather,
  isLoading: boolean,
  response: Response;
  payloadDay: number[],
  filter: any;
}

type Response = {
  status: number,
  message: string,
}

const initialState: CurrentWeather = {
  weather: {
    city: {
      timezone: 0,
      sunrise: 0,
      sunset: 0,
      name: '',
    },
    list: [{
      dt: 0,
      dt_txt: '',
      main: {
        temp: 0,
        feels_like: 0,
        pressure: 0
      },
      weather: [{
        description: '',
        main: '',
      }],
      wind: {
        speed: 0,
      }
    }]
  },
  isLoading: false,
  payloadDay: [],
  filter: 0,
  response: {
    status: 0,
    message: ''
  }
}


export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload
    },
    payloadDay(state, action) {
      state.payloadDay = action.payload
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

console.log()

export default currentWeatherSlice.reducer