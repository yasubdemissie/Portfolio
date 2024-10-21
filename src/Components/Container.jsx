import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { Toaster } from "react-hot-toast";

const StyledContainer = styled.div`
  display: grid;
  grid-template: 100dvh / auto minmax(10%, 100px);
  margin-block: auto;
  overflow-x: hidden;
  overflow-y: scroll;
`;

function Container() {
  return (
    <StyledContainer>
      <Logo />
      <Outlet />
      <NavBar />
      <Toaster position="top right"/>
    </StyledContainer>
  );
}

export default Container;
