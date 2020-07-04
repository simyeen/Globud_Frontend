import Navigator from "@src/components/organism/navigator";
import AvailableCrewList from "@src/components/organism/navigator";

import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Navigator />
      <MainBoardImage src="/mainboard.jpg" alt="메인 전광판" />
      <PostCardWrapper>
        <PostCardHeader>모집중인 크루</PostCardHeader>
      </PostCardWrapper>
    </Wrapper>
  );
}

const PostCardHeader = styled.h1`
  float: left;
  width: 31.6rem;
  height: 1.8rem;
  font-family: NotoSansCJKKR;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.6px;
  color: #222426;
`;

const PostCardWrapper = styled.div`
  dlsplay: flex;
  flex - direction: column;
  width : 87.8%;
  margin-top : 3.5rem;
  align-content:space-between;
`;

const MainBoardImage = styled.img`
  width: 100%;
  height: 24rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Space = styled.div`
  width: 3.6rem;
  height: 3.6rem;
`;
