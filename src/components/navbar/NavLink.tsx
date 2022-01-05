import React, { FC } from "react";
import { Text, Link, Button } from "@chakra-ui/react";
import { MenuTypes } from "./MenuLinks";

type NavLinkProps = {
  name: string;
  url: MenuTypes;
  isRight?: boolean;
};

const NavLink: FC<NavLinkProps> = ({ name, url, isRight }: NavLinkProps) => {
  //const router = useRouter();
  //const currentTab = router.pathname.slice(1);
  let isCurrent = false;

  //if (currentTab == url) isCurrent = true;
  //else isCurrent = false;
  if (isRight)
    return (
      <Button _hover={{ color: "rfk.orange" }} bg="black" p={5} fontSize="xl">
        {name}
      </Button>
    );
  else
    return (
      <Link href={url}>
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
