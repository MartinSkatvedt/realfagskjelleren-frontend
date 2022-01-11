import React, { createContext, useReducer } from "react";
import { Action, ActionTypes } from "./actions";
import {
  State,
  StateContextProps,
  StateProviderProps,
} from "../types/stateTypes";

const initalState: State = {
  products: [],
};

const StateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
};

const initalContext: StateContextProps = {
  state: initalState,
  dispatch: () => {},
};

export const StateContext = createContext<StateContextProps>(initalContext);

export const StateProvider = (props: StateProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(StateReducer, initalState);
  const { children } = props;
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
