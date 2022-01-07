import React, { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
const CustomCallback: FC = () => {
  return (
    <Box>
      <Heading>Autentisering pågår</Heading>
      <Text>Du blir omdirigert til påloggingside</Text>
    </Box>
  );
};

export default CustomCallback;
