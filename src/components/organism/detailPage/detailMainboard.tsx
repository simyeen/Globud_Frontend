import React from "react";
import styled from "styled-components";

export default function DetailMainBoard() {
  return (
    <Wrapper>
      <CrewImage />
      <SubWrapper>
        <CrewHeader>영어로 이런 이야기까지? 야 너두 할 수 있어!</CrewHeader>
        <CrewTitle>우리끼리 방구석 비정상회담</CrewTitle>
        <CrewImformationWrapper>
          <CrewEvent>오픈특가</CrewEvent>

          <CrewFee>40,000원</CrewFee>
        </CrewImformationWrapper>
        <CrewImformationWrapper>
          <GrayText style={{ width: "8.0rem" }}>서울시 마포구</GrayText>
          <DotSpace>
            <Dot src="/dot.png" alt="점" />
          </DotSpace>
          <GrayText style={{ width: "2.0rem" }}>4회</GrayText>
          <DotSpace>
            <Dot src="/dot.png" alt="점" />
          </DotSpace>
          <GrayText style={{ width: "3.2rem" }}>2시간</GrayText>
        </CrewImformationWrapper>
      </SubWrapper>
      <CrossBar src="/crossbar.png" alt="크로스 바 "></CrossBar>
      <DetailNavigator src="/detailNav.png" alt="상세소개 바"></DetailNavigator>
    </Wrapper>
  );
}

//나중에 사진 나누면 이 부분을 div로 바꿔주기.
const DetailNavigator = styled.img`
  width: 100%;
  height: 4.9rem;
  object-fit: contain;
  margin-bottom: 1.8rem;
`;

const CrossBar = styled.img`
  width: 100%;
  height: 0.6rem;
  object-fit: contain;
  margin-top: 0.9rem;
`;

const Dot = styled.img`
  width: 0.3rem;
  height: 0.3rem;
  object-fit: contain;
`;

const DotSpace = styled.div`
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  padding-top: 0.3rem;
`;

const GrayText = styled.p`
  height: 2.1rem;
  font-family: NotoSansCJKKR;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.52px;
  color: #7e8289;
`;

const CrewFee = styled.p`
  width: 8rem;
  height: 2.3rem;
  font-family: NotoSansCJKKR;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.6px;
  color: var(--black-500);
`;

const CrewEvent = styled.p`
  width: 8.4rem;
  height: 2.3rem;
  font-family: NotoSansCJKKR;
  font-size: 2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.6px;
  color: #3f66f1;
  margin-right: 0.2rem;
`;

const CrewImformationWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  width: 100%;
`;

const CrewTitle = styled.h4`
  width: 31.6rem;
  height: 3.6rem;
  font-family: NotoSansCJKKR;
  font-size: 2.3rem;
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
  font-family: NotoSansCJKKR;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.48px;
  color: #8b919b;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: space-between;  
  padding 2.2rem 2.2rem;
`;

const CrewImage = styled.div`
  width: 36rem;
  height: 19.9rem;
  object-fit: contain;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
