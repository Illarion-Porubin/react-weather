import React from "react";

interface StateContext {
  state: boolean;
  changeState?: () => void;
  dayValue: (day: any) => void;
}

export const defaultState = {
  state: false,
  dayValue: () => {}
};

export const PopupContext = React.createContext<StateContext>(defaultState);

