import React from "react";
import styled from "styled-components";

export default function ApplyMainboard() {
  return (
    <Wrapper>
      <HederWrapper>
        <Header>간단한 신청을 통해,</Header>
        <Header>당신의 크루를 만나보세요!</Header>
      </HederWrapper>
      <SubWrapper>
        <Image src="/applyMainboard.png" alt="신청폼 전광판" />
        <Header
          style={{
            height: "2.3rem",
            fontSize: "1.6rem",
            marginTop: "1.6rem",
          }}
        >
          우리끼리 방구석 비정상회담
        </Header>
        <GreyWrpper>
          <Grey>서울시 마포구</Grey>
          <Dot></Dot>
          <Grey style={{ width: "1.7rem" }}>4회</Grey>
          <Dot></Dot>
          <Grey style={{ width: "3rem" }}>2시간</Grey>
        </GreyWrpper>
        <TextWrapper>
          <Text>2020년 7월 매주 토요일 15:00 - 17:00</Text>
          <TextSubWrapper>
            <Text>신촌 탐앤탐스 신촌로터리점 소회의실</Text>
            <Header
              style={{
                width: "9.9rem",
                fontSize: "1.1rem",
                textAlign: "right",
                marginLeft: "1.5rem",
              }}
            >
              40,000원
            </Header>
          </TextSubWrapper>
        </TextWrapper>
      </SubWrapper>
    </Wrapper>
  );
}

const Dot = styled.p`
  padding: 1rem;
  color: #c5cace;
`;

const Text = styled.p`
  width: 20rem;
  height: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: -0.033rem;
  color: #555961;
`;

const TextSubWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;
`;

const Grey = styled.h4`
  width: 7rem;
  height: 1.9rem;
  font-size: 1.1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: -0.033rem;
  color: #8b919b;
`;

const GreyWrpper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
`;

const Image = styled.img`
  width: 31.4rem;
  height: 12rem;
  border-radius: 0.8rem;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  padding-top: 1.8rem;
  padding-bottom: 1.6rem;
  padding-left: 2.2rem;
  padding-right: 2.2rem;
`;

const Header = styled.p`
  width: 31.6rem;
  height: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.06rem;
  color: #000000;
`;

const HederWrapper = styled.div`
  width: 100%;
  height: 9.9rem;
  background-color: #ffc41f;
  padding-top: 2.6rem;
  padding-bottom: 1.6rem;
  padding-left: 2.2rem;
  padding-right: 2.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
