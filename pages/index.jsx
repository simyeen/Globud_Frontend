import Navigator from "@src/components/organism/mainPage/navigator";
import AvailableCrewList from "@src/components/organism/mainPage/availableCrew";

import testData from "C:/workspace/CEOS/GLOBUD/response_1593942476424.json";

import Link from "next/link";
import React from "react";
import styled from "styled-components";

const newTestData = testData.map((item, index) => {
  return <strong key={index}> {item.name} </strong>;
});

export default function Home() {
  return (
    <Wrapper>
      <Navigator />
      <Link href="/detailPage">
        <MainBoardImage src="/mainboard.png" alt="메인 전광판" />
      </Link>
      <PostCardWrapper>
        {newTestData}(fecthTestData)
        <PostCardHeader>모집중인 크루</PostCardHeader>
        <AvailableCrewList />
        <AvailableCrewList />
      </PostCardWrapper>
    </Wrapper>
  );
}

const PostCardHeader = styled.h1`
  float: left;
  width: 31.6rem;
  height: 1.8rem;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.06rem;
  color: #222426;
`;

const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.8%;
  margin-top: 3.5rem;
  margin-bottom: 5.1rem;
  align-content: space-between;
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
