import React, { FC } from "react";
import NavLink from "./NavLink";
import { Box, Stack } from "@chakra-ui/react";
import { useReactOidc } from "@axa-fr/react-oidc-context";

type MenuLinksProps = {
  isOpen: boolean;
};

export enum MenuTypes {
  CONTACT = "Contact",
  LOGIN = "Login",
  NONE = "None",
}

const MenuLinks: FC<MenuLinksProps> = ({ isOpen }: MenuLinksProps) => {
  const { isEnabled, login, logout, signinSilent, oidcUser } = useReactOidc();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavLink url={MenuTypes.CONTACT} name="Kontakt oss" />

        {oidcUser || !isEnabled ? (
          <button onClick={() => logout()}>logout</button>
        ) : (
          <>
            <button onClick={() => login()}>login</button>
            <button onClick={() => signinSilent()}>login - Silent - </button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default MenuLinks;
