import Navigator from "@src/components/organism/mainPage/navigator";
import ApplyMainboard from "@src/components/organism/applyPage/applyMainboard";
import ApplyFinalButton from "@src/components/molecule/applyFinalButton";

import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Navigator />
      <ApplyMainboard></ApplyMainboard>
      <Space />
      <ApplyFinalButton></ApplyFinalButton>
    </Wrapper>
  );
}

const Space = styled.div`
  margin-top: 7rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
