import React from "react";
import styled from "styled-components";

export default function QnaOpen() {
  return (
    <Wrapper>
      <Text>
        글로벗은 한국인과 외국인이 관심 분야를 중심으로 지속 가능한 관계를 맺을
        수 있도록 시사토론, 문화체험, 관광, 액티비티 등 다양한 활동을 제공하는
        교류 플랫폼입니다. 현재 글로벗은 액티비티, 언어/대화 두 가지의 크루가
        구성되어 있습니다.
      </Text>
    </Wrapper>
  );
}

const Text = styled.p`
  width: 30.3rem;
  height: 11.1rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: -0.02rem;
  color: #464a51;
`;

const Wrapper = styled.div`
  width: 36rem;
  height: 15.4rem;
  background-color: #f6f6f6;
  padding-top: 2rem;
  padding-bottom: 2.3rem;
  padding-left: 2.9rem;
  padding-right: 2.8rem;
`;
