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
import { useDetailActivities } from "@src/components/hooks/detailPageData/detailActivityList/Crew1";

import React, { useState } from "react";
import styled from "styled-components";

export default function DetailPage1() {
  const { detailMainboard, loading, error, fetchData } = useDetailMainboard();
  const { detailLeader } = useDetailLeader();
  const { detailActivities } = useDetailActivities();

  var crew = 1;

  console.log("detailMainboardData testing : ", detailMainboard);
  console.log("detailLeader testing : ", detailLeader);
  console.log("detailActivities testing : ", detailActivities);

  const peopleDescprition = [
    {
      id: 1,
      description: "🙌 영어는 잘 못해도 누구보다 자신감은 뿜뿜한 사람!",
    },
    { id: 2, description: "😨 영어 공포증, 이제는 고쳐보고 싶은 사람!" },
    { id: 3, description: "🤔 다른 나라의 문화는 어떨까? 호기심 가득한 사람!" },
  ];

  const placeDescprition = [
    { id: 1, description: "2020년 8월 매주 토요일 15:00 - 17:00" },
    { id: 2, description: "마포구 창천동 탐앤탐스 신촌로터리점 소회의실" },
    { id: 3, description: "109, Sinchon-ro, Seodaemun-gu, Seoul" },
  ];

  const weeksDescprition = [
    {
      id: 1,
      description1: "1. 정해진 시간에 신촌 탐앤탐스 소회의실에서 만나요.",
      description2: "시간을 꼭 지켜 방문해주세요.",
    },
    {
      id: 2,
      description1: "2. 리더가 오늘의 주제를 소개해 줄거에요.",
      description2: "매주 흥미 진진한 토론 주제가 기다리고 있어요!",
    },
    {
      id: 3,
      description1: "3. 한 명당 3-5분의 시간이 주어져요.",
      description2: "각자 생각해온/생각나는 의견을 영어로 편하게 말해보아요. ",
    },
    {
      id: 4,
      description1: "4. 각자 생각해온 의견을 주고 받으며 토론해요. ",
      description2: "4주간 함께 다양한 이야기를 나누다 보면 이미 우리는 짱친!",
    },
  ];

  return (
    <Wrapper>
      <Navigator />
      <DetailMainboard {...detailMainboard[0]} />
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
        <DetailCrew {...detailMainboard[0]} />
      </a>
      <a id="Leader">
        <DetailLeader {...detailLeader[0]} />
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

  width: 100%;
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

/* */
