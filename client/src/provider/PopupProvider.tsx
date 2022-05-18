import React, {FC} from "react";
import { useContext } from "react";
import { ReactNode } from "react";
import { PopupContext, defaultState } from "../context/PopupContext";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentWeatherSlice } from '../store/slices/currentWeatherSlice';
import { PayloadDay } from "../store/tipes/tipes"

interface Props {children: ReactNode}

export const usePopup = () => {
  return useContext(PopupContext);
};

export const PopupProvider: FC<Props> = 
  ({
    children, 
    ...props
  }) => {
  const [state, setState] = useState(defaultState.state);
  const dispatch = useDispatch();
  const changeState = () => setState(!state);

  const dayValue = (day: PayloadDay) => {
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
