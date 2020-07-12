import Navigator from "@src/components/organism/mainPage/navigator";
import ApplyButton from "@src/components/molecule/applyButton";

import DetailMainBoard from "@src/components/organism/detailPage/detailMainBoard";
import DetailCrew from "@src/components/organism/detailPage/detailCrew";
import DetailLeader from "@src/components/organism/detailPage/detailLeader";
import DetailCurriculum from "@src/components/organism/detailPage/detailCurriculum";
import WeeksList from "@src/components/organism/detailPage/WeeksList";
import DetailWorning from "@src/components/organism/detailPage/detailWorning";

import React from "react";
import styled from "styled-components";

export default function DetailPage() {
  console.log("testData: ", typeof testData);

  return (
    <Wrapper>
      <Navigator />
      <DetailMainBoard />
      <ApplyButton style={{}}></ApplyButton>
      <DetailCrew />
      <DetailLeader />
      <DetailCurriculum />
      <WeeksList />
      <CrossBar src="/crossbar.png" alt="크로스 바 "></CrossBar>
      <DetailWorning />
    </Wrapper>
  );
}

const CrossBar = styled.img`
  width: 100%;
  height: 0.6rem;
  object-fit: contain;
  margin-top: 0.9rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
