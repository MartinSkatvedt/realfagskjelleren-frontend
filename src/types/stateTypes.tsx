import { Dispatch, ReactNode } from "react";
import { Product } from "./apiTypes";

export type State = {
  products: Product[];
};

export type StateContextProps = {
  state: State;
  dispatch: Dispatch<any>;
};

export type StateProviderProps = {
  children: ReactNode;
};
