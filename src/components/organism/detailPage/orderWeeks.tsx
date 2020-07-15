import WeeksText from "@src/components/molecule/weeksText";

import React from "react";
import styled from "styled-components";

export default function OrderWeeksText({ curriculums }) {
  return (
    <Wrapper>
      <Image src="/ServiceFriends.png" alt="주의사항 1" />
      <WeeksText {...{ curriculums }} />
    </Wrapper>
  );
}

const Image = styled.img`
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
