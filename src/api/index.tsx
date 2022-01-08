import axios from "axios";
import { Product } from "../types/apiTypes";
export const API_ROOT = "https://admin.realfagskjelleren.no/api/";
export const API_PRODUCTS = API_ROOT + "products/";
export const API_PRODUCT_COUNT = API_ROOT + "totalproductcount/";
export const fetchProducts = async (token: string): Promise<Product[]> => {
  const response = await axios.get(API_PRODUCTS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createProductCount = async (payload: any, token: string) => {
  console.log(payload);
  const response = await axios.post(API_PRODUCT_COUNT, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};
