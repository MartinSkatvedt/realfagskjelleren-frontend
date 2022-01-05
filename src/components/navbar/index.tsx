import React, { FC } from "react";
import NavLogo from "./NavLogo";
import NavBarContainer from "./NavBarContainer";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";
const NavBar: FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <NavLogo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
