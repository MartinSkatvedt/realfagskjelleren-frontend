import React, { FC, useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import {
  fetchProductCount,
  fetchProductReplenishment,
  fetchProducts,
} from "../api/index";
import { TotalCountApiType, Product } from "../types/apiTypes";
import { useReactOidc } from "@axa-fr/react-oidc-context";
const Insight: FC = () => {
  const { oidcUser } = useReactOidc();
  const [products, setProducts] = useState<Product[]>([]);
  const [productCounts, setProductCounts] = useState<TotalCountApiType[]>([]);
  const [productReplenishment, setProductReplenishment] = useState<
    TotalCountApiType[]
  >([]);

  useEffect(() => {
    fetchProductCount(oidcUser.access_token).then((res) =>
      setProductCounts(res)
    );
    fetchProductReplenishment(oidcUser.access_token).then((res) =>
      setProductReplenishment(res)
    );
    fetchProducts(oidcUser.access_token).then((res) => setProducts(res));
  }, [oidcUser.access_token]);

  return (
    <Box w="100%" textAlign="center">
      <Heading>Innsikt</Heading>
      Products: {products.length}
      <br />
      ProductCounts: {productCounts.length}
      <br />
      ProductReplenishment: {productReplenishment.length}
    </Box>
  );
};

export default Insight;
