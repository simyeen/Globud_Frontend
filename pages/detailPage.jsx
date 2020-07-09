import Navigator from "@src/components/organism/mainPage/navigator";
import ApplyButton from "@src/components/molecule/applyButton";

import DetailMainBoard from "@src/components/organism/detailPage/detailMainBoard";
import DetailCrew from "@src/components/organism/detailPage/detailCrew";
import DetailLeader from "@src/components/organism/detailPage/detailLeader";
import DetailCurriculum from "@src/components/organism/detailPage/detailCurriculum";
import OddWeeks from "@src/components/organism/detailPage/oddWeeks";
import OrderWeeks from "@src/components/organism/detailPage/orderWeeks";
import DetailWorning from "@src/components/organism/detailPage/detailWorning";

import React from "react";
import styled from "styled-components";

export default function DetailPage() {
  console.log("testData: ", typeof testData);

  /*const curriculums = [
    {
      id: 1,
      strongWord: "1주차",
      title: "1주차, 이름 쌓기로 자기소개 하기!",
      content:
        "첫 주의 대화주제는 아이스 브레이킹! 이름 쌓기 게임을 아시나요? 소리내어 서로의 이름을 기억해보면서,  스몰 토킹을 이어나가보세요!",
    },
  ];*/

  return (
    <Wrapper>
      <Navigator />
      <DetailMainBoard />
      <ApplyButton style={{}}></ApplyButton>
      <DetailCrew />
      <DetailLeader />
      <DetailCurriculum />
      <OddWeeks></OddWeeks>
      <OrderWeeks></OrderWeeks>
      <OddWeeks></OddWeeks>
      <OrderWeeks></OrderWeeks>
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
