import React from "react";
import styled from "styled-components";

export default function DetailWorning() {
  return (
    <Wrapper>
      <SubWrapper>
        <Header>신청 전 주의사항</Header>
        <Header2>글로벗을 위해 주의사항을 꼭 지켜주세요!</Header2>
        <Image src="/worning1.png" alt="주의사항 1" />
        <Image src="/worning2.png" alt="주의사항 2" />
        <Image src="/worning3.png" alt="주의사항 3" />
      </SubWrapper>
      <Sapce />
    </Wrapper>
  );
}

const Sapce = styled.div`
  width: 100%;
  height: 15.2rem;
`;

const Image = styled.img`
  width: 31.4rem;
  height: 12.3rem;
  object-fit: contain;
`;

const Header2 = styled.p`
  width: 31.5rem;
  height: 2.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.056rem;
  color: #8b919b;

  margin-right: 0.1rem;
  margin-bottom: 0.6rem;
`;

const Header = styled.p`
  width: 31.6rem;
  height: 2.9rem;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.06rem;
  color: #222426;

  margin-top: 3.6rem;
`;

const SubWrapper = styled.div`
  padding-right: 2.2rem;
  padding-left: 2.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
