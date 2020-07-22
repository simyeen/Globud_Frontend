import Hamburger from "@src/asset/icons/hamburger";
import Login from "@src/asset/icons/login";
import Logo from "@src/asset/icons/logo";

import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

export default function Navigator() {
  const [isToggle, setToggle] = useState(false);

  const handleDrawerToggle = () => {
    console.log("메뉴바 오픈");
    if (isToggle === false) {
      setToggle(true);
    } else if (isToggle === true) {
      setToggle(false);
    }
  };

  const closeDrawer = () => {
    if (isToggle === true) {
      setToggle(false);
    }
  };

  return (
    <Wrapper>
      {isToggle && (
        <MenuBar>
          <Menu>
            <Image src="/close.png" alt="닫기창" onClick={handleDrawerToggle} />
            <Link href="/servicePage">
              <Text onClick={handleDrawerToggle}>글로벗 소개</Text>
            </Link>
            <Link href="/clientCenterPage">
              <Text onClick={handleDrawerToggle}>자주 묻는 질문</Text>
            </Link>
          </Menu>
          <Rest>여백부분</Rest>
        </MenuBar>
      )}
      <SubWrapper onClick={closeDrawer}>
        <HomePage onClick={handleDrawerToggle}>
          <Hamburger />
        </HomePage>
        <Link href="/index">
          <HomePage>
            <Logo />
          </HomePage>
        </Link>
        <Login />
      </SubWrapper>
    </Wrapper>
  );
}

/* 카카오 로그인 만들며 넣기.
            <Link href="/loginPage">
              <Text onClick={handleDrawerToggle}>로그인</Text>
            </Link>*/
const Image = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  margin-bottom: 7.2rem;
`;

const Text = styled.p`
  width: 15.8rem;
  height: 2.3rem;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.048rem;
  color: #222426;
  margin-bottom: 3rem;
`;

const Rest = styled.div`
  width: 100%;

  right: 1;
  opacity: 0.5;
  background-color: #222426;
`;

const Menu = styled.div`
  width: 22rem;
  height: 64rem;

  padding-left: 2.2rem;
  padding-right: 4rem;
  padding-top: 3.3rem;

  background-color: #ffffff;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 36rem;
  height: 64rem;

  position: fixed;
`;

const HomePage = styled.div``;

const SubWrapper = styled.div`
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

const Wrapper = styled.div`
  width: 100%;
`;
