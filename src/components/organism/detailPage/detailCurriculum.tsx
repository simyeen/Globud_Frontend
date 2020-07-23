import React from "react";
import styled from "styled-components";

export default function DetailCurriculum(props) {
  const { peopleDescprition, placeDescprition, weeksDescprition } = props;
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
          {peopleDescprition.map((people) => {
            return (
              <PeopleText key={people.id}>{people.description}</PeopleText>
            );
          })}
          <WhereText>어디서, 어떻게 하나요?</WhereText>
          <Box>
            <BoxContent>
              <BoxImage src="/curriculumTime.png" alt="커리큘럼 시간" />
              <BoxText>{placeDescprition[0].description}</BoxText>
            </BoxContent>
            <BoxContent>
              <BoxImage src="/curriculumPlace.png" alt="커리큘럼 장소" />
              <BoxSubContent>
                <BoxText>{placeDescprition[1].description}</BoxText>
                <BoxText style={{ fontSize: "1.1rem" }}>
                  {placeDescprition[2].description}
                </BoxText>
              </BoxSubContent>
            </BoxContent>
          </Box>
        </CurriculumWrapper>
        <WeeksWrapper>
          <DotLine src="/dotLine.png" alt="점 라인" />
          <WeeksTextWrapper>
            {weeksDescprition.map((weeks) => {
              return (
                <div>
                  <WeeksText>{weeks.description1} </WeeksText>
                  <WeeksSubText> {weeks.description2} </WeeksSubText>
                </div>
              );
            })}
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
  width: 100%;
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
  width: 100%;
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
  width: 100%;
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
  width: 100%;
  height: 2.1rem;
  font-size: 1.25rem;
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

const BoxImage = styled.img`
  width: 2.4rem;
  height: 2.5rem;
  object-fit: contain;
`;

const BoxText = styled.p`
  width: 100%;
  height: 2.1rem;
  font-size: 1.3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #555961;

  margin-bottom: 0;
`;

const BoxSubContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 9.8rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.01rem 0.3rem 0 #c5cace;
  border: solid 0.1rem #e1e4e7;
  background-color: #f6f6f6;

  text-align: left;

  padding: 1.4rem 1.2rem 1.5rem 1rem;
  margin-top: 1.7rem;
  margin-bottom: 3.1rem;
`;

const WhereText = styled.p`
  width: 100%;
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
  width: 100%;
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
  width: 100%;
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
  width: 100%;
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
  width: 100%;
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
