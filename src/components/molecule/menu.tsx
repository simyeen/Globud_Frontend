import Hamburger from "@src/asset/icons/hamburger";
import Login from "@src/asset/icons/login";
import Logo from "@src/asset/icons/logo";

import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";

import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 5000,
    color: "red",
    height: 48,
  },
});

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

  const classes = useStyles();

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
      <Drawer
        open={isToggle}
        className={classes.root}
        style={{ width: "20rem" }}
      >
        <MenuItem onClick={handleDrawerToggle}>X</MenuItem>
        <MenuItem onClick={handleDrawerToggle}>로그인</MenuItem>
        <MenuItem onClick={handleDrawerToggle}>글로벗 소개</MenuItem>
      </Drawer>
    </Wrapper>
  );
}

const HomePage = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;
