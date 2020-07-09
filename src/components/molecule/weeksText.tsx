import React from "react";
import styled from "styled-components";

export default function WeeksText() {
  return (
    <Wrapper>
      <Header>
        <Blue>1주차,</Blue>
        이름 쌓기로 자기소개 하기!
      </Header>
      <Content>
        첫 주의 대화주제는 아이스 브레이킹! 이름 쌓기 게임을 아시나요? 소리내어
        서로의 이름을 기억해보면서, 스몰 토킹을 이어나가보세요!
      </Content>
    </Wrapper>
  );
}

const Blue = styled.strong`
  color: #3f66f1;
`;

const Content = styled.p`
  width: 24.9rem;
  height: 7rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #555961;

  margin-left: 6.7rem;
`;

const Header = styled.p`
  width: 23rem;
  height: 2.1rem;
  font-size: 1.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #222426;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding-left: 2.2rem;
  padding-right: 2.2rem;
  margin-bottom: 5.1rem;
`;
