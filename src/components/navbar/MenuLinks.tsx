import React, { FC } from "react";
import NavLink from "./NavLink";
import { Box, Stack } from "@chakra-ui/react";
import { useReactOidc } from "@axa-fr/react-oidc-context";
import NavButton from "./NavButton";

type MenuLinksProps = {
  isOpen: boolean;
};

export enum MenuTypes {
  CONTACT = "/Contact",
  DASHBOARD = "/Dashboard",
  STOCK = "/Stock",
  REPORT = "/Report",
  INSIGHT = "/Insight",
  REPLENISHMENT = "/Replenishment",
  NONE = "None",
}

const MenuLinks: FC<MenuLinksProps> = ({ isOpen }: MenuLinksProps) => {
  const { isEnabled, login, logout, oidcUser } = useReactOidc();

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
        {oidcUser || !isEnabled ? (
          <>
            <NavLink url={MenuTypes.DASHBOARD} name="Dashboard" />
            <NavLink url={MenuTypes.STOCK} name="Varetelling" />
            <NavLink url={MenuTypes.REPLENISHMENT} name="Varepåfylling" />
            <NavLink url={MenuTypes.REPORT} name="Rapporter" />
            <NavLink url={MenuTypes.INSIGHT} name="Innsikt" />
            <NavButton name="Logg ut" func={logout} />
          </>
        ) : (
          <>
            <NavButton name="Logg inn" func={login} />
          </>
        )}
      </Stack>
    </Box>
  );
};

export default MenuLinks;
//<NavLink url={MenuTypes.CONTACT} name="Kontakt oss" />
