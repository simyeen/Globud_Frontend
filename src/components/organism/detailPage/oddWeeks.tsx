import WeeksText from "@src/components/molecule/weeksText";

import React from "react";
import styled from "styled-components";

export default function OddWeeksText({ curriculums }) {
  return (
    <Wrapper>
      <ImageBox>
        <Image src="/ServiceFriends.png" alt="테스트 이미지"></Image>
      </ImageBox>
      <WeeksText {...{ curriculums }} />
    </Wrapper>
  );
}

const ImageBox = styled.div`
  padding-left: 6.4rem;
`;

const Image = styled.img`
  width: 29.7rem;
  height: 16rem;
  object-fit: contain;

  margin-bottom: 1.6rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
