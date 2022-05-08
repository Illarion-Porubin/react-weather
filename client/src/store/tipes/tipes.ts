export type Weather = {
  timezone: number,
  dt: number,
  sys: {
    sunrise: number,
    sunset: number
  },
  name: string,
  main: {
    temp: number,
    pressure: number
  },
  weather: {
    0: {
      description: string,
      main: string
    },
  }
  wind: {
    speed: number
  }
};