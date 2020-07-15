import Navigator from "@src/components/organism/mainPage/navigator";
import AvailableCrewList from "@src/components/organism/mainPage/availableCrew";

import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const availableDatas = [
    {
      id: 1,
      header: "영어로 진행되는 흥미진진 토론 현장에 초대합니다!",
      title: "우리끼리 방구석 비정상회담",
      fee: "40,000 원 (4회)",
      place: "서울시 마포구",
    },
    {
      id: 2,
      header: "전세계 대표 음식, 만들어 먹어요!",
      title: "다같이 만드는 세계 요리",
      fee: "35,000 원 (1회)",
      place: "서울시 성동구",
    },
  ];

  return (
    <Wrapper>
      <Navigator onMenuOpen={setMenuOpen} />
      <SubWrapper>
        <Link href="/servicePage">
          <MainBoardImage src="/mainboard.png" alt="메인 전광판" />
        </Link>
        <PostCardWrapper>
          <PostCardHeader>모집중인 크루</PostCardHeader>
          {availableDatas.map((availableData) => (
            <AvailableCrewList key={availableData.id} {...{ availableData }} />
          ))}
        </PostCardWrapper>
      </SubWrapper>
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

const SubWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
