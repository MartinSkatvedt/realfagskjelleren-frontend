import { Product } from "../src/types/apiTypes";

export enum ActionTypes {
  SET_PRODUCTS = "SET_PRODUCTS",
}

type setProductsAction = {
  type: ActionTypes.SET_PRODUCTS;
  payload: Product[];
};

export type Action = setProductsAction;

export const setProducts = (products: Product[]): setProductsAction => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});
