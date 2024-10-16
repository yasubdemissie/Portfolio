import { Outlet } from "react-router-dom";
import Button from "../Ui/other/Button";
import styled from "styled-components";
import NavElement from "./NavElement";
import { useProvider } from "../Hooks/useProvider";
import { HiMoon, HiSun } from "react-icons/hi2";
import { ToastContainer } from "react-toast";

const StyledContainer = styled.div`
  display: grid;
  grid-template: 100dvh / auto 100px;
`;

function Container() {
  const { theme } = useProvider();

  return (
    <StyledContainer>
      <Outlet />
      <div>
        <Button>{theme === "dark-theme" ? <HiMoon /> : <HiSun />}</Button>
        <NavElement />
      </div>
      <ToastContainer position="top-right" autoClose={3} theme="light" />
    </StyledContainer>
  );
}

export default Container;
