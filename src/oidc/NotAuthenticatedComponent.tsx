import React, { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const NotAuthenticatedComponent: FC = () => {
  return (
    <Box>
      <Heading>Autentisering</Heading>
      <Text>Du er ikke autentisert</Text>
    </Box>
  );
};

export default NotAuthenticatedComponent;
