import React, { FC, useState, useEffect, useContext } from "react";
import { Box, Heading } from "@chakra-ui/react";
import {
  fetchProductCount,
  fetchProductReplenishment,
  fetchProducts,
} from "../api/index";
import { TotalCountApiType } from "../types/apiTypes";
import { useReactOidc } from "@axa-fr/react-oidc-context";
import { StateContext } from "../state/state";
import { setProducts } from "../state/actions";

const Insight: FC = () => {
  const { oidcUser } = useReactOidc();
  const { state, dispatch } = useContext(StateContext);
  const { products } = state;
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

    if (products.length <= 0) {
      fetchProducts(oidcUser.access_token).then((res) =>
        dispatch(setProducts(res))
      );
    }
  }, [dispatch, oidcUser.access_token, products]);

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
