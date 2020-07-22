import Navigator from "@src/components/organism/mainPage/navigator";
import ApplyButton from "@src/components/molecule/applyButton";

import DetailMainboard from "@src/components/organism/detailPage/detailMainboard";
import DetailCrew from "@src/components/organism/detailPage/detailCrew";
import DetailLeader from "@src/components/organism/detailPage/detailLeader";
import DetailCurriculum from "@src/components/organism/detailPage/detailCurriculum";
import DetailWeeksList from "@src/components/organism/detailPage/detailWeeksList";
import DetailWorning from "@src/components/organism/detailPage/detailWorning";

import { useDetailMainboard } from "@src/components/hooks/detailPageData/detailMainboardData";
import { useDetailLeader } from "@src/components/hooks/detailPageData/detailLeaderData";
import { useDetailActivities } from "@src/components/hooks/detailPageData/detailActivityList/Crew2";

import React, { useState } from "react";
import styled from "styled-components";

export default function DetailPage1() {
  const { detailMainboard, loading, error, fetchData } = useDetailMainboard();
  const { detailLeader } = useDetailLeader();
  const { detailActivities } = useDetailActivities();

  var crew = 2;

  console.log("detailMainboardData testing : ", detailMainboard);
  console.log("detailLeader testing : ", detailLeader);
  console.log("detailActivities testing : ", detailActivities);

  const peopleDescprition = [
    { id: 1, description: "🍽 난, 요리왕 비룡이야! 요리는 자신있는 사람!" },
    { id: 2, description: "🙌 어디서나 랜덤을 즐기는 사람!" },
    {
      id: 3,
      description: "👋 말만 하는 건 싫어! 몸으로 부딪히며 친해지고픈 사람!",
    },
  ];

  const placeDescprition = [
    { id: 1, description: "2020년 7월 18일 토요일 17:00 - 20:00" },
    { id: 2, description: "성동구 행당동 행당빈방" },
    { id: 3, description: "24, Gosanja-ro 6-gil, Seongdong-gu, Seoul" },
  ];

  const weeksDescprition = [
    {
      id: 1,
      description1: "1. 정해진 시간에 행당빈방에서 만나요.",
      description2: "시간을 꼭 지켜 방문해주세요.",
    },
    {
      id: 2,
      description1: "2. 리더와 함께 요리 하나를 정하고 재료를 사옵니다.",
      description2:
        "재료를 구하러 가는 여정을 함께 하며 아이스 브레이킹은 자연스럽게.",
    },
    {
      id: 3,
      description1: "3. 외국인 친구와 짝을 이뤄 요리를 완성해요.",
      description2: "요리법을 따라 천천히, 만드는 동안 이미 친해져있을 거예요.",
    },
    {
      id: 4,
      description1: "4. 함께 식사하며 스몰톡을 나눠봐요.",
      description2: "재미있는 게임과 함께하면 재미가 두배!",
    },
  ];

  return (
    <Wrapper>
      <Navigator />
      <DetailMainboard {...detailMainboard[1]} />
      <DetailNavigator>
        <a href="#Crew">
          <Image src="/NavCrew.png" alt="크루 소개" />
        </a>
        <a href="#Leader">
          <Image src="/NavLeader.png" alt="리더 소개" />
        </a>
        <a href="#Curriculum">
          <Image src="/NavCurriculum.png" alt="커리큘럼" />
        </a>
        <a href="#Warning">
          <Image src="/NavWaring.png" alt="주의사항" />
        </a>
      </DetailNavigator>
      <MiniBar />
      <ApplyButton crew={crew} />
      <a id="Crew">
        <DetailCrew {...detailMainboard[1]} />
      </a>
      <a id="Leader">
        <DetailLeader {...detailLeader[1]} />
      </a>
      <a id="Curriculum">
        <DetailCurriculum
          {...{ peopleDescprition }}
          {...{ placeDescprition }}
          {...{ weeksDescprition }}
        />
      </a>
      <DetailWeeksList {...{ detailActivities }} />
      <CrossBar src="/crossbar.png" alt="크로스 바 "></CrossBar>
      <a id="Warning">
        <DetailWorning />
      </a>
    </Wrapper>
  );
}

const MiniBar = styled.div`
  width: 31.6rem;
  height: 0.1rem;
  background-color: #e1e4e7;
`;

const Image = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
`;

const DetailNavigator = styled.div`
  display: flex;
  justify-content: space-between;

  width: 36rem;
  height: 5rem;
  object-fit: contain;

  padding-left: 4.3rem;
  padding-right: 4.3rem;
`;

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
