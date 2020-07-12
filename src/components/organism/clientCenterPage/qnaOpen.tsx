import React from "react";
import styled from "styled-components";

export default function QnaOpen({ content }) {
  return (
    <Wrapper>
      <Text>{content}</Text>
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
