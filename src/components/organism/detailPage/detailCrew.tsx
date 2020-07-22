import React from "react";
import styled from "styled-components";

export default function DetailCrew(props) {
  const {
    img2,
    img3,
    description1,
    description2,
    numActivities,
    languages,
    totalForeignerMember,
    totalKoreanMember,
  } = props;
  return (
    <Wrapper>
      <SubWrapper>
        <Text>어떤 크루냐면요...</Text>
        <CrewImage src={img3} alt="테스트 이미지" />
        <CrewHeader>{description1}</CrewHeader>
        <CrewTitle>{description2}</CrewTitle>
        <MiniBar />
        <ImageWrapper>
          <Image src="/4weeksCalender.png" alt="4주차" />
          <DotSpace>
            <Dot src="/blueDot.png" alt="파란 점" />
          </DotSpace>
          <Image src="/englishBook.png" alt="영어활동" />
          <DotSpace>
            <Dot src="/blueDot.png" alt="파란 점" />
          </DotSpace>
          <Image src="/friends.png" alt="외국인 친구들" />
        </ImageWrapper>
        <TextWrapper>
          <BlueText style={{ width: "3.0rem" }}>{numActivities}회차</BlueText>
          <BlueText style={{ display: "inline-block", width: "4.8rem" }}>
            {languages} 사용
          </BlueText>
          <BlueText style={{ width: "4.8rem" }}>
            {totalForeignerMember + totalKoreanMember}명 제한
          </BlueText>
        </TextWrapper>
      </SubWrapper>
      <CrossBar src="/crossbar.png" alt="크로스바" />
    </Wrapper>
  );
}

const MiniBar = styled.div`
  width: 31.6rem;
  height: 0.1rem;
  background-color: #e1e4e7;
`;

const Dot = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`;

const DotSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.p`
  width: 31.6rem;
  height: 2.3rem;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.06rem;
  color: #222426;

  margin-top: 1.6rem;
  margin-bottom: 1.7rem;
`;
const BlueText = styled.p`
  height: 1.5rem;

  font-size: 0.9rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.027rem;
  color: #3f66f1;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.9rem;
  margin-bottom: 1.3rem;
  padding-left: 2.7rem;
  padding-right: 2.7rem;
  text-align: right;
`;

const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  object-fit: contain;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: space-between;
  width: 100%;
  margin-top: 3.6rem;
  padding-left: 2.9rem;
  padding-right: 2.9rem;
`;

// 이거 Spacing부분 이미지같은거로 필요할듯.
const Spacing = styled.div`
  width: 36rem;
  height: 2rem;
  background-color: #3f66f1;
`;

const CrossBar = styled.img`
  width: 100%;
  height: 0.6rem;
  object-fit: contain;
`;

const CrewTitle = styled.p`
  width: 31.4rem;
  height: 6.3rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #222426;
  margin-bottom: 3.7rem;
`;

const CrewHeader = styled.p`
  width: 31.4rem;
  height: 3.5rem;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.048rem;
  color: #3f66f1;

  margin-top: 2.2rem;
  margin-bottom: 0rem;
`;

const CrewImage = styled.img`
  width: 100%;
  height: 14.7rem;
  object-fit: contain;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: space-between;
  padding: 2.2rem 2.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
