import React from "react";
import styled from "styled-components";

export default function DetailMainBoard(props) {
  const {
    img2,
    name,
    subName2,
    originalSellPrice,
    sellPrice,
    location,
    numActivities,
  } = props;
  return (
    <Wrapper>
      <CrewImage src={img2} alt="테스트 이미지" />
      <SubWrapper>
        <CrewHeader>{subName2}</CrewHeader>
        <CrewTitle>{name}</CrewTitle>
        <CrewImformationWrapper>
          <CrewEvent>오픈특가</CrewEvent>
          <CrewFee>{sellPrice}</CrewFee>
        </CrewImformationWrapper>
        <CrewImformationWrapper>
          <DotSpace>
            <GrayText style={{ width: "8.0rem" }}>{location}</GrayText>
            <Dot src="/dot.png" alt="점" />
            <GrayText style={{ width: "2.0rem" }}>{numActivities}회</GrayText>
            <Dot src="/dot.png" alt="점" />
          </DotSpace>
          <GrayText style={{ width: "3.2rem" }}>2시간</GrayText>
        </CrewImformationWrapper>
      </SubWrapper>
      <CrossBar src="/crossbar.png" alt="크로스 바 "></CrossBar>
    </Wrapper>
  );
}

const CrossBar = styled.img`
  width: 100%;
  height: 0.6rem;
  object-fit: contain;
  margin-top: 0.9rem;
`;

const Dot = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const DotSpace = styled.div`
  display: flex;
  justify-content: center;
`;

const GrayText = styled.p`
  height: 2.1rem;

  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #7e8289;
`;

const CrewFee = styled.p`
  width: 9.9rem;
  height: 2.3rem;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.06rem;
  color: var(--black-500);
`;

const CrewEvent = styled.p`
  width: 8.4rem;
  height: 2.3rem;
  font-size: 2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.06rem;
  color: #3f66f1;
  margin-right: 0.2rem;
`;

const CrewImformationWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  width: 100%;
  text-align: right;

  margin-top: 1.6rem;
`;

const CrewTitle = styled.p`
  width: 31.6rem;
  height: 3.6rem;
  font-size: 2.5rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.075rem;
  color: #222426;
`;

// 영어로 이런 이야기까지? 이 부분에서
// 모바일로 전환하면 오른쪽 여백이 없어짐.
const CrewHeader = styled.p`
  width: 31.6rem;
  height: 2.3rem;
  font-size: 1.6rem;

  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.048rem;
  color: #8b919b;

  margin-top: 2.2rem;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: space-between;

  padding-right: 2.2rem;
  padding-left: 2.2rem;
`;

const CrewImage = styled.img`
  width: 100%;
  height: 19.9rem;
  object-fit: contain;

  padding-top: 0rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
