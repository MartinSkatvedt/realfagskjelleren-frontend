import React, { FC } from "react";
import { Text, Link } from "@chakra-ui/react";
import { MenuTypes } from "./MenuLinks";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
type NavLinkProps = {
  name: string;
  url: MenuTypes;
  isRight?: boolean;
};

const NavLink: FC<NavLinkProps> = ({ name, url, isRight }: NavLinkProps) => {
  const router = useLocation();
  const isCurrent = router.pathname === url;

  return (
    <Link as={RouterLink} to={url} _hover={{ textDecoration: "none" }}>
      <Text
        fontSize="3xl"
        display="block"
        textDecoration={isCurrent ? "underline" : "none"}
        textDecorationColor="black"
        textUnderlineOffset="0.2em"
        color="black"
      >
        {name}
      </Text>
    </Link>
  );
};

export default NavLink;
