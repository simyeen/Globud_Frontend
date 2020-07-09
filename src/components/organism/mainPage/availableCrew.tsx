import React from "react";
import styled from "styled-components";

export default function AvailableCrewList() {
  return (
    <Wrapper>
      <CrewImage />
      <CrewHeader>영어로 진행되는 흥미진진 토론 현장에 초대합니다.</CrewHeader>
      <CrewTitle>우리끼리 방구석 비정상회담</CrewTitle>
      <CrewImformationWrapper>
        <CrewFee>40,000원 (4회)</CrewFee>
        <Dot></Dot>
        <CrewPlace>서울시 마포구</CrewPlace>
      </CrewImformationWrapper>
    </Wrapper>
  );
}

const CrewPlace = styled.p`
  width: 8rem;
  height: 1.1rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #7e8289;
  margin-left: 1rem;
`;

const Dot = styled.p`
  padding: 0px;
  font-size: 50px;
  color: #c5cace;
`;

const CrewFee = styled.p`
  width: 8.5rem;
  height: 1.1rem;
  font-size: 1.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #3f66f1;
  margin-right: 1rem;
`;

const CrewImformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
`;

const CrewTitle = styled.h4`
  width: 26.4rem;
  height: 2.3rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.048rem;
  color: #000000;
`;

const CrewHeader = styled.p`
  width: 26.4rem;
  height: 1.9rem;
  font-size: 1.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: -0.033rem;
  color: #8b919b;
`;

const CrewImage = styled.div`
  width: 31.6rem;
  height: 14.4rem;
  border-radius: 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
