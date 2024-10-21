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
  const [isOpen, setIsOpen] = useState(true);
  const { theme } = useProvider();

  return (
    <StyledNavbar>
      <Hamburger isOpen={isOpen} onOpen={setIsOpen} />
      <div
        className={` transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none ${
          isOpen ? " h-[70%] lg:h-dvh opacity-100 " : "h-0 opacity-0"
        } grid space-y-2 lg:block `}
      >
        <Button>{theme === "dark-theme" ? <HiMoon /> : <HiSun />}</Button>
        <NavElement isOpen={isOpen} />
      </div>
    </StyledNavbar>
  );
}

export default NavBar;
