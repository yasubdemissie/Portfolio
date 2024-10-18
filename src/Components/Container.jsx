import { Outlet, useLocation } from "react-router-dom";
import Button from "../Ui/Button";
import styled from "styled-components";
import NavElement from "./NavElement";
import { useProvider } from "../Hooks/useProvider";
import { HiMoon, HiSun } from "react-icons/hi2";
import { ToastContainer } from "react-toast";

const StyledContainer = styled.div`
  display: grid;
  grid-template: 100dvh / auto 100px;
  overflow: auto;
`;
// ${(props) =>
// props.path === "/about" || props.path === "/portfolio" ? "auto" : "hidden"};

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 2em;
`;

function Container() {
  const { theme } = useProvider();
  const location = useLocation();

  return (
    <StyledContainer path={location.pathname}>
      <Outlet />
      <StyledNavbar>
        <Button>{theme === "dark-theme" ? <HiMoon /> : <HiSun />}</Button>
        <NavElement />
      </StyledNavbar>
      <ToastContainer position="top-right" autoClose={3} theme="light" />
    </StyledContainer>
  );
}

export default Container;
