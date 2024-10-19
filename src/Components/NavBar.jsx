import { useState } from "react";
import styled from "styled-components";
import Hamburger from "../Ui/Hamburger";
import Button from "../Ui/Button";
import NavElement from "../Ui/NavElement";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useProvider } from "../Hooks/useProvider";

const StyledNavbar = styled.nav`
  position: absolute;
  display: inline-block;
  z-index: 100;
  top: 10px;
  bottom: 0;
  right: 2em;
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState();
  const { theme } = useProvider();

  return (
    <StyledNavbar>
      <Hamburger isOpen={isOpen} onOpen={setIsOpen} />
      {isOpen ? (
        <div
          className={`${
            isOpen ? " block " : "hidden"
          } transition-all grid space-y-24 lg:block `}
        >
          <Button>{theme === "dark-theme" ? <HiMoon /> : <HiSun />}</Button>
          <NavElement />
        </div>
      ) : null}
    </StyledNavbar>
  );
}

export default NavBar;
