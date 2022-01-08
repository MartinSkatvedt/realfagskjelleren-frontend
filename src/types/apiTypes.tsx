export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  active: boolean;
};

export type StockCountApiType = {
  product: number;
  amount: number;
};

export type TotalCountApiType = {
  author: string;
  data: StockCountApiType[];
};
