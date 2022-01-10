import React, { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Product } from "../types/apiTypes";
import { Action, ActionTypes } from "./Actions";

type State = {
  products: Product[];
};

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

type StateContextProps = {
  state: State;
  dispatch: Dispatch<any>;
};

const initalContext: StateContextProps = {
  state: initalState,
  dispatch: () => {},
};

export const StateContext = createContext<StateContextProps>(initalContext);

type StateProviderProps = {
  children: ReactNode;
};

export const StateProvider = (props: StateProviderProps) => {
  const [state, dispatch] = useReducer(StateReducer, initalState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
};
