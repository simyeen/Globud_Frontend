import Navigator from "@src/components/organism/mainPage/navigator";
import ApplyMainboard from "@src/components/organism/applyPage/applyMainboard";
import ApplyForm from "@src/components/organism/applyPage/applyForm";
import ApplyCompleteBotton from "@src/components/molecule/applyCompleteBotton";

import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Navigator />
      <ApplyMainboard></ApplyMainboard>
      <CrossBar src="/crossbar.png" alt="크로스 바 "></CrossBar>
      <ApplyForm></ApplyForm>
      <ApplyCompleteBotton></ApplyCompleteBotton>
    </Wrapper>
  );
}

const CrossBar = styled.img`
  width: 100%;
  height: 0.6rem;
  object-fit: contain;
  margin-top: 1.8rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
