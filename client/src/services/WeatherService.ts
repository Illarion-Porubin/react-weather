import axios, { AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from './../store/tipes/tipes';

// export class WeatherService {
//   static getCurrentWeather(city: string): Promise<AxiosResponse<any>> {
//     return api.get<Weather>(`/weather?${city}`)
//   }
// }

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    // return axios.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=96d7a5c22d3256fb3cf66fc9be0b8bfa`)
    return api.get<Weather>(`/weather?q=${city}`)
  }
}