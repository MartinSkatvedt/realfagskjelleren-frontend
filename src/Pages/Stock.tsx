import React, { FC, useEffect, useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { fetchProducts, createProductCount } from "../api/index";
import {
  Product,
  StockCountApiType,
  TotalCountApiType,
} from "../types/apiTypes";
import { useReactOidc } from "@axa-fr/react-oidc-context";
import ProductComponent from "../components/ProductComponent";

type StockCountType = {
  [key: number]: number;
};

const Stock: FC = () => {
  const { oidcUser } = useReactOidc();
  const { profile } = oidcUser;

  const [products, setProducts] = useState<Product[]>([]);
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
    fetchProducts(oidcUser.access_token).then((res) => setProducts(res));
  }, [oidcUser.access_token]);
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
      <Button
        _hover={{}}
        size="lg"
        bg="rfk.orange"
        marginTop="10px"
        onClick={() => submit()}
      >
        Send inn
      </Button>
    </Box>
  );
};

export default Stock;
