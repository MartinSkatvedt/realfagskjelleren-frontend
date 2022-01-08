import React from "react";
import { useReactOidc } from "@axa-fr/react-oidc-context";
import {
  Container,
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
const DashBoard: React.FC = () => {
  const { oidcUser } = useReactOidc();
  const { profile } = oidcUser;
  console.log(profile);
  return (
    <Container textAlign="center">
      <Heading>Dashboard</Heading>
      <Heading size="md">{profile.name}</Heading>
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Name</Td>
              <Td>{profile.username}</Td>
            </Tr>
            <Tr>
              <Td>Email</Td>
              <Td>{profile.email}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default DashBoard;
