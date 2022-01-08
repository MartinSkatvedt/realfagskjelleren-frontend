import React, { FC } from "react";
import { Product } from "../../types/apiTypes";
import { Box, Heading, Input, SimpleGrid } from "@chakra-ui/react";

type ProductComponentProps = {
  product: Product;
  func: (product: Product, quantity: number) => void;
};
const ProductComponent: FC<ProductComponentProps> = ({
  product,
  func,
}: ProductComponentProps) => {
  return (
    <SimpleGrid
      w="10%"
      border="1px solid black"
      margin="10px"
      columns={1}
      rows={2}
      p="5px"
    >
      <Heading size="sm">
        {product.name} ({product.description})
      </Heading>
      <Box>
        <Input
          type="number"
          placeholder="quantity"
          onChange={(e) => func(product, Number(e.target.value))}
        />
      </Box>
    </SimpleGrid>
  );
};

export default ProductComponent;
