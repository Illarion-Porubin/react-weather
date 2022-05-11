export type Weather = {
  city: {
    timezone: number,
    sunrise: number,
    sunset: number,
    name: string,
  },
  list: [{
    dt: number,
    dt_txt: string,
    main: {
      temp: number,
      feels_like: number,
      pressure: number,
    },
    weather: [{
      description: string,
      main: string,
    }],
    wind: {
      speed: number,
    }
  }]
};