import React, { useState } from "react";
import { fetchCurrentWeather } from "../store/thunks/fetchCurrentWeather";
import { useCustomDispatch } from "./store";

export const useInput = (initialState: string) => {
  const [value, setValue] = useState(initialState)
  const dispatch = useCustomDispatch()
  const onChange = (e: any) => { setValue(e.target.value)}
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      dispatch(fetchCurrentWeather(value))
      setValue('')
    }
  };
  return {
    value, onChange, keyDownHandler
  }
}