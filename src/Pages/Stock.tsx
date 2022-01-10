import React, { FC, useEffect, useState, useContext } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { fetchProducts, createProductCount } from "../api/index";
import {
  Product,
  StockCountApiType,
  TotalCountApiType,
} from "../types/apiTypes";
import { useReactOidc } from "@axa-fr/react-oidc-context";
import ProductComponent from "../components/ProductComponent";
import { StateContext } from "../state";
import { setProducts } from "../state/actions";
import ConfirmationAlert from "../components/ConfirmationAlert";

type StockCountType = {
  [key: number]: number;
};

const Stock: FC = () => {
  const { oidcUser } = useReactOidc();
  const { profile } = oidcUser;
  const { state, dispatch } = useContext(StateContext);
  const { products } = state;
  const [stockCount, setStockCount] = useState<StockCountType>({});
  let nActiveProducts = 0;
  const updateStockCount = (product: Product, quantity: number) => {
    const newStockCount = { ...stockCount };
    newStockCount[product.id] = quantity;
    setStockCount(newStockCount);
  };

  const submit = () => {
    let data: StockCountApiType[] = [];
    Object.keys(stockCount).forEach((key) => {
      data.push({
        product: Number(key),
        amount: stockCount[Number(key)],
      });
    });
    const payload: TotalCountApiType = {
      author: profile.sub,
      data,
    };

    if (data.length < nActiveProducts) {
      alert("Du har ikke fylt ut alle produkter");
      return;
    }
    createProductCount(payload, oidcUser.access_token)
      .then((res) => {
        if (res.status === 201) {
          alert("Suksess! Data er sendt til server");
        }
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    if (products.length <= 0) {
      fetchProducts(oidcUser.access_token).then((res) =>
        dispatch(setProducts(res))
      );
    }
  }, [oidcUser.access_token, products, dispatch]);
  console.log(products);
  const renderProducts = () => {
    return products.map((product) => {
      if (product.active) {
        nActiveProducts++;
        return (
          <ProductComponent
            key={product.id}
            product={product}
            func={updateStockCount}
          />
        );
      } else return null;
    });
  };

  return (
    <Box textAlign="center">
      <Heading>Varetelling</Heading>
      <Flex width="80%" marginLeft="auto" marginRight="auto" wrap="wrap">
        {renderProducts()}
      </Flex>
      <ConfirmationAlert func={submit} title="varetelling" />
    </Box>
  );
};

export default Stock;
