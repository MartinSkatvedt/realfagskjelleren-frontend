import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";

const NavBarContainer: FC = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={2}
      bg="rfk.orange"
      color={["white", "white", "primary.700", "primary.700"]}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
