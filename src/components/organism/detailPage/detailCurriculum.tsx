import React from "react";
import styled from "styled-components";

export default function DetailCurriculum() {
  return (
    <Wrapper>
      <SubWrapper>
        <CurriculumWrapper>
          <Header>커리큘럼을 소개합니다.</Header>
          <Title>일정에 따라 약간의 변동이 있을 수 있어요.</Title>
          <Recommend>
            이런 사람에게 <strong style={{ color: "#3f66f1" }}>추천</strong>
            해요.
          </Recommend>
          <Space></Space>
          <PeopleText>
            🙌 영어는 잘 못해도 누구보다 자신감은 뿜뿜한 사람!
          </PeopleText>
          <PeopleText>😨 외국인 공포증, 이제는 고쳐보고 싶은 사람!</PeopleText>
          <PeopleText>
            🤔 다른 나라의 문화는 어떨까? 호기심 가득한 사람!
          </PeopleText>
          <WhereText>어디서, 어떻게 하나요?</WhereText>
          <WhereImage />
        </CurriculumWrapper>
        <WeeksWrapper>
          <DotLine src="/dotLine.png" alt="점 라인" />
          <WeeksTextWrapper>
            <WeeksText>
              1. 정해진 시간에 신촌 탐앤탐스 소회의실에서 만나요.
            </WeeksText>
            <WeeksSubText>시간을 꼭 지켜 방문해주세요.</WeeksSubText>
            <WeeksText>2. 리더가 오늘의 주제를 소개해 줄거에요.</WeeksText>
            <WeeksSubText>
              매주 흥미 진진한 토론 주제가 기다리고 있어요!
            </WeeksSubText>
            <WeeksText>3. 한 명당 3-5분의 시간이 주어져요.</WeeksText>
            <WeeksSubText>
              각자 생각해온/생각나는 의견을 영어로 편하게 말해보아요.{" "}
            </WeeksSubText>
            <WeeksText>
              4. 각자 생각해온 의견을 주고 받으며 토론해요.{" "}
            </WeeksText>
            <WeeksSubText>
              4주간 함께 다양한 이야기를 나누다 보면 이미 우리는 짱친!
            </WeeksSubText>
          </WeeksTextWrapper>
        </WeeksWrapper>

        <DetailHeader>무엇을 하나요?</DetailHeader>
        <DetailExplain>
          글로벗의 언어/대화 크루는 4주간의 커리큘럼이 탄탄하게 짜여져 있어요.
          처음 만난 사람들과도{" "}
          <strong>즐겁게 영어로 대화를 나눌 수 있답니다!</strong>저희가 준비한
          커리큘럼, 확인해볼까요?
        </DetailExplain>
      </SubWrapper>
    </Wrapper>
  );
}

const DetailExplain = styled.p`
  width: 31.5rem;
  height: 6.4rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #222426;

  margin-top: 1.9rem;
  margin-bottom: 2rem;
`;

const DetailHeader = styled.p`
  width: 31.6rem;
  height: 2.3rem;

  font-size: 1.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.048rem;
  color: #222426;

  margin-top: 4.7rem;
`;

const WeeksSubText = styled.p`
  width: 21rem;
  height: 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.027rem;
  color: #8b919b;

  margin-top: 0.1rem;
  margin-bottom: 1.5rem;
`;

const WeeksText = styled.p`
  width: 27.4rem;
  height: 2.1rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #000000;

  margin-bottom: 0;
`;

const WeeksTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const DotLine = styled.img`
  width: 0.5rem;
  height: 16.3rem;
  object-fit: contain;
  margin-left: 1.6rem;
  margin-right: 1.5rem;
  margin-top: 1rem;
`;

const WeeksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Space = styled.div`
  margin-top: 1.5rem;
`;

const WhereImage = styled.img`
  width: 31.6rem;
  height: 9.8rem;
  object-fit: contain;
  margin-top: 1.7rem;
  margin-bottom: 3.1rem;
`;

const WhereText = styled.p`
  width: 31.6rem;
  height: 2.3rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.048rem;
  color: var(--black-500);
  margin-top: 5.6rem;
`;

const PeopleText = styled.p`
  width: 28.6rem;
  height: 2.2rem;
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #222426;
  margin-bottom: 0.4rem;
`;

const Recommend = styled.p`
  width: 31.6rem;
  height: 2.3rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.048rem;
  color: var(--black-500);

  margin-top: 3.8rem;
`;

const Title = styled.p`
  width: 31.5rem;
  height: 2.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.056rem;
  color: #8b919b;

  margin-top: 0.4rem;
`;

const Header = styled.h3`
  width: 31.4rem;
  height: 2.9rem;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.06rem;
  color: #222426;

  margin-top: 1.5rem;
`;

const CurriculumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  padding: 2.2rem 2.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
