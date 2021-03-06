import axios from "axios";
import { Product, TotalCountApiType } from "../types/apiTypes";
export const API_ROOT = "https://admin.realfagskjelleren.no/api/";
export const API_PRODUCTS = API_ROOT + "products/";
export const API_PRODUCT_COUNT = API_ROOT + "totalproductcount/";
export const API_PRODUCT_REPLENISHMENT = API_ROOT + "productreplenishment/";

export const authorizedGet = async (url: string, token: string) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const authorizedPost = async (url: string, token: string, data: any) => {
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const fetchProducts = async (token: string): Promise<Product[]> => {
  const response = await authorizedGet(API_PRODUCTS, token);
  return response.data;
};

export const fetchProductCount = async (
  token: string
): Promise<TotalCountApiType[]> => {
  const response = await authorizedGet(API_PRODUCT_COUNT, token);
  return response.data;
};

export const createProductCount = async (
  payload: TotalCountApiType,
  token: string
) => {
  const response = await authorizedPost(API_PRODUCT_COUNT, token, payload);
  return response;
};

export const fetchProductReplenishment = async (
  token: string
): Promise<TotalCountApiType[]> => {
  const response = await authorizedGet(API_PRODUCT_REPLENISHMENT, token);
  return response.data;
};

export const createProductReplenishment = async (
  payload: TotalCountApiType,
  token: string
) => {
  const response = await authorizedPost(
    API_PRODUCT_REPLENISHMENT,
    token,
    payload
  );
  return response;
};
