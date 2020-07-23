import Navigator from "@src/components/organism/mainPage/navigator";
import AvailableCrewList from "@src/components/organism/mainPage/availableCrew";
import { useAvailableList } from "@src/components/hooks/mainPageData/availableList";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

export default function MainPage() {
  const { availableList, loading, error, fetchData } = useAvailableList();
  console.log("api 테스트 : ", availableList);

  return (
    <Wrapper>
      <Navigator />
      <SubWrapper>
        <Link href="/servicePage">
          <MainBoardImage src="/mainboard.png" alt="메인 전광판" />
        </Link>
        <PostCardWrapper>
          <PostCardHeader>모집중인 크루</PostCardHeader>
          {availableList &&
            availableList.map((item) => {
              return <AvailableCrewList key={item.id} {...item} />;
            })}
        </PostCardWrapper>
      </SubWrapper>
    </Wrapper>
  );
}
export const MemorizedMainPage = React.memo(MainPage);

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
