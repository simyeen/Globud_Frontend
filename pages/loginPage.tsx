import Navigator from "@src/components/organism/mainPage/navigator";

import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Navigator />
      <SubWrapper>
        <Space />
        <Header>간편하게 로그인하고, </Header>
        <Header>나의 크루 활동을 관리해보세요.</Header>
        <Space />
        <KakaoLogin src="/kakaoLogin.png" alt="카카오 로그인" />
      </SubWrapper>
      <BackGroup src="/backGroupImage.png" alt="배경 사진" />
    </Wrapper>
  );
}

const KakaoLogin = styled.img`
  width: 31.6rem;
  height: 5rem;
  object-fit: contain;
`;

const BackGroup = styled.img`
  width: 36rem;
  height: 24rem;
  object-fit: contain;
`;

const Space = styled.div`
  margin-top: 10rem;
`;

const Header = styled.p`
  width: 31.6rem;
  height: 2rem;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.06rem;
  color: #222426;

  text-align: center;
`;

const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 2.2rem;
  padding-right: 2.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
