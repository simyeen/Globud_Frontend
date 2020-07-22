import React from "react";
import styled from "styled-components";

export default function WeeksText({ detailActivities }) {
  const { id, name, description } = detailActivities;

  return (
    <Wrapper>
      <Title>
        <Blue>{id}주차, </Blue>
        {name}
      </Title>
      <Content>{description}</Content>
    </Wrapper>
  );
}

const Blue = styled.strong`
  color: #3f66f1;
`;

const Content = styled.p`
  width: 24.9rem;
  height: 7rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #555961;

  margin-left: 6.7rem;
`;

const Title = styled.p`
  width: 30rem;
  height: 2.1rem;
  font-size: 1.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #222426;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding-left: 2.2rem;
  padding-right: 2.2rem;
  margin-bottom: 5.1rem;
`;
