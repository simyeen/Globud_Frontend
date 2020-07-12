import WeeksText from "@src/components/molecule/weeksText";

import React from "react";
import styled from "styled-components";

export default function OddWeeksText({ curriculums }) {
  //const { id, strongWord, title, content } = curriculums;

  return (
    <Wrapper>
      <Image src="/ServiceFriends.png" alt="테스트 이미지"></Image>
      <WeeksText {...{ curriculums }} />
    </Wrapper>
  );
}

// strongWord={strongWord} title={title} content={content}
const Image = styled.img`
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
