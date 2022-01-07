import React, { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const NotAuthorizedComponent: FC = () => {
  return (
    <Box>
      <Heading>Autentisering</Heading>
      <Text>Du har ikke tilgang til denne ressursen</Text>
    </Box>
  );
};

export default NotAuthorizedComponent;
