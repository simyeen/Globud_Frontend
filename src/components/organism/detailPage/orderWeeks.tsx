import WeeksText from "@src/components/molecule/weeksText";

import React from "react";
import styled from "styled-components";

export default function OrderWeeksText({ curriculums }) {
  //const { id, strongWord, title, content } = curriculums;

  return (
    <Wrapper>
      <Image>짝수 사진</Image>
      <WeeksText {...{ curriculums }} />
    </Wrapper>
  );
}

const Image = styled.div`
  width: 29.7rem;
  height: 16rem;
  object-fit: contain;

  margin-right: 6.4rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
