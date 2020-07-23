import React from "react";
import styled from "styled-components";

export default function ApplyMainboard(props) {
  const { crewNumber, img1, name, sellPrice, location, numActivities } = props;
  console.log(crewNumber);
  return (
    <Wrapper>
      <HederWrapper>
        <Header>간단한 신청을 통해,</Header>
        <Header>당신의 크루를 만나보세요!</Header>
      </HederWrapper>
      <SubWrapper>
        {crewNumber === 1 ? (
          <Image src="/detail1_img4.png" alt="신청폼 전광판" />
        ) : (
          <Image src="/detail2_img4.png" alt="신청폼 전광판" />
        )}

        <Header
          style={{
            height: "2.3rem",
            fontSize: "1.6rem",
            marginTop: "1.6rem",
          }}
        >
          {name}
        </Header>
        <GreyWrpper>
          <Grey>{location}</Grey>
          <DotSpace style={{ marginLeft: "0" }}>
            <Dot src="/dot.png" alt="점" />
          </DotSpace>
          <Grey style={{ width: "1.7rem" }}>{numActivities}회</Grey>
          <DotSpace>
            <Dot src="/dot.png" alt="점" />
          </DotSpace>
          <Grey style={{ width: "3rem" }}>2시간</Grey>
        </GreyWrpper>
        <TextWrapper>
          {crewNumber === 1 ? (
            <Text>2020년 8월 매주 토요일 15:00 - 17:00</Text>
          ) : (
            <Text>2020년 8월 15일 토요일 17:00 - 20:00</Text>
          )}
          <TextSubWrapper>
            {crewNumber === 1 ? (
              <Text>신촌 탐앤탐스 신촌로터리점 소회의실</Text>
            ) : (
              <Text>성동구 행당동 행당빈방</Text>
            )}
            <Header
              style={{
                fontSize: "1.1rem",
                textAlign: "right",
                marginLeft: "1.5rem",
              }}
            >
              {sellPrice}
            </Header>
          </TextSubWrapper>
        </TextWrapper>
      </SubWrapper>
    </Wrapper>
  );
}

const DotSpace = styled.div``;

const Dot = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`;

const Text = styled.p`
  height: 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: -0.033rem;
  color: #555961;
`;

const TextSubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 1.4rem;
`;

const Grey = styled.p`
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
  width: 100%;
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
