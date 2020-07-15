import Navigator from "@src/components/organism/mainPage/navigator";
import ApplyButton from "@src/components/molecule/applyButton";

import DetailMainboard from "@src/components/organism/detailPage/detailMainboard";
import DetailCrew from "@src/components/organism/detailPage/detailCrew";
import DetailLeader from "@src/components/organism/detailPage/detailLeader";
import DetailCurriculum from "@src/components/organism/detailPage/detailCurriculum";
import WeeksList from "@src/components/organism/detailPage/WeeksList";
import DetailWorning from "@src/components/organism/detailPage/detailWorning";

import React, { useState } from "react";
import styled from "styled-components";

export default function DetailPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Navigator onMenuOpen={setMenuOpen} />
      <DetailMainboard />
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
      <ApplyButton></ApplyButton>
      <a id="Crew">
        <DetailCrew />
      </a>
      <a id="Leader">
        <DetailLeader />
      </a>
      <a id="Curriculum">
        <DetailCurriculum />
      </a>
      <WeeksList />
      <CrossBar src="/crossbar.png" alt="크로스 바 "></CrossBar>
      <a id="Warning">
        <DetailWorning />
      </a>
    </Wrapper>
  );
}

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
