import Hamburger from "@src/asset/icons/hamburger";
import Login from "@src/asset/icons/login";
import Logo from "@src/asset/icons/logo";

import React from "react";
import styled from "styled-components";

export default function Navigator() {
  return (
    <Wrapper>
      <Hamburger />
      <Logo />
      <Login />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  padding-left: 2.2rem;
  padding-right: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 2.1rem;
`;
