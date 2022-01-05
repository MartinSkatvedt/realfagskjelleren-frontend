import React, { FC } from "react";
import { Box, Link, Image } from "@chakra-ui/react";

const NavLogo: FC = () => {
  return (
    <Box ml="2%" w="5%">
      <Link href="/">
        <Image
          alt="Home screen logo"
          src="https://realfagskjelleren-spaces.fra1.digitaloceanspaces.com/media/images/pidame.png"
        />
      </Link>
    </Box>
  );
};

export default NavLogo;
