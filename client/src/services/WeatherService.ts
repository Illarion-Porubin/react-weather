import { Weather } from './../store/tipes/tipes';
import axios, { AxiosResponse } from "axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=96d7a5c22d3256fb3cf66fc9be0b8bfa`)
  }
}