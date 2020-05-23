import React from "react";
import styled from "styled-components";

export default function PostCardContent({
  mbti,
  explanationLink,
  explanation,
  imageUrl,
}) {
  return (
    <Wrapper>
      <Mbti href={explanationLink}>{mbti}</Mbti>
      <Image src={imageUrl}></Image>
      <Explanation>{explanation}</Explanation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
`;

const Mbti = styled.a`
  font-size: 1.5rem;
  text-decoration: underline;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const Explanation = styled.p`
  font-size: 1.2rem;
`;
