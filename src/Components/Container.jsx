import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toast";
import Logo from "./Logo";
import NavBar from "./NavBar";

const StyledContainer = styled.div`
  display: grid;
  grid-template: 100dvh / auto minmax(10%, 100px);
  overflow-y: scroll;
`;

function Container() {
  return (
    <StyledContainer>
      <Logo />
      <Outlet />
      <NavBar />
      <ToastContainer position="top-right" autoClose={3} theme="light" />
    </StyledContainer>
  );
}

export default Container;
