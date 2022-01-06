import React, { FC } from "react";
import { Button } from "@chakra-ui/react";
type NavButtonProps = {
  name: string;
  func: Function;
};

const NavButton: FC<NavButtonProps> = ({ name, func }: NavButtonProps) => {
  return (
    <Button color="black" size="lg" onClick={() => func()}>
      {name}
    </Button>
  );
};

export default NavButton;
