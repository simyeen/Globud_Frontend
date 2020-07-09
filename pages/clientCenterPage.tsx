import Navigator from "@src/components/organism/mainPage/navigator";
import QnaClose from "@src/components/organism/clientCenterPage/qnaClose";
import QnaOpen from "@src/components/organism/clientCenterPage/qnaOpen";

import React from "react";
import styled from "styled-components";

export default function ClientCenterPage() {
  const headers = [
    "글로벗은 어떤 서비스인가요?",
    "글로벗 크루 참여 방법은 어떻게 되나요?",
    "글로벗 크루 참여 방법은 어떻게 되나요?",
    "크루를 신청하려는데, 어떻게 결제하나요?",
  ];

  return (
    <Wrapper>
      <Navigator />
      <Header>자주 하는 질문</Header>
      <QnaClose></QnaClose>
      <QnaOpen></QnaOpen>
      <QnaClose></QnaClose>
      <QnaOpen></QnaOpen>
      <QnaClose></QnaClose>
      <QnaOpen></QnaOpen>
      <QnaClose></QnaClose>
      <QnaOpen></QnaOpen>
      <Space />
    </Wrapper>
  );
}

const Header = styled.h1`
  width: 15.8rem;
  height: 2.3rem;
  font-family: NotoSansCJKKR;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.03rem;
  color: #000000;

  margin-top: 2.4rem;
  margin-bottom: 3.3rem;
  margin-left: 2.8rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const Space = styled.div`
  width: 100%;
  height: 6.4rem;
`;
