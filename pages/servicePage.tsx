import Navigator from "@src/components/organism/mainPage/navigator";

import React, { useState } from "react";
import styled from "styled-components";

export default function ServicePage() {

  return (
    <Wrapper>
      <Navigator />
      <MainBoardImage src="/ServiceMainboard.png" alt="메인 전광판" />
      <SubWrapper>
        <Slogan src="/ServiceSlogan.png" alt="slogan" />
        <Space />
        <Header>
          글로벗은 한국인과 외국인이 <Strong>관심 분야를 중심</Strong>
          으로 모여 Global Buddy가 되도록 돕는 교류 플랫폼입니다.{" "}
        </Header>
        <CrossBar src="/crossbar.png" alt="크로스 바 "></CrossBar>
        <Title style={{ marginTop: "4.2rem" }}>글로벗을 처음 접하는</Title>
        <Title>여러분을 위한 가이드.</Title>
      </SubWrapper>
      <Friends src="/ServiceFriends.png" alt="외국인 친구들 " />
      <SubWrapper>
        <HeaderWrapper>
          <Blue></Blue>
          <Header2>소규모 크루로 친밀하게</Header2>
        </HeaderWrapper>
        <Content style={{ marginTop: "2.8rem" }}>
          크루 리스트에서 자신의 관심사에 맞는 크루를 선택해요. 지금 글로벗에는
          테스팅을 위해 <b>언어/대화</b>와 <b>액티비티</b> 카테고리가 준비되어
          있어요.
        </Content>
        <Background1 src="/how_1.png" alt="백그라운드이미지1" />
        <Friends2 src="/ServiceFriends2.png" alt="외국인 친구들2" />
      </SubWrapper>
      <SubWrapper>
        <HeaderWrapper>
          <Blue></Blue>
          <Header2>리더가 이끌어가요</Header2>
        </HeaderWrapper>
        <Content
          style={{
            height: "4.8rem",
            marginTop: "2.3rem",
            marginBottom: "2.5rem",
          }}
        >
          <b>각 크루를 이끄는 리더</b>가 여러분의 크루 활동을 도와드릴게요. 크루
          활동 주제부터 준비물 준비까지, 리더에게 맡겨만 주세요!
        </Content>
        <Background1
          src="/how_2.png"
          alt="백그라운드이미지2"
          style={{ marginBottom: "6.3rem" }}
        />
      </SubWrapper>
    </Wrapper>
  );
}

const Background1 = styled.img`
  width: 31.6rem;
  height: 18.8rem;
  object-fit: contain;
`;

const Content = styled.p`
  width: 31.5rem;
  height: 8.4rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #222426;
`;

const Header2 = styled.div`
  width: 23.3rem;
  height: 2.3rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.048rem;
  color: #222426;

  margin-right:10rem
  position: relative;
  z-index: 1;
`;

const Blue = styled.div`
  width: 4.3rem;
  height: 0.5rem;
  background-color: #3c7dfa;
  margin-top: 1.7rem;
  position: absolute;
`;

const HeaderWrapper = styled.div`
  display: flex;
  text-align: left;
  width: 31.5rem;
  height: 2.3rem;
`;

const Friends2 = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: contain;

  padding-left: 7.3rem;
  margin-top: 8rem;
  margin-bottom: 2.5rem;
`;

const Friends = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: contain;
  margin-top: 4.1rem;
  padding-right: 7rem;
  margin-bottom: 2.1rem;
`;

const Title = styled.h3`
  width: 31.6rem;
  height: 2.3rem;

  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.06rem;
  color: #222426;
`;

const CrossBar = styled.img`
  width: 100%;
  height: 0.6rem;
  object-fit: contain;
  margin-top: 4.6rem;
`;

const Space = styled.div`
  margin-top: 2.09rem;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const Header = styled.h1`
  width: 31.7rem;
  height: 4.2rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #555961;

  text-align: center;
`;

const Slogan = styled.img`
  width: 9.88rem;
  height: 4.01rem;
  object-fit: contain;
  margin-top: 4.8rem;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: space-between;
  align-items: center;
`;

const MainBoardImage = styled.img`
  width: 100%;
  height: 24rem;
  object-fit: contain;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
