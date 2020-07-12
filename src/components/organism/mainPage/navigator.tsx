import Hamburger from "@src/asset/icons/hamburger";
import Login from "@src/asset/icons/login";
import Logo from "@src/asset/icons/logo";

import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";

import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";

export default function Navigator() {
  const [isToggle, setToggle] = useState(false);

  const handleDrawerToggle = () => {
    setToggle(!isToggle);
  };

  const closeDrawer = () => {
    if (isToggle === true) {
      setToggle(false);
    }
  };

  return (
    <Wrapper onClick={closeDrawer}>
      <HomePage onClick={handleDrawerToggle}>
        <Hamburger />
      </HomePage>
      <Link href="/index">
        <HomePage>
          <Logo />
        </HomePage>
      </Link>
      <Login />
      <Drawer open={isToggle}>
        <MenuItem onClick={handleDrawerToggle}>X</MenuItem>
        <Link href="/loginPage">
          <MenuItem onClick={handleDrawerToggle}>로그인</MenuItem>
        </Link>
        <Link href="servicePage">
          <MenuItem onClick={handleDrawerToggle}>글로벗 소개</MenuItem>
        </Link>
        <Link href="clientCenterPage">
          <MenuItem onClick={handleDrawerToggle}>자주 묻는 질문</MenuItem>
        </Link>
      </Drawer>
    </Wrapper>
  );
}

const HomePage = styled.div``;

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
