import React from "react";
import {PayloadDay} from "../store/tipes/tipes"

interface StateContext {
  state: boolean;
  changeState?: () => void;
  dayValue: (day: PayloadDay) => void;
}

export const defaultState = {
  state: false,
  changeState: () => {},
  dayValue: () => {},
};

export const PopupContext = React.createContext<StateContext>(defaultState);