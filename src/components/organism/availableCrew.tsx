import React from "react";
import styled from "styled-components";

export default function AvailableCrewList() {
  return <Wrapper></Wrapper>;
}

const CrewPlace = styled.p`
  width: 75px;
  height: 11px;
  font-family: NotoSansCJKKR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.52px;
  color: #7e8289;
`;

const dot = styled.p`
  width: 360px;
  height: 948px;
  background-color: var(--white);
`;

const CrewFee = styled.p`
  width: 85px;
  height: 11px;
  font-family: NotoSansCJKKR;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.52px;
  color: var(--blue-300);
`;

const CrewImformationWrapper = styled.div`
  dlsplay: flex;
  justify-content: flex-start;
`;

const CrewTitle = styled.h4`
  width: 264px;
  height: 23px;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.48px;
  color: #000000;
`;

const CrewHeader = styled.p`
  width: 26.4rem;
  height: 1.9rem;
  font-family: NotoSansCJKKR;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: -0.33px;
  color: #8b919b;
`;

const CrewImage = styled.img``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
