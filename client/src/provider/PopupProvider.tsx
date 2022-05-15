import { useContext } from "react";
import { ReactNode } from "react";
import { PopupContext, defaultState } from "../context/PopupContext";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentWeatherSlice } from '../store/slices/currentWeatherSlice';

interface Props {
  children: ReactNode; //?
}

export const usePopup = () => {
  return useContext(PopupContext);
};

export const PopupProvider = ({ children, ...props }: Props) => {
  const [state, setState] = useState(defaultState.state);
  const dispatch = useDispatch();

  const changeState = () => setState(!state);
  const dayValue = (day: any) => {
    setState(!state);
    dispatch(currentWeatherSlice.actions.payloadDay(day))
  };

  return (
    <PopupContext.Provider
      value={{
        state,
        dayValue,
        changeState,
      }}
      {...props}
    >
      {children}
    </PopupContext.Provider>
  );
};
