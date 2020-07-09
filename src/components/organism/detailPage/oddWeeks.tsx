import WeeksText from "@src/components/molecule/weeksText";

import React from "react";
import styled from "styled-components";

export default function OddWeeksText() {
  return (
    <Wrapper>
      <Image>홀수 사진</Image>
      <WeeksText></WeeksText>
    </Wrapper>
  );
}

const Image = styled.div`
  width: 29.7rem;
  height: 16rem;
  object-fit: contain;

  margin-left: 6.4rem;
  margin-bottom: 1.6rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
